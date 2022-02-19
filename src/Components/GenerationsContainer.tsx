import React from "react";
import Generations from "./Generations.tsx";


const GenerationContainer = ({pokeInfo}) => {
    let genOne;

    setTimeout(() => {
        genOne = pokeInfo.results.filter((pokemon,index) => index > 0 && index < 152)

      },2000)
    
      
      // const genTwo;
      // const genThree;
      // const genFour;
      // const genFive;
      // const genSix;
      // const genSeven;
      // const genEight;
    return (
        <>
        <Generations pokeInfo={genOne}/>
        
        </>
    )
}

export default GenerationContainer