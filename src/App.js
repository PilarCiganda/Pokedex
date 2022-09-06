import { Link } from 'react-router-dom';
import './App.css';
import Buscador from './Componentes/Buscador/Buscador';
import Nav from './Componentes/Nav/Nav';
import Pokemain from './Componentes/Pokemain/Pokemain';
import Pokecard from "./Componentes/Pokecard/Pokecard"
import data from "./Data/data"
import { useState } from "react"
import RoutsApp from "./Componentes/RoutesApp/RoutesApp"
import RoutesApp from './Componentes/RoutesApp/RoutesApp';

function App() {
  const [pokeFiltro, setPokeFiltro] = useState(data);
  //  const [searchParams, setSearchParams] = useState("")
  //  const valorId = (pokemonId) => {
  //    setSearchParams(pokemonId)
  //  }

  return (
    <div className="App">
     <Nav />
     <Buscador pokemones={data}setPokeFiltro={setPokeFiltro}/>
     <Pokemain pokemones={pokeFiltro} />
     {/* valorId={valorId}  */}
     {/* <Pokecard  pokemones={data} /> */}
    
    </div>
  );
}

export default App;
