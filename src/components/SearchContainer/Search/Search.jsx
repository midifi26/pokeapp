import React, { useEffect, useState } from "react";
import { useContext } from "react";
//import { PokemonContext } from "../../../context/PokemonContext";
import "./Search.css";


const Search = ({onSearch}) => {
  const [inputValue, setInputValue] = useState("");
  const [debaunceValue, setDebounceValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 1500); // tiempo de espera (1500)

    return () => clearTimeout(timeout);
  }, [inputValue]);

  // Ejecuta la búsqueda cuando el valor debounced cambia
  useEffect(() => {
    if (debaunceValue.trim() !== "") {
      onSearch(debaunceValue);
    }
  }, [debaunceValue, onSearch]);

return (
    <div>
      
      <input
        type="text"
        value={inputValue}
        placeholder="Busca un Pokémon"
        onChange={handleChange}
      />
    </div>
  );
};


export default Search;
