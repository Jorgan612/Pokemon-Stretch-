import React from 'react';
import '../CSS/PokeCard.css';
import { Link } from 'react-router-dom';

//do we need type also?

const PokeCard = ({name, sprite, id}) => {
  
 return(
   <Link to={`${id}`} className='poke-card' >
     <img src={sprite} alt='pokemon character'/>
     <p className='pokemon-name'>{name}</p>
   </Link>
 )
}

export default PokeCard;