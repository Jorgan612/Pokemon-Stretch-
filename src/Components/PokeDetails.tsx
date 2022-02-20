import React from "react"
import {fetchOnePoke} from '../ApiCalls/apiCalls.tsx'


// const fetchOnePoke = () => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(response => response.json())
//     .then(data => console.log(data))};

//     fetchOnePoke()
//     console.log(fetchOnePoke())

type state = {
    name: string ,
    height: number,
    weight: number,
    types: Array<{}>,
    abilities: Array<{}>
    image: string
}

class PokeDetails extends React.Component <{}> {
    state = {name: '',
             height: 0,
             weight: 0,
             types: [],
             abilities: [],
             image: ''
            }

    componentDidMount = () => {
       
            fetchOnePoke()
            console.log(fetchOnePoke())
    }

    render() {
        return(
            <>
            <h1>Hello World!</h1>
            </>
        )
    }
}

export default PokeDetails