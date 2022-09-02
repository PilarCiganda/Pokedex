import './App.css';
import Buscador from './Componentes/Buscador/Buscador';
import Nav from './Componentes/Nav/Nav';
import Pokemain from './Componentes/Pokemain/Pokemain';
import data from "./Data/data"

function App() {
  return (
    <div className="App">
     <Nav />
     <Buscador />
     <Pokemain pokemones={data}/>
    </div>
  );
}

export default App;
