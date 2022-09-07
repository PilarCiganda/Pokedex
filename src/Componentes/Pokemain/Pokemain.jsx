import "./Pokemain.css"
import { Link } from "react-router-dom";

const Pokemain = ({ pokemones }) => {
    return (
        <div className="pokemain-global">
            {pokemones.map((pokemon) => {
                return (
                    <Link className="link" to= {`/Pokecard/${pokemon.name}`}>
                        <div key={parseInt(pokemon.id)} style={{ borderColor: pokemon.bckcolor }} className="pokemain-container">
                            <p className="pokemain-id" style={{ color: pokemon.bckcolor }}># {pokemon.id}</p>
                            <div className="pokemain-container-img"><img src={pokemon.img} className="pokemain-img" /></div>
                            <p className="pokemain-name" style={{ backgroundColor: pokemon.bckcolor }}>{pokemon.name}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default Pokemain;




