import { render } from '@testing-library/react';
import React from 'react'
import '../CSS/Nav.css'


type state = {
  searchWord: string
}

class Nav extends React.Component <state, {}> {
  state = {searchWord: ''}

  handleChange = (event) => {
    this.setState({searchWord: event.target.value})
  }

  submitWord = (event) => {
    const searchedName = {...this.state}
    this.props.searchByName(searchedName)
  }

  render() {
    return (
      <div className='nav-div'>
        <div>
          <h1 className='title'>Gotta Ketchum All</h1>
        </div>
        <div>
          <button>Home</button>
          <button>Favorites</button>
          <input 
            type='text'
            name='search'
            placeholder='Search by Name'
            value={this.state.searchWord}
            onChange={(event) => this.handleChange(event)}
          />
          <button onClick={(event) => this.submitWord(event) }>Search</button>
        </div>
      </div>
    )
  
  }
}

export default Nav;