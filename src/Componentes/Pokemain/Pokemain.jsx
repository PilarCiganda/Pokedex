import "./Pokemain.css";
import { Link } from "react-router-dom";

const Pokemain = ({ pokemones, valorId }) => {
  // const selectPokemon = ({pokemonId}) => {
  //     valorId(pokemonId)
  // }
  return (
    <div className="pokemain-global">
      <Link className="link" to={`/Pokecard/PokeInput`}>
        <div
          style={{ borderColor: "black" }}
          className="pokemain-container"
        >
          <p className="pokemain-id" style={{ color: "black" }}>
            ?
          </p>
          <div className="pokemain-container-img">
            <img src="../img/signo_suma.jpg" className="pokemain-img" />
          </div>
          <p
            className="pokemain-name"
            style={{ backgroundColor: "black"}}
          >
          Agregar Pokemon
          </p>
        </div>
      </Link>
      {pokemones.map((pokemon) => {
        return (
          <Link className="link" to={`/Pokecard/${pokemon.name}`}>
            <div
              key={parseInt(pokemon.id)}
              style={{ borderColor: pokemon.bckcolor }}
              className="pokemain-container"
            >
              <p className="pokemain-id" style={{ color: pokemon.bckcolor }}>
                # {pokemon.id}
              </p>
              <div className="pokemain-container-img">
                <img src={pokemon.img} className="pokemain-img" />
              </div>
              <p
                className="pokemain-name"
                style={{ backgroundColor: pokemon.bckcolor }}
              >
                {pokemon.name}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Pokemain;
