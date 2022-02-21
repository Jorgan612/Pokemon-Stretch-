import React from 'react'
import '../CSS/PokeContainer.css'
import PokeCard from './PokeCard.tsx'

interface pokeInfo {
  pokeInfo: Array<pokeDetails>,
}

interface pokeDetails {
  name: string,
  sprite: string
}


const PokeContainer: React.FC<pokeInfo> = ({pokeInfo}) => {
  const pokeList = pokeInfo.map((pokemon, index) => {
  if(index < 151){
    return(
      <PokeCard 
        name={pokemon.name.toUpperCase()}
        sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[index+1]}.png`}
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