import "./App.css";
import Buscador from "./Componentes/Buscador/Buscador";
import Nav from "./Componentes/Nav/Nav";
import Pokemain from "./Componentes/Pokemain/Pokemain";

function App({ pokeFiltro, setPokeFiltro, pokeFetch, setPokeFetch }) {
  
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
