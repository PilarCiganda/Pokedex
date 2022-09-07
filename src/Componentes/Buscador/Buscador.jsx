import "./Buscador.css"

const Buscador = ({ pokemones, setPokeFiltro }) => {


    const handleInputChange = (e) => {
        if (e.target.value === "") {
            setPokeFiltro(pokemones);
            //return;
        } else {
            const pokeFiltrado = pokemones.filter(
                (item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())
            );

            setPokeFiltro(pokeFiltrado);
        }
    };

    return (
        <div className="buscador-container" >
            <input type="text" placeholder="Buscar" className="buscador-input" onChange={handleInputChange} />

           
        </div>);
}

export default Buscador;