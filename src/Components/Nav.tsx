import { render } from '@testing-library/react';
import React from 'react'
import '../CSS/Nav.css'


type state = {
  searchWord: Array<{}>
}

class Nav extends React.Component <state, {}> {
  state = {searchWord: []}

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
            placeholder='Search by Name'
            name='search'
            value={this.state.searchWord}
          />
          <button>Search</button>
        </div>
      </div>
    )
  
  }
}

export default Nav;