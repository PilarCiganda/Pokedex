import './App.css';
import axios from "axios"
import Buscador from './Componentes/Buscador/Buscador';
import Nav from './Componentes/Nav/Nav';
import Pokemain from './Componentes/Pokemain/Pokemain';
import data from "./Data/data"
import { useEffect, useState } from "react"


function App() {
  const [pokeFiltro, setPokeFiltro] = useState([]);
  const prueba = async() => {
    const pokemones = await axios("http://localhost:3000/pokemones/obtener").then(res => res.data)
    console.log(pokemones.data)
    setPokeFiltro(pokemones.data);
  }
  useEffect( () => {
    prueba()
  }, [])
  return (
    <div className="App">
      <Nav setPokeFiltro={setPokeFiltro} pokemones={pokeFiltro} pokeData={pokeFiltro}/>
      <Buscador pokemones={pokeFiltro} setPokeFiltro={setPokeFiltro} />
      <Pokemain pokemones={pokeFiltro} />      
    </div>
  );
}

export default App;
