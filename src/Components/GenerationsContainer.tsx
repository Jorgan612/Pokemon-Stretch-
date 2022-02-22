import React from "react";
import Generations from "./Generations.tsx";
import '../CSS/GenerationContainer.css';


const GenerationContainer = ({genInfo}) => {
    
  const genList = genInfo.map((gen, index) => {
    return(
      <Generations 
        genName={gen.name}
        id={[index + 1]}
        key={[index + 1]}
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