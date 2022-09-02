import "./Nav.css"

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img src="./img/Pokeball.png" className="nav-img" alt="pokeball"/>
                <div className="nav-h2"><h2>Pokédex</h2></div>
            </div>
            <div>
                <button className="nav-button"><img src="./img/Arrow.svg" alt="arrow"/></button>
            </div>
        </div>
    )
}

export default Nav;