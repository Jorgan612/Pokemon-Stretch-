import React from 'react'
import '../CSS/PokeContainer.css'
import PokeCard from './PokeCard.tsx'


const PokeContainer = ({pokeInfo}) => {
  const pokeList = pokeInfo.map((pokemon, index) => {
  if(index < 151){
    return(
      <PokeCard 
        name={pokemon.name}
        key={index}
        id={index}
      />
    )
    }})
  
  
    
  return(
    <section className="pokemon-container">
      {pokeList}
    </section>
  )
}

export default PokeContainer;