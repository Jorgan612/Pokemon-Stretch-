import React from "react";
import Generations from "./Generations.tsx";


const GenerationContainer = ({pokeInfo}) => {
    let genOne;
    let genTwo;
    let genThree;
    let genFour;
    let genFive;
    let genSix;
    let genSeven;
    let genEight;


    setTimeout(() => {
        genOne = pokeInfo.results.filter((pokemon, index) => index > 0 && index < 151)
        genTwo = pokeInfo.results.filter((pokemon, index) => index > 151 && index < 251 )
        genThree = pokeInfo.results.filter((pokemon, index) => index > 251 && index < 386 )
        genFour = pokeInfo.results.filter((pokemon, index) => index > 386 && index < 493 )
        genFive = pokeInfo.results.filter((pokemon, index) => index > 493 && index < 649 )
        genSix = pokeInfo.results.filter((pokemon, index) => index > 649 && index < 721 )
        genSeven = pokeInfo.results.filter((pokemon, index) => index > 721 && index < 809 )
        genEight = pokeInfo.results.filter((pokemon, index) => index > 809 && index < 905 )
      }, 2000)

      const genArray = [genOne, genTwo, genThree, genFour, genFive, genSix, genSeven, genEight]
    
    const genList = genArray.map((gen, index) => {
        
        return(
            <Generations 
                pokeInfo={gen}
                key={index}
            />
        )
    })

      
    return (
       <section className="gen-container">
           {genList}
       </section>
    )
}

export default GenerationContainer