
const Pokecard = ({pokemones}) => {
    return (
        <div>
            {pokemones.map((pokemon)=>{
                return(
                    <div>
                        <nav>
                            <div>
                                <button><img src="./img/arrow-left.svg"/></button>
                                <h1>{pokemon.name}</h1>
                            </div>
                            <div>
                                <p>{pokemon.id}</p>
                            </div>
                        </nav>
                        <button><img src="./img/Frame.svg"/></button>
                        <img src="./img/Pokeball.png"/>
                        <img src={pokemon.img} />
                        <div>
                            <div>
                                <p>{pokemon.type}</p>
                                <p>{pokemon.type2}</p>
                            </div>
                            <h2>Info</h2>
                            <div>
                                <div>
                                    <img src="./img/Weight.svg" />
                                    <p>{pokemon.weight}</p>
                                    <p>Peso</p>
                                </div>
                                <div>
                                <img src="./img/Height.svg" />
                                    <p>{pokemon.height}</p>
                                    <p>Altura</p>
                                </div>
                                <div>
                                    <p>{pokemon.moves[0]}</p>
                                    <p>{pokemon.moves[1]}</p>
                                    <p>Movimientos</p>
                                </div>
                            </div>
                            <p>{pokemon.description}</p>
                            <h2>Estadísticas base</h2>
                            <div>
                                <div>
                                    <div>HP</div>
                                    <div>{pokemon.hp}</div>
                                    <progress max="200" value={pokemon.hp}></progress>
                                </div>
                                <div>
                                    <div>ATK</div>
                                    <div>{pokemon.atk}</div>
                                    <progress max="200" value={pokemon.atk}></progress>
                                </div>
                                <div>
                                    <div>DEF</div>
                                    <div>{pokemon.def}</div>
                                    <progress max="200" value={pokemon.def}></progress>
                                </div>
                                <div>
                                    <div>SPATK</div>
                                    <div>{pokemon.satk}</div>
                                    <progress max="200" value={pokemon.satk}></progress>
                                </div>
                                <div>
                                    <div>SPDEF</div>
                                    <div>{pokemon.sdef}</div>
                                    <progress max="200" value={pokemon.sdef}></progress>
                                </div>
                                <div>
                                    <div>SPD</div>
                                    <div>{pokemon.spd}</div>
                                    <progress max="200" value={pokemon.spd}></progress>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Pokecard;