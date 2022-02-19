export const fetchAllPoke = () => {
return fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
}