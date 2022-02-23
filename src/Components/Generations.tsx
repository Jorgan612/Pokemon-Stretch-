import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Generations.css';

const Generations = ({genName, id}) => {

  return (
    <Link to={`${genName}`} className='generation-card' id={id}>
      <img className ='pokeball' src={require('../Assets/flat-pokeball.png')} alt='pokeball background'/>
      <h2 className='generation-name'>{genName.toUpperCase()}</h2>
    </Link>
  )
}

export default Generations;


