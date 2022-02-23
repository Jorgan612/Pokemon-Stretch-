import '../CSS/PokeDetails.css'
import React from "react"
import { Link } from 'react-router-dom';
import {fetchOnePoke} from '../ApiCalls/apiCalls.tsx'

type ability = {
  name: string
  url: string
}

type move = {
  name: string
  url: string
}

type front_default = {
  front_default: string
}

type pokemon = {
  name: string
  height: number
  weight: number
  types: Array<{}>
  abilities: Array<ability>
  moves: Array<move>
  sprites: front_default
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
    fetchOnePoke(Number(this.props.id) + 1)
      .then(data => this.setState({pokemon: data}))
      .catch(err => this.setState({error: err}))
  }

  displayProperties = (propertyOne, propertyTwo) => {
    if(this.state.pokemon[propertyOne] && propertyOne !== 'moves') {
      return this.state.pokemon[propertyOne].map((property, index) => {
        return <li key={index}>{property[propertyTwo].name}</li>
      })
    }else if(this.state.pokemon[propertyOne]) {
      return this.state.pokemon[propertyOne].map((property, index) => {
        return <option value={property[propertyTwo].name} key={index}>{property[propertyTwo].name}</option>
      })
    }
  }

  capitalizeName = (string) => {
    if(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
  
  render() {
    const pokemon = this.state.pokemon;

    return(
      <section className='poke-details'>
        <div className='name-sprite'>
          <div className='details-sprite-div'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[pokemon.id]}.png`} alt={`${pokemon.name} sprite`} className='details-sprite'/>
          </div>
          <div className='buttons'>
            <Link to='/'>
              <button className='home'>Go Back</button>
            </Link>
            <button className='favorite'>Favorite</button>
          </div>
          <h1 className='name'>{this.capitalizeName(pokemon.name)}</h1>
        </div>
        <div className='center-detail'></div>
        <div className='poke-stats-style'>
          <div className='poke-stats'>
            <p className='height'>Height: {pokemon.height} units</p>
            <p className='weight'>Weight: {pokemon.weight} units</p>
            <div className='types'>
              <ul>Types:
                <div className='type'>{this.displayProperties('types', 'type')}</div>
              </ul>
            </div>
            <div className='abilities'>
              <ul>Abilities: 
                <div className='ability'>{this.displayProperties('abilities', 'ability')}</div>
              </ul>
            </div>
            <label className='moves'>Moves:
              <select name='moves' className='tags-drop-down'>
                {this.displayProperties('moves', 'move')}
              </select>
            </label>
          </div>
        </div>
      </section>
    )
  }
}

export default PokeDetails