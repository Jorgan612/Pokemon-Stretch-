import React from 'react'
import { fetchPokemonByGen } from '../ApiCalls/apiCalls.tsx'
// import { useLocation } from 'react-router-dom';
import '../CSS/PokeContainer.css'
import PokeCard from './PokeCard.tsx'

type state = {
  pokemon: Array<{}>,
  error: string
}

class PokeContainer extends React.Component<state, {props}> {
  state = {
    pokemon: [],
    error: ''
  }

  componentDidMount = () => {
    fetchPokemonByGen(this.interpretNumbers())
      .then(data => this.setState({pokemon: data.pokemon_species}))
      .catch(error => this.setState({error: error}))
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
      <section className="pokemon-container">
        <h3>{this.listPokemon()}</h3>
      </section>
    )
  }
}

export default PokeContainer;