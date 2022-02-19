import React from 'react';
import '../CSS/App.css';


type pokemon = {pokemon: []}
class App extends React.Component <pokemon, {}> {
  state = {pokemon: []}



  render () {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
  }
} 

export default App;
