import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css';

const Nav = () => {
  return (
    <div className='nav-div'>
      <div>
        <h1 className='title'>Gotta Ketchum All</h1>
      </div>
      <div className='button-style'>
        <Link to='/'>
          <button className='nav-button'>Home</button>
        </Link>
        <Link to='/favorites'>
          <button className='nav-button'>Favorites</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav;