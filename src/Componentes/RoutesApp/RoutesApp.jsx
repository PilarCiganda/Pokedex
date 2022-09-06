import { Routes, Route } from "react-router-dom";
import Pokecard from "../Pokecard/Pokecard";
import data from "../../Data/data";
import App from "../../App"

const RoutesApp = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Pokecard/:nombre" element={< Pokecard pokemones={data} />}/>
          </Routes>
        </>
    );
};

export default RoutesApp;

