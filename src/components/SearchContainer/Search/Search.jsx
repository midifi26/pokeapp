import React, { useState } from "react";
import "./Search.css";


const Search = ({onSearch}) => {
  //const [pokemonData, setPokemonData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputValue);
      onSearch(inputValue); // invocar la función unSearch pasada por props
      setInputValue("");
    };
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} placeholder="Busca un Pokemon" onChange={handleChange}/>
      <button type="submit">Search</button>
    </form>
  </div>
  )
};

export default Search;
