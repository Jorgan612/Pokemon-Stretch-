import '../CSS/PokeDetails.css';
import React from "react";
import { Link } from 'react-router-dom';
import { fetchOnePoke } from '../ApiCalls/apiCalls.tsx';

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
  id: number
}

type MyState = {
  pokemon: pokemon,
  isFavorited: boolean
  error: string
}

class PokeDetails extends React.Component <MyState, {props}> {
  state: MyState = {
    pokemon: {},
    isFavorited: false,
    error: ''
  }
  
  componentDidMount = () => {    
    fetchOnePoke(Number(this.props.id) + 1)
      .then(data => this.setState({pokemon: data}))
      .catch(err => this.setState({error: err}))
      .finally(this.checkIfFavorited())
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

  favoritePokemon = () => {
    const favPoke = {
      ...this.state.pokemon
    }

    const pokeNames = this.props.favoritePokemon.map(pokemon => {
      return pokemon.name;
    })

    if(!pokeNames.includes(favPoke.name)) {
      this.props.addFavoritePokemon(favPoke)
      this.setState({isFavorited: true})
    }else {
      console.log('already here, dingus')
      return false
    }
  }

  checkIfFavorited = () => {
    const pokeNames = this.props.favoritePokemon.map(pokemon => {
      return pokemon.name;
    })

    console.log('pokeNames', pokeNames)
    console.log('name', this.state.pokemon)

    if(pokeNames.includes(this.state.pokemon.name)) {
      this.setState({isFavorited: true})
    }
  }
  
  render() {
    const pokemon = this.state.pokemon;
    const favButton = <button className='favorite' onClick={event => this.favoritePokemon(event)}>Favorite</button>
    const disabledButton = <button className='disabled' onClick={event => this.favoritePokemon(event)}>Favorite</button>

    //have link interpret pokemon generation roman numeral for go back button
    return(
      <section className='poke-details'>
        <div className='name-sprite'>
          <div className='details-sprite-container'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[pokemon.id]}.png`} alt={`${pokemon.name} sprite`} className='details-sprite'/>
          </div>
          <div className='buttons'>
            <Link to='/'> 
              <button className='home'>Go Back</button>
            </Link>
            {this.state.isFavorited ? disabledButton : favButton}
            {/* <button className='favorite' onClick={event => this.favoritePokemon(event)}>Favorite</button> */}
          </div>
          <div className='name-id'>
            <h3 className='name'>{this.capitalizeName(pokemon.name)}</h3>
            <p className='id'>ID: #{pokemon.id}</p>
          </div>
        </div>
        <div className='center-detail'></div>
        <div className='poke-stats-style'>
          <div className='poke-stats'>
            <div className='height-weight'>
              <p className='height'><span>Height:</span> {pokemon.height} units</p>
              <p className='weight'><span>Weight:</span> {pokemon.weight} units</p>
            </div>
            <div className='white-space-deco'>
              <img src={require('../Assets/flat-pokeball.png')} alt='pokeballs' className='small-balls'/>
              <div className='line'></div>
              <img src={require('../Assets/flat-pokeball.png')} alt='pokeballs' className='small-balls'/>
            </div>
            <div className='types-abilities'>
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
            </div>
            <div className='white-space-deco'>
              <img src={require('../Assets/flat-pokeball.png')} alt='pokeballs' className='small-balls'/>
              <div className='line'></div>
              <img src={require('../Assets/flat-pokeball.png')} alt='pokeballs' className='small-balls'/>
            </div>
            <label className='moves'>Moves:
              <select name='moves' className='tags-drop-down' size='5'>
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