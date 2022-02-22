import React from 'react'
import { fetchPokemonByGen } from '../ApiCalls/apiCalls.tsx'
import '../CSS/PokeContainer.css'
import PokeCard from './PokeCard.tsx'

interface state {
  pokemon: Array<{}>,
  error: string
}

class PokeContainer extends React.Component<state, {}> {
  state = {
    pokemon: [],
    error: ''
  }

  componentDidMount = () => {
    fetchPokemonByGen(1)
      .then(data => this.setState({pokemon: data.pokemon_species}))
      .catch(error => this.setState({error: error}))
  }

  listPokemon = () => {

    const a = this.state.pokemon

    console.log(a[0])

    // console.log(a[0].url.substring(a[0].lastIndexOf('/')))

    return this.state.pokemon.map((pokemon, index) => {
      return (
        <PokeCard 
          name={pokemon.name.toUpperCase()}
          sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[index+1]}.png`}
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