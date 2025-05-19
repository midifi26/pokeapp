// import React, { useState } from "react";
// import { useContext } from "react";
// import { PokemonContext } from "../../context/PokemonContext";
// import Search from "./Search";
// import PokemonList from "./PokemonList";
// import "./SearchContainer.css";

// const SearchContainer = () => {

//   const [pokemonList, setPokemonList] = useState([]);
//   const { createdPokemon } = useContext(PokemonContext);

//   const searchPokemon = async (pokemonName) => {
//     const name = pokemonName.toLowerCase();

//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//       if (!response.ok) {
//         throw new Error("Pokémon no encontrado");
//       }

//       const data = await response.json();

//       // Ahora comprobamos por ID, no por nombre de entrada
//       const alreadyExists = pokemonList.some((p) => p.id === data.id);
//       if (alreadyExists) return;

//       setPokemonList((prevList) => [...prevList, data]);
//     } catch (error) {
//       console.error("Error al buscar el Pokémon:", error.message);
//       alert("Pokémon no encontrado. Intenta con otro nombre o ID.");
//     }
//   };

//   return (
//     <div>
//       <Search onSearch={searchPokemon} />
//       {pokemonList.length === 0 ? (
//         <img
//           id="welcome-image"
//           src="https://i.blogs.es/46c93b/pokemon/840_560.jpeg"
//           alt="Bienvenido a la PokéApp"
//         />
//       ) : (
//         <PokemonList pokemonList={pokemonList} />
//       )}
//     </div>
//   );
// };

// export default SearchContainer;

//`https://pokeapi.co/api/v2/pokemon/${name}`

import React, { useState, useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import Search from "./Search";
import PokemonList from "./PokemonList";
import "./SearchContainer.css";

const SearchContainer = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const { createdPokemon } = useContext(PokemonContext);

  const searchPokemon = async (pokemonName) => {
    const name = pokemonName.toLowerCase();

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }

      const data = await response.json();

      // Comprobar si el Pokémon ya está en la lista (por id)
      const alreadyExists = pokemonList.some((p) => p.id === data.id);
      if (alreadyExists) return;

      setPokemonList((prevList) => [...prevList, data]);
    } catch (error) {
      console.error("Error al buscar el Pokémon:", error.message);
      alert("Pokémon no encontrado. Intenta con otro nombre o ID.");
    }
  };

  // Combinar los pokémon buscados (pokemonList) con los creados (createdPokemon)
  // Para que todos se muestren juntos
  // Convertimos createdPokemon a la forma que espera PokemonList (igual estructura que api)
  const combinedPokemonList = [
    ...pokemonList,
    ...createdPokemon.map(p => ({
      id: p.id,
      name: p.name,
      sprites: { front_default: p.image }, // adaptar imagen para que muestre
      types: [
        { type: { name: p.typeOne } },
        { type: { name: p.typeTwo } }
      ]
    }))
  ];

  return (
    <div>
      <Search onSearch={searchPokemon} />
      {combinedPokemonList.length === 0 ? (
        <img
          id="welcome-image"
          src="https://i.blogs.es/46c93b/pokemon/840_560.jpeg"
          alt="Bienvenido a la PokéApp"
        />
      ) : (
        // Mostrar la lista combinada con Pokémon originales y creados
        <PokemonList pokemonList={combinedPokemonList} />
      )}
    </div>
  );
};

export default SearchContainer;