import '../CSS/App.css';
import React from 'react';
import Nav from './Nav.tsx';
import {fetchAllPoke} from '../ApiCalls/apiCalls.tsx'
import GenerationContainer from '../Components/GenerationsContainer.tsx';
import PokeContainer from './PokeContainer.tsx'
import URLParams from './URLParams.tsx';
import {Routes, Route} from 'react-router-dom'
import SearchContainer from './SearchContainer.tsx';


type state = {
  pokemon: Array <{}>,
  error: string,
  searchedName: string
}

class App extends React.Component <state, {}> {
  state = {pokemon: [], error: '', searchedName: ''}

  componentDidMount = () => {
    fetchAllPoke()
    .then(data => this.setState({pokemon: data.results}))
    .catch(error => this.setState({error: error}))
  }

  searchByName = (searchedName) => {
    this.setState({searchedName: searchedName.searchWord})
  }

  render() {
    return (
      <div className="App">
        <Nav searchByName={this.searchByName} />
        <Routes>
          <Route path='/' element={<PokeContainer pokeInfo={this.state.pokemon} />}/>
          <Route path='/:id' element={<URLParams />} />
          {/* <Route path='/searched' element={<SearchContainer pokemonInfo={this.state.pokemon} searchWord={this.state.searchedName}/>} */}
        </Routes>
      </div>
    );
  }
}

export default App;
