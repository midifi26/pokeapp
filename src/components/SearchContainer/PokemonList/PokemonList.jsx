import React from "react";
import PokemonCard from "./PokemonCard";


const PokemonList = ({ pokemonList }) => {
  return (
    <section>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default PokemonList;

