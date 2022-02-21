import React from 'react'
import '../CSS/PokeCard.css'
import PokeDetails from './PokeDetails.tsx'


//do we need type also?

const PokeCard = ({name, sprite, id}) => {
  
 return(
   <section className='poke-card'>
     <img src={sprite} alt='pokemon character'/>
     <h1>{name}</h1>
   </section>
 )
}

export default PokeCard;