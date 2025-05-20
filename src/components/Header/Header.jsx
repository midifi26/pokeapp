import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/new">Crea un pokemon</Link>
        </li>
        <li>
          <Link to="/pokemon/25">Detalles del pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

