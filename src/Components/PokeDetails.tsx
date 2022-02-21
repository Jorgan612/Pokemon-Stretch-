import '../CSS/PokeDetails.css'
import React from "react"
import {fetchOnePoke} from '../ApiCalls/apiCalls.tsx'

type pokemon = {
  name: string,
  height: number,
  weight: number,
  types: Array<{}>,
  abilities: Array<{}>,
  moves: Array<{}>,
  sprites: {},
  stats: Array<{}>
}

type MyState = {
  pokemon: pokemon,
  error: string
}

class PokeDetails extends React.Component <MyState, {props}> {
  state: MyState = {
    pokemon: {},
    error: ''
  }
  
  componentDidMount = () => {
    fetchOnePoke(this.props.id)
      .then(data => this.setState({pokemon: data}))
      .catch(err => this.setState({error: err}))
  }

  displayAbilities = () => {
    setTimeout(() => {
      return this.state.pokemon.abilities.map((property, index) => {
        return <li key={index}>{property.ability.name}</li>
      })
    }, 2000)
  }
  
  render() {
    const pokemon = this.state.pokemon;
    // console.log('render', pokemon.abilities)

    return(
      <section className='poke-details'>
        <h1>{pokemon.name}</h1>
        <p className='height'>Height: {pokemon.height} units</p>
        <p className='weight'>Weight: {pokemon.weight} units</p>
        <ul>Abilities: 
          <div className='abilities'>{this.displayAbilities()}</div>
        </ul>
        {/* <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`}/> */}
      </section>
    )
  }
}

export default PokeDetails