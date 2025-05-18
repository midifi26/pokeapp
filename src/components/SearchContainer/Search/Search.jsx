import React, { useState } from "react";


const Search = ({onSearch}) => {
  //const [pokemonData, setPokemonData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputValue);
      onSearch(inputValue); // invocar la función add pasada por props
      setInputValue("");
    };
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} placeholder="Search for a Pokemon" onChange={handleChange}/>
      <button type="submit">Search</button>
    </form>
  </div>;
};

export default Search;
