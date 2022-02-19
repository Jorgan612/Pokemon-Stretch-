
import '../CSS/App.css';
import React from 'react';
import Nav from './Nav.tsx';
import Generations from './Generations.tsx';
import {fetchAllPoke} from '../ApiCalls/apiCalls.tsx'


type pokemon = {pokemon: []}

class App extends React.Component <pokemon, {}> {
  state = {pokemon: []}

  componentDidMount = () => {
    fetchAllPoke()
    .then(data => this.setState({pokemon: data}))
  }

  render() {
    return (
      <div className="App">
        
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default App;
