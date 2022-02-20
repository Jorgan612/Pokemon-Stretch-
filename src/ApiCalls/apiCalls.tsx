const fetchAllPoke = () => {
return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
.then(response => response.json())
}



export {fetchAllPoke}