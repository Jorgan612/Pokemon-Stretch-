import React from 'react';
import { useParams } from 'react-router-dom';
import PokeDetails from './PokeDetails.tsx';

const URLParams = () => {
  
  const id = useParams().id;

  return (
    <div>
      <PokeDetails id={id}/>
    </div>
  )
}

export default URLParams;