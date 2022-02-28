import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPokemonByGen, fetchAllPoke } from '../ApiCalls/apiCalls.tsx';
import '../CSS/PokeContainer.css';
import PokeCard from './PokeCard.tsx';
import SearchBar from './SearchBar.tsx';
import Error from './Error.tsx';

type state = {
  pokemon: Array<{}>,
  filteredPokemon: Array<{}>
  error: string
}

class PokeContainer extends React.Component<state, { allPoke }> {
  state = {
    pokemon: [],
    filteredPokemon: [],
    error: '',
  }

  componentDidMount = () => {
    const url = window.location.pathname;
    
    if (url === '/all-pokemon') {
      fetchAllPoke()
        .then(data => {
          this.setState({pokemon: data.results})
          this.setState({filteredPokemon: data.results})})
        .catch(error => this.setState({error: error}))  
    } else {
      fetchPokemonByGen(this.interpretNumbers())
        .then(data => {
          this.setState({pokemon: data.pokemon_species})
          this.setState({filteredPokemon: data.pokemon_species})})
        .catch(error => this.setState({error: error}))
    }
  }

  searchPokemon = (searchQuery) => {
    const filteredPokemon = this.state.filteredPokemon.filter(pokemon => {
      const lowerCasePokemon = pokemon.name.toLowerCase()
      return lowerCasePokemon.includes(searchQuery.toLowerCase())
    })
    this.setState({pokemon: filteredPokemon})
  }

  interpretNumbers = () => {
    const romanNumerals = {
      i: 1,
      ii: 2,
      iii: 3,
      iv: 4,
      v: 5,
      vi: 6,
      vii: 7,
      viii: 8
    }

    const location = window.location.href.split('-');
    const num = romanNumerals[location[location.length - 1]];
    return num;
  }

  listPokemon = () => {
    const sortedPoke = this.state.pokemon.sort((a, b) => {
      let urlA = Number(a.url.split('/')[6]);
      let urlB = Number(b.url.split('/')[6]);
      return urlA - urlB;
    })

    return sortedPoke.map((pokemon, index) => {
      const pokeId = pokemon.url.split('/')[6];
            
      return (
        <PokeCard 
          name={pokemon.name.toUpperCase()}
          sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[pokeId]}.png`}
          key={index}
          id={pokeId}
        />
      )
    })
  }

  render() {
    return(
      <div className='poke-container'>
        <div className='search-back'>
          <SearchBar searchPokemon={this.searchPokemon}/>
          <Link to='/'>
            <button className='go-back'>Go Back</button>
          </Link>
        </div>
        {this.state.filteredPokemon.length > 0 ? 
        <>
          <section className="pokemon-grid">
            {this.listPokemon()}
          </section> 
        </> 
        : <Error />}
      </div>
    )
  }
}

export default PokeContainer;

