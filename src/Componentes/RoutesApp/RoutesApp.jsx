import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Pokecard from "../Pokecard/Pokecard";
import App from "../../App";
import Login from "../Login/Login";
import Error from "../Error/Error"
import { useState, useEffect } from "react";
import PokeInput from "../PokeInput/PokeInput";

const RoutesApp = () => {
  const [pokeFiltro, setPokeFiltro] = useState([]);
  const [pokeFetch, setPokeFetch] = useState([]);
  
  const token = localStorage.getItem("token")
  const getpokemones = async () => {
    const allpokemones = await axios(
      "http://localhost:3000/pokemones/obtener", {
        headers: {
          "auth-token": token,
        }  
      }).then((res) => res.data);
    setPokeFiltro(allpokemones.data);
    setPokeFetch(allpokemones.data);
  }; 

  useEffect(() => {
  getpokemones();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
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
        <Route path="Pokecard/PokeInput" element={<PokeInput />}></Route>
        <Route
          path="/Pokecard/:nombre"
          element={
            <Pokecard
              pokemones={pokeFiltro}
              pokeFetch={pokeFetch}
              setPokeFiltro={setPokeFiltro}
            />
          }
        />
        <Route path="*" element={<Error />}/>
      </Routes>
      
    </>
  );
};

export default RoutesApp;
