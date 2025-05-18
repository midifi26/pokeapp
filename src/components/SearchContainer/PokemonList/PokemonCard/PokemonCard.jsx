import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const heightCm = (pokemon.height * 10) / 100; // decímetros a centímetros
  const weightKg = (pokemon.weight / 10).toFixed(1); // ejemplo: 69 hg → 6.9 kg

  return (
    <article>
      <h2>{pokemon.name} (#{pokemon.id})</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {heightCm} m</p>
      <p>Peso: {weightKg} kg</p>
      <p>Tipo: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </article>
  );
};

export default PokemonCard;
