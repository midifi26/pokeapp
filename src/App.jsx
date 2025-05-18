import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';
import PokemonForm from './components/PokemonForm';
import PoKemonDetails from './components/PoKemonDetails';

function App() {

  return (
    <>
      
          <h1>Pokemon Search</h1>
          <Header/>
          <Routes>
            <Route path="/" element={<SearchContainer/>} />
            <Route path="/new" element={<PokemonForm/>} />
            <Route path="/pokemon/:id" element={<PoKemonDetails/>} />
          </Routes>
    </>)
}

export default App
