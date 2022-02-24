import '../CSS/App.css';
import React from 'react';
import Nav from './Nav.tsx';
import { fetchGenerationPoke } from '../ApiCalls/apiCalls.tsx'
import GenerationContainer from '../Components/GenerationsContainer.tsx';
import PokeContainer from './PokeContainer.tsx'
import URLParams from './URLParams.tsx';
import Favorites from './Favorites.tsx';
import {Routes, Route} from 'react-router-dom'


type state = {
  generations: Array<{}>,
  favoritePokemon: Array<{}>
  error: string,
}
    
class App extends React.Component <state, {}> {
  state = {
    generations: [],
    favoritePokemon: [],
    error: '',
  }

  componentDidMount = () => {
    fetchGenerationPoke()
    .then(data => this.setState({generations: data.results}))
    .catch(error => this.setState({error: error}))
  }

  addFavoritePokemon = (pokemon) => {
    if(!this.state.favoritePokemon.includes(pokemon)) {
      this.setState({favoritePokemon: [...this.state.favoritePokemon, pokemon]})
      console.log(this.state.favoritePokemon)
    }
  }

  render() {
    return (
      <div className="App">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/943ec16e-44af-4af3-b2bb-7b3de7fc6608/d2975o8-f3965afc-5626-450d-98cc-d630df89825f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi85NDNlYzE2ZS00NGFmLTRhZjMtYjJiYi03YjNkZTdmYzY2MDgvZDI5NzVvOC1mMzk2NWFmYy01NjI2LTQ1MGQtOThjYy1kNjMwZGY4OTgyNWYucG5nIn1dXX0.FyS6zHOx3SFUg1_d_xgMHUQpOHxz-pfrsFmmmZWxKRY" alt='background-map' className='background-img' position='fixed'/>
        <Nav/>
        <Routes>
          <Route path='/' element={<GenerationContainer genInfo={this.state.generations} />} />
          <Route path='/:generation' element={<PokeContainer prop={this.state.generations}/>} />
          <Route path='/:generation/:id' element={<URLParams addFavoritePokemon={this.addFavoritePokemon} favoritePokemon={this.state.favoritePokemon}/>} />
          <Route path='/favorites' element={<Favorites favoritePokemon={this.state.favoritePokemon}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
