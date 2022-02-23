import React from 'react'
import { fetchPokemonByGen } from '../ApiCalls/apiCalls.tsx'
import '../CSS/PokeContainer.css'
import PokeCard from './PokeCard.tsx'
import SearchBar from './SearchBar.tsx'

type state = {
  pokemon: Array<{}>,
  error: string
  filteredPokemon: Array<{}>
}

class PokeContainer extends React.Component<state, {props}> {
  state = {
    pokemon: [],
    error: '',
    filteredPokemon: []
  }

  componentDidMount = () => {
    fetchPokemonByGen(this.interpretNumbers())
      .then(data => {
        this.setState({pokemon: data.pokemon_species})
        this.setState({filteredPokemon: data.pokemon_species})})
      .catch(error => this.setState({error: error}))
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

    const location = window.location.href.split('-')[1]
    const num = romanNumerals[location]
    return num;
  }

  listPokemon = () => {
    const sortedPoke = this.state.pokemon.sort((a, b) => {
      let urlA = Number(a.url.split('/')[6])
      let urlB = Number(b.url.split('/')[6])
      return urlA - urlB
    })
    
    return sortedPoke.map((pokemon, index) => {
      const pokeId = pokemon.url.split('/')[6]
      
      return (
        <PokeCard 
          name={pokemon.name.toUpperCase()}
          sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[pokeId]}.png`}
          key={index}
          id={index}
        />
      )
    })
  }

  render() {
    return(
      <div className='poke-container'>
        <SearchBar searchPokemon={this.searchPokemon}/>
        <section className="pokemon-grid">
          {this.listPokemon()}
        </section>
      
      </div>
    )
  }
}

export default PokeContainer;