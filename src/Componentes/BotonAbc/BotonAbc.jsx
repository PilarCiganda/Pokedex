const BotonAbc = ({setPokeFiltro, pokemones, pokeData}) => {
    const pokeOrden = () => {
        
        let alfaArray = pokemones.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        })
        setPokeFiltro(alfaArray)

    }
    return (
        <button onClick={pokeOrden} className="nav-button"><img src="./img/Arrow.svg" alt="arrow" /></button>
    )
}

export default BotonAbc;