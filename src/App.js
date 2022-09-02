import { useState, Link } from 'react-router-dom';
import './App.css';
import Buscador from './Componentes/Buscador/Buscador';
import Nav from './Componentes/Nav/Nav';
import Pokemain from './Componentes/Pokemain/Pokemain';
import Pokecard from "./Componentes/Pokecard/Pokecard"
import data from "./Data/data"

function App() {
  //  const [searchParams, setSearchParams] = useState("")
  //  const valorId = (pokemonId) => {
  //    setSearchParams(pokemonId)
  //  }

  return (
    <div className="App">
     <Nav />
     <Buscador />
     <Pokemain pokemones={data} /> 
     {/* valorId={valorId}  */}
     <Pokecard  pokemones={data} />
    </div>
  );
}

export default App;
