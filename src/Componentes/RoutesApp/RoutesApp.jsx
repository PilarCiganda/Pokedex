import { Routes, Route } from "react-router-dom";
import Pokecard from "../Pokecard/Pokecard";
import App from "../../App";
import Login from "../Login/Login"
import { useState } from "react";

const RoutesApp = () => {
  const [pokeFiltro, setPokeFiltro] = useState([]);
  const [pokeFetch, setPokeFetch] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element= {<Login/>} />
        <Route
          path="/main"
          element={
            <App
              pokeFiltro={pokeFiltro}
              setPokeFiltro={setPokeFiltro}
              pokeFetch={pokeFetch}
              setPokeFetch={setPokeFetch}
            />
          }
        />
        <Route
          path="/Pokecard/:nombre"
          element={<Pokecard pokemones={pokeFiltro} />}
        />
      </Routes>
    </>
  );
};

export default RoutesApp;
