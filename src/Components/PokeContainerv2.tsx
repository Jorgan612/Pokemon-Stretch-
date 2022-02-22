import React from 'react'
import { fetchPokemonByGen } from '../ApiCalls/apiCalls'
import '../CSS/PokeContainer.css'
import PokeCard from './PokeCard.tsx'

interface state {
  pokemon: Array<pokeDetails>,
  error: string
}

interface pokeDetails {
  name: string,
  sprite: string
}

class PokeContainerv2 extends React.Component<state, {}> {
  state = {
    pokemon: [],
    error: ''
  }

  componentDidMount = () => {
    fetchPokemonByGen(1)
      .then(data => this.setState({pokemon: data.pokemon_species}))
      .catch(error => this.setState({error: error}))
  }



  render() {
    return(
      <section className="pokemon-container">
        <h3>here</h3>
      </section>
    )
  }
}

export default PokeContainerv2;