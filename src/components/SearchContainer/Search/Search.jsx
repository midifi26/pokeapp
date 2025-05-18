import React, { useEffect, useState } from "react";
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
    }, 2000); // tiempo de espera (2000ms)

    return () => clearTimeout(timeout); // limpia si vuelve a escribir antes del tiempo
  }, [inputValue]);

  // Ejecutar la búsqueda cuando el valor debounced cambia
  useEffect(() => {
    if (debaunceValue.trim() !== "") {
      onSearch(debaunceValue);
    }
  }, [debaunceValue, onSearch]);


  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(inputValue);
  //     onSearch(inputValue); // invocar la función unSearch pasada por props
  //     setInputValue("");
  //   };
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
