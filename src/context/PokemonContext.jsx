// import {createContext} from 'react';

// // Crear el contexto
// export const PokemonContext = createContext();

import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [createdPokemon, setCreatedPokemon] = useState(() => {
    const stored = localStorage.getItem('createdPokemon');
    return stored ? JSON.parse(stored) : [];
  });

  const addPokemon = (newPokemon) => {
    setCreatedPokemon((prev) => {
      const updated = [...prev, newPokemon];
      localStorage.setItem('createdPokemon', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <PokemonContext.Provider value={{ createdPokemon, addPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};