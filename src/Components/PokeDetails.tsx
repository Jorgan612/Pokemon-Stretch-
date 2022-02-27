import '../CSS/PokeDetails.css';
import React from "react";
import { Link } from 'react-router-dom';
import { fetchOnePoke } from '../ApiCalls/apiCalls.tsx';
import Error from './Error.tsx'

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

type state = {
  pokemon: pokemon,
  isFavorited: boolean
  error: string
}

class PokeDetails extends React.Component <state, {props}> {
  state = {
    pokemon: {},
    isFavorited: false,
    error: ''
  }
  
  componentDidMount = () => {    
    fetchOnePoke(Number(window.location.pathname.split('/')[2]) + 1)
      .then(data => this.setState({pokemon: data}))
      .catch(err => this.setState({error: err}))
  }

  displayProperties = (propertyOne, propertyTwo) => {
    if(this.state.pokemon[propertyOne] && propertyOne !== 'moves') {
      return this.state.pokemon[propertyOne].map((property, index) => {
        return <li key={index}>{this.capitalizeName(property[propertyTwo].name)}</li>
      })
    }else if(this.state.pokemon[propertyOne]) {
      return this.state.pokemon[propertyOne].map((property, index) => {
        return <option value={property[propertyTwo].name} key={index}>{this.capitalizeName(property[propertyTwo].name)}</option>
      })
    }
  }

  capitalizeName = (string) => {
    if(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  favoritePokemon = (event) => {
    const favPoke = {
      ...this.state.pokemon
    }

    const pokeNames = this.props.favoritePokemon.map(pokemon => {
      return pokemon.name;
    })

    console.log(window.location.pathname.includes('favorites'))

    if(!pokeNames.includes(favPoke.name)) {
      this.props.addFavoritePokemon(favPoke)
      this.setState({isFavorited: true})
      return true;
    }else {
      this.props.removeFavoritePokemon(event)
      this.setState({isFavorited: false})
      return false;
    }
  }
  
  goBack = () => {
    let urlParts = window.location.href.split('/');
    urlParts.pop();
    return '/' + urlParts.splice(-1)[0];
  }

  whatever = () => {
    if(this.state.isFavorited) {
      const disabledButton = <button className='disabled' id={pokemon.name} onClick={event => this.favoritePokemon(event)}>Un-Favorite</button>
    }else if(window.location.pathname.includes('favorites')) {
      const disabledButton = <button className='disabled' id={pokemon.name} onClick={event => this.favoritePokemon(event)}>Un-Favorite</button>
    }else {
      const favButton = <button className='favorite' onClick={event => this.favoritePokemon(event)}>Favorite</button>
    }
  }

  render() {
    const pokemon = this.state.pokemon;
    const favButton = <button className='favorite' onClick={event => this.favoritePokemon(event)}>Favorite</button>
    const disabledButton = <button className='disabled' id={pokemon.name} onClick={event => this.favoritePokemon(event)}>Un-Favorite</button>

    return(
      <>
      {this.state.pokemon.name ? 
      <section className='poke-details'>
        <div className='name-sprite'>
          <div className='details-sprite-container'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[pokemon.id]}.png`} alt={`${pokemon.name} sprite`} className='details-sprite'/>
          </div>
          <div className='buttons'>
            <Link to={{pathname: this.goBack()}} >
              <button className='home'>Go Back</button>
            </Link>
            {this.state.isFavorited || window.location.pathname.includes('favorites') ? disabledButton : favButton}
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
              <p className='height'><span>Height:</span> {pokemon.height/10} meters</p>
              <p className='weight'><span>Weight:</span> {pokemon.weight/10} kilograms</p>
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
      : <Error />}
      </>
    )
  }
}

export default PokeDetails