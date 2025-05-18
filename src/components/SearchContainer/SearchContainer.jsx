import React, {useState} from "react";
import Search from "./Search";
import PokemonList from "./PokemonList";

const SearchContainer = () => {
  
  const [pokemonList, setPokemonList] = useState([]);
  const addPokemon = (pokemon) => {
  setPokemonList([...pokemonList, pokemon]);
};
const searchPokemon = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }

    const data = await response.json();

    // Puedes agregarlo a una lista:
    setPokemonList([...pokemonList, data]);

    // O simplemente reemplazar la lista con uno solo:
    // setPokemonList([data]);
  } catch (error) {
    console.error("Error al buscar el Pokémon:", error.message);
    alert("Pokémon no encontrado. Intenta con otro nombre o ID.");
  }
};


  return <>
    <Search onSearch={searchPokemon} />
    <PokemonList pokemonList={pokemonList} />
  </>
};

export default SearchContainer;
