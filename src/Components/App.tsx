
import '../CSS/App.css';
import React from 'react';

type pokemon = {pokemon: []}

class App extends React.Component <pokemon, {}> {
  state = {pokemon: []}

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default App;
