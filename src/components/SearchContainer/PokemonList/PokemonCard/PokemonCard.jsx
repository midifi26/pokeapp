import React from "react";
import {Link} from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const heightM = (pokemon.height * 10) / 100; // decímetros a centímetros
  const weightKg = (pokemon.weight / 10).toFixed(1); // ejemplo: 69 hg → 6.9 kg



  return (
    <article>
      <Link to={`/pokemon/${pokemon.id}`}>
        <h2>{pokemon.name} (#{pokemon.id})</h2>
      </Link>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {heightM} m</p>
      <p>Peso: {weightKg} kg</p>
      <p>Tipo: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </article>
  );
};

export default PokemonCard;
