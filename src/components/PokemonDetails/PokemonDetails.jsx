import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

const PoKemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null); 

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error al cargar detalles:", error);
      }
    };
    fetchDetails();
  }, [id]);

 if (!pokemon) return <p>Cargando detalles...</p>;

  return (
    <div>
      <h1>{pokemon.name} (#{pokemon.id})</h1>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="pokemon-details" />
      <p>Altura: {(pokemon.height * 10) / 100} m</p>
      <p>Peso: {(pokemon.weight / 10).toFixed(1)} kg</p>
      <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p>Experiencia base: {pokemon.base_experience}</p>

      <h3>Habilidades</h3>
      <ul>
        {pokemon.abilities.map((a) => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>

      <h3>Estadísticas</h3>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>

      <h3>Movimientos (primeros 5)</h3>
      <ul>
        {pokemon.moves.slice(0, 5).map((m) => (
          <li key={m.move.name}>{m.move.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default PoKemonDetails;
