import React from 'react'
import SearchedPokemon from './SearchedPokemon'


const SearchContainer = ({pokemonInfo, searchedWord}) => {
  let searchPokemon = pokemonInfo.filter((pokemon) => {
    let upperCasePropWord = searchedWord.toUpperCase()
    // let pokemonInfoName = pokemon.results.name
    if (pokemonInfoName && pokemonInfoName.includes(upperCasePropWord)) {
      return pokemon
    }
  })
  // .map over pokemon in order to make props for searchedPokemon card.
})

export default SearchContainer;