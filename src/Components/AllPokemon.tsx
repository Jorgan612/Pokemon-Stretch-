import React from "react";
import { Link } from 'react-router-dom';
import '../CSS/AllPokemon.css';

const AllPokemon = ({allPoke}) => {

  return(
    <Link to='/all-pokemon' className='generation-card' >
      <img className ='pokeball' src={require('../Assets/flat-pokeball.png')} alt='pokeball background'/>
      <h2 className='generation-name'>All</h2>
    </Link>
  )
}

export default AllPokemon;