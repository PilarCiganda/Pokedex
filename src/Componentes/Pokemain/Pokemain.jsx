import "./Pokemain.css"

const Pokemain = ({pokemones}) => {
    return(
        <div className="pokemain-global">
        {pokemones.map((pokemon) => {
            return(
            <div key={parseInt(pokemon.id)} style={{borderColor :pokemon.bckcolor }} className="pokemain-container">
                <p className="pokemain-id">{pokemon.id}</p>
                <img src={pokemon.img} className="pokemain-img"/>
                <p className="pokemain-name" style={{backgroundColor: pokemon.bckcolor}}>{pokemon.name}</p>
            </div>
            )
        })}
        </div>
    );
}

export default Pokemain;