const fetchAllPoke = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
  const data = await response.json();
  return data;
}

const fetchGenerationPoke = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/generation/')
  const data = await response.json();
  return data;
}

const fetchPokemonByGen = async(id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/generation/${id}`);
  const data = await response.json();
  return data;
}

const fetchOnePoke = async(id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${[id]}/`);
  const data = await response.json();
  return data;
}

export {fetchAllPoke, fetchOnePoke, fetchGenerationPoke, fetchPokemonByGen}