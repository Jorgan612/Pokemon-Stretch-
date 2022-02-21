const fetchAllPoke = () => {
return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
.then(response => response.json())
}


type id = string;

const fetchOnePoke = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  return data;
  // return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  //   .then(response => response.json())
}

export {fetchAllPoke, fetchOnePoke}