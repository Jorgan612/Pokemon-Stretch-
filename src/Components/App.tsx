import '../CSS/App.css';
import React from 'react';
import Nav from './Nav.tsx';
import {fetchAllPoke} from '../ApiCalls/apiCalls.tsx'
import GenerationContainer from '../Components/GenerationsContainer.tsx';
import PokeContainer from '../Components/PokeContainer.tsx'
import {Routes, Route} from 'react-router-dom'

type state = {
  pokemon: Array <{}>,
  error: string
}

class App extends React.Component <state, {}> {
  state = {pokemon: [], error: ''}

  componentDidMount = () => {
    fetchAllPoke()
    .then(data => this.setState({pokemon: data.results}))
    .catch(error => this.setState({error: error}))
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <Routes>
          <Route path='/' element={<PokeContainer pokeInfo={this.state.pokemon} />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
