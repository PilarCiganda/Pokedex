import './App.css';
import Buscador from './Data/Componentes/Buscador';
import Nav from './Data/Componentes/Nav';
import Pokemain from './Data/Componentes/Pokemain';

function App() {
  return (
    <div className="App">
     <Nav />
     <Buscador />
     <Pokemain />
    </div>
  );
}

export default App;
