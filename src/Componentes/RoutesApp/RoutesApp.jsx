import { Routes, Route } from "react-router-dom";
import Pokecard from "../Pokecard/Pokecard";
import data from "../../Data/data";
import App from "../../App";
import PokeInput from "../PokeInput/PokeInput";
const RoutesApp = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Pokecard/:nombre" element={< Pokecard pokemones={data} />}/>
            <Route path="/Pokecard/PokeInput" element={< PokeInput/>}/>
          </Routes>
        </>
    );
};

export default RoutesApp;

