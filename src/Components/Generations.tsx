import React from 'react';
import '../CSS/Generations.css';

const Generations = ({pokeInfo}) => {
  console.log(pokeInfo)

  const genOne = pokeInfo.results.filter((pokemon, index) => {
    return index < 151
  })
  // const genTwo;
  // const genThree;
  // const genFour;
  // const genFive;
  // const genSix;
  // const genSeven;
  // const genEight;


  return (
    <h1>TEST</h1>
  )
}

export default Generations;


