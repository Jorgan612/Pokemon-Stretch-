import React from 'react';
import PokeCard from './PokeCard.tsx';
import '../CSS/Favorites.css';

const Favorites = ({favoritePokemon}) => {

  const mappedPokemon = favoritePokemon.map((pokemon, index) => {            
    return (
      <PokeCard 
        name={pokemon.name.toUpperCase()}
        sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[pokemon.id]}.png`}
        key={index}
        id={pokemon.id}
        favoritePokemon={favoritePokemon}
      />
    )
  })

  return(
    <section className='favorite-container'>
      {mappedPokemon.length > 0 ? mappedPokemon :
      <p className='nothing-here'>There are no pokemon here. Go add some favorites then come back!</p>}
    </section>
  );
}

export default Favorites;