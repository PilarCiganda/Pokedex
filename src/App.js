import "./App.css";
import axios from "axios";
import Buscador from "./Componentes/Buscador/Buscador";
import Nav from "./Componentes/Nav/Nav";
import Pokemain from "./Componentes/Pokemain/Pokemain";
import { useEffect } from "react";

function App({ pokeFiltro, setPokeFiltro, pokeFetch, setPokeFetch }) {
  
  const prueba = async () => {
    const pokemones = await axios(
      "http://localhost:3000/pokemones/obtener"
    ).then((res) => res.data);
    setPokeFiltro(pokemones.data);
    setPokeFetch(pokemones.data);
  };

  useEffect(() => {
    prueba();
  }, []);

  return (
    <div className="App">
      <Nav
        setPokeFiltro={setPokeFiltro}
        pokemones={pokeFiltro}
        pokeData={pokeFiltro}
      />
      <Buscador
        pokemones={pokeFiltro}
        setPokeFiltro={setPokeFiltro}
        pokeFetch={pokeFetch}
      />
      <Pokemain pokemones={pokeFiltro} />
    </div>
  );
}

export default App;
