import React from 'react'
import '../CSS/PokeCard.css'

const PokeCard = ({name, id}) => {
  id = id +1
  let state = {
    name: ''

  }
  const fetchOnePoke = () => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => console.log(data))};

    fetchOnePoke()
    console.log(fetchOnePoke())

  
 return(
   <div>
     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
     <h1>{name}</h1>
   </div>
 )
}

export default PokeCard;