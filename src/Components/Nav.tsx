import React from 'react'
import '../CSS/Nav.css'

const Nav  = () =>  {

    return (
      <div className='nav-div'>
        <div>
          <h1 className='title'>Gotta Ketchum All</h1>
        </div>
        <div className='nav-button-div'>
          <button>Home</button>
          <button>Favorites</button>
        </div>
      </div>
    )
}

export default Nav;