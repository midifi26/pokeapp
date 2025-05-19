import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';
import PokemonForm from './components/PokemonForm';
import PokemonDetails from './components/PokemonDetails';
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <h1>Pokemon Search</h1>
        <Header />
        <Routes>
          <Route path="/" element={<SearchContainer />} />
          <Route path="/new" element={<PokemonForm />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
    </PokemonProvider>
  );
}

export default App;
