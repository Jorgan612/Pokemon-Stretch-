import React from "react"
import {fetchOnePoke} from '../ApiCalls/apiCalls.tsx'

type state = {
    name: string ,
    height: number,
    weight: number,
    types: Array<{}>,
    abilities: Array<{}>
    image: string
}

class PokeDetails extends React.Component <{}> {
  state = {
    name: '',
    height: 0,
    weight: 0,
    types: [],
    abilities: [],
    image: ''
  }

    // componentDidMount = () => {
       
    //         fetchOnePoke()
    //         console.log(fetchOnePoke())
    // }

  render() {
    return(
      <section className='poke-details'>
        <h1>Hello World!</h1>
      </section>
    )
  }
}

export default PokeDetails