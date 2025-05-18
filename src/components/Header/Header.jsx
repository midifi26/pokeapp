import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">SearchContainer</Link>
        </li>
        <li>
          <Link to="/new">PokemonForm</Link>
        </li>
        <li>
          <Link to="/pokemon/:id">PokemonDetails </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

