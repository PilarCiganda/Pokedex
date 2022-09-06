import "../Pokecard/Pokecard.css";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Pokecard = ({ pokemones }) => {

  const { nombre } = useParams();
  const pokeFiltro = pokemones.filter(
    (item) => item.name.indexOf(nombre) !== -1

  );
  const pokemon = pokeFiltro[0];
  return (
    <div>
      {/* {pokemones.map((pokemon) => {
        return ( */}
          <div className="container" style={{ background: pokemon.bckcolor }}>
            <div className="main">
              <nav>
                <div>
                  <button>
                    <img src="../img/arrowicon.png" alt="1"/>
                  </button>
                  <h1>{pokemon.name}</h1>
                </div>
                <p>#{pokemon.id}</p>
              </nav>
              {/* <div className="pokebola">
                <img src="./img/pokebola-blanca.png" />
              </div> */}
              <div className="pokemon">
                <img className="pokemonimg" src={pokemon.img} />
              </div>
              {/* <div className="pokebola">
                <img src="./img/pokebola-blanca.png" alt="" />
              </div> */}
              <div className="buttons">
                <button>
                  <img src="../img/arrowleft.png" />
                </button>
                <button>
                  <img src="../img/arrowright.png" />
                </button>
              </div>
            </div>
            <div className="info">
              <div className="pokemontype">
                <p style={{ background: pokemon.bckcolor }}>{pokemon.type}</p>
                {pokemon.type2 ?
                  <p style={{ background: pokemon.bckcolor2 }}>{pokemon.type2}</p> :
                  null
                }
              </div>
              <h2 className="pokemoninfo" style={{ color: pokemon.bckcolor }}>
                Info
              </h2>
              <div className="properties">
                <div className="properties-container">
                  <div className="properties-one">
                    <img src="../img/Weight.svg" />
                    <p>{pokemon.weight}</p>
                  </div>
                  <p className="properties-p">Peso</p>
                </div>
                <div className="properties-container properties-container-center">
                  <div className="properties-two">
                    <img src="../img/Height.svg" />
                    <p>{pokemon.height}</p>
                  </div>
                  <p className="properties-p">Altura</p>
                </div>
                <div className="properties-three properties-container">
                  <p className="pokemon-moves">{pokemon.moves[0]}</p>
                  <p className="pokemon-moves">{pokemon.moves[1]}</p>
                  <p className="properties-p">Movimientos</p>
                </div>
              </div>
              <p className="pokemon-description">{pokemon.description}</p>
              <h2 className="pokemoninfo" style={{ color: pokemon.bckcolor }}>
                Estadísticas base
              </h2>
              <div className="progress">
                <div className="progress-item">
                  <div
                    className="progress-item-string"
                    style={{ color: pokemon.bckcolor }}
                  >
                    HP
                  </div>
                  <div className="progress-item-props">{pokemon.hp}</div>
                  <ProgressBar
                    maxCompleted={200}
                    completed={pokemon.hp}
                    bgColor={pokemon.bckcolor}
                    height={5}
                    labelSize={0}
                  />
                </div>
                <div className="progress-item">
                  <div
                    className="progress-item-string"
                    style={{ color: pokemon.bckcolor }}
                  >
                    ATK
                  </div>
                  <div className="progress-item-props">{pokemon.atk}</div>
                  <ProgressBar
                    maxCompleted={200}
                    completed={pokemon.atk}
                    bgColor={pokemon.bckcolor}
                    height={5}
                    labelSize={0}
                  />
                </div>
                <div className="progress-item">
                  <div
                    className="progress-item-string"
                    style={{ color: pokemon.bckcolor }}
                  >
                    DEF
                  </div>
                  <div className="progress-item-props">{pokemon.def}</div>
                  <ProgressBar
                    maxCompleted={200}
                    completed={pokemon.def}
                    bgColor={pokemon.bckcolor}
                    height={5}
                    labelSize={0}
                  />
                </div>
                <div className="progress-item">
                  <div
                    className="progress-item-string"
                    style={{ color: pokemon.bckcolor }}
                  >
                    SPATK
                  </div>

                  <div className="progress-item-props">{pokemon.satk}</div>
                  <ProgressBar
                    maxCompleted={200}
                    completed={pokemon.satk}
                    bgColor={pokemon.bckcolor}
                    height={5}
                    labelSize={0}
                  />
                </div>
                <div className="progress-item">
                  <div
                    className="progress-item-string"
                    style={{ color: pokemon.bckcolor }}
                  >
                    SPDEF
                  </div>
                  <div className="progress-item-props">{pokemon.sdef}</div>
                  <ProgressBar
                    maxCompleted={200}
                    completed={pokemon.sdef}
                    bgColor={pokemon.bckcolor}
                    height={5}
                    labelSize={0}
                  />
                </div>
                <div className="progress-item">
                  <div
                    className="progress-item-string"
                    style={{ color: pokemon.bckcolor }}
                  >
                    SPD
                  </div>
                  <div className="progress-item-props">{pokemon.spd}</div>

                  <ProgressBar
                    maxCompleted={200}
                    completed={pokemon.spd}
                    bgColor={pokemon.bckcolor}
                    height={5}
                    labelSize={0}
                  />
                </div>
              </div>
            </div>
          </div>
        {/* );
      })} */}
    </div>
  );
};

export default Pokecard;
