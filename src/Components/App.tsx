import '../CSS/App.css';
import React from 'react';
import Nav from './Nav.tsx';
import { fetchGenerationPoke } from '../ApiCalls/apiCalls.tsx'
import GenerationContainer from '../Components/GenerationsContainer.tsx';
import PokeContainer from './PokeContainer.tsx'
import URLParams from './URLParams.tsx';
import {Routes, Route} from 'react-router-dom'

type state = {
  generations: Array <{}>,
  error: string
}

class App extends React.Component <state, {}> {
  state = {
    generations: [], 
    error: ''
  }

  componentDidMount = () => {
    fetchGenerationPoke()
    .then(data => this.setState({generations: data.results}))
    .catch(error => this.setState({error: error}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Gotta Ketchum All</h1>
        <Routes>
          <Route path='/' element={<GenerationContainer genInfo = {this.state.generations} />} />
          {/* <Route path='/' element={<PokeContainer pokeInfo={this.state.generations} />}/> */}
          <Route path='/:generation' element={<PokeContainer />} />
          <Route path='/:generation/:id' element={<URLParams />} />
        </Routes>
      </div>
    );
  }
}

export default App;
