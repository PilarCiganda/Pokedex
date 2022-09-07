import './App.css';
import Buscador from './Componentes/Buscador/Buscador';
import Nav from './Componentes/Nav/Nav';
import Pokemain from './Componentes/Pokemain/Pokemain';
import data from "./Data/data"
import { useState } from "react"


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
