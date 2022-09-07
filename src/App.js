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

  return (
    <div className="App">
      <Nav setPokeFiltro={setPokeFiltro} pokemones={pokeFiltro} pokeData={data}/>
      <Buscador pokemones={data} setPokeFiltro={setPokeFiltro} />
      <Pokemain pokemones={pokeFiltro} />      
    </div>
  );
}

export default App;
