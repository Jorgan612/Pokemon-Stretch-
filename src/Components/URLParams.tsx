import '../CSS/URLParams.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import PokeDetails from './PokeDetails.tsx';

const URLParams = ({addFavoritePokemon, favoritePokemon}) => {

  const id = useParams().id;

  return (
    <div className='div'>
      <PokeDetails id={id} addFavoritePokemon={addFavoritePokemon} favoritePokemon={favoritePokemon}/>
    </div>
  )
}

export default URLParams;