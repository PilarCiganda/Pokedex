import "./Pokemain.css"

const Pokemain = ({pokemones, valorId}) => {
    // const selectPokemon = ({pokemonId}) => {
    //     valorId(pokemonId)
    // }
    return(
        <div className="pokemain-global">
        {pokemones.map((pokemon) => {
            return(
            <div key={parseInt(pokemon.id)} style={{borderColor :pokemon.bckcolor }} className="pokemain-container" >
                <p className="pokemain-id" style={{color: pokemon.bckcolor}}># {pokemon.id}</p>
                <div className="pokemain-container-img"><img src={pokemon.img} className="pokemain-img"/></div>
                <p className="pokemain-name" style={{backgroundColor: pokemon.bckcolor}}>{pokemon.name}</p>
            </div>
            )
        })}
        </div>
    );
}

export default Pokemain;

// onClick={()=>selectPokemon(pokemon.id)}