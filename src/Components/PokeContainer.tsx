import React from 'react'
import '../CSS/PokeContainer.css'
import PokeCard from './PokeCard.tsx'


const PokeContainer = ({pokeInfo}) => {
  const pokeList = pokeInfo.map((pokemon, index) => {
    return(
      <PokeCard 
        name={pokemon.name}
        key={index}
      />
    )
  })
  return(
    <section className="pokemon-container">
      {pokeList}
    </section>
  )
}

export default PokeContainer;