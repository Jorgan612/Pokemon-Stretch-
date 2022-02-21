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
        <img className='background' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/71f5d2f6-e956-4945-863c-870ebd656778/d69q1vi-c8a14272-d105-40a7-b62f-5d8427495b51.png' alt='Kanto map' />
        <h1 className='title'>Gotta Ketchum All</h1>
        <Routes>
          <Route path='/' element={<PokeContainer pokeInfo={this.state.pokemon} />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
