import React, { useState } from "react";
import Search from "./Search";
import PokemonList from "./PokemonList";
import "./SearchContainer.css";

const SearchContainer = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const searchPokemon = async (pokemonName) => {
    const name = pokemonName.toLowerCase();

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }

      const data = await response.json();

      // Ahora comprobamos por ID, no por nombre de entrada
      const alreadyExists = pokemonList.some((p) => p.id === data.id);
      if (alreadyExists) return;

      setPokemonList((prevList) => [...prevList, data]);
    } catch (error) {
      console.error("Error al buscar el Pokémon:", error.message);
      alert("Pokémon no encontrado. Intenta con otro nombre o ID.");
    }
  };

  return (
    <div>
      <Search onSearch={searchPokemon} />
      {pokemonList.length === 0 ? (
        <img
          id="welcome-image"
          src="https://i.blogs.es/46c93b/pokemon/840_560.jpeg"
          alt="Bienvenido a la PokéApp"
        />
      ) : (
        <PokemonList pokemonList={pokemonList} />
      )}
    </div>
  );
};

export default SearchContainer;

