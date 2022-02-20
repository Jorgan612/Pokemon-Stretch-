import React from 'react'
import '../CSS/PokeCard.css'
import PokeDetails from './PokeDetails.tsx'


const PokeCard = ({name, id}) => {
  id = id +1
  let state = {
    name: ''

  }
  

  
 return(
   <div>
     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
     <h1>{name}</h1>
     <PokeDetails />
   </div>
 )
}

export default PokeCard;