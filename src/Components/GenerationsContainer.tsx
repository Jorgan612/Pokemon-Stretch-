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
    <div className="gen-container">
      <h2 className="gen-title">Choose Pokemon Generation</h2>
      <section className="gen-list">
        {genList}
      </section>
    </div>
  )
}

export default GenerationContainer