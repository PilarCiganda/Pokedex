import "../PokeInput/PokeInput.css";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { type } from "@testing-library/user-event/dist/type";

const PokeInput = ({ }) => {
    const [type1,setType1] = useState("grey");
    const [type2,setType2] = useState("grey");
    const [hp,setHp] = useState(50);
    const [atk,setAtk] = useState(50);
    const [def,setDef] = useState(50);
    const [spatk,setSpatk] = useState(50);
    const [spdef,setSpdef] = useState(50);
    const [spd,setSpd] = useState(50);


    const [name,setName] = useState("");
    const [movimiento1,setMovimiento1] = useState("");
    const [movimiento2,setMovimiento2] = useState("");
    const [peso,setPeso] = useState("");
    const [descriptioon,setDescription] = useState("");
    const [number,setNumber] = useState("");
    const [altura,setAltura] = useState("");


    const inputName =(e)=> setName(e.target.value);
    const inputMovimiento1 =(e)=> setMovimiento1(e.target.value);
    const inputMovimiento2 =(e)=> setMovimiento2(e.target.value);
    const inputPeso =(e)=> setPeso(e.target.value);
    const inputDescription =(e)=> setDescription(e.target.value);
    const inputNumber =(e)=> setNumber(e.target.value);
    const inputAltura =(e)=> setAltura(e.target.value);


    const inputHp =(e)=> setHp(e.target.value);
    const inputAtk =(e)=> setAtk(e.target.value);
    const inputDef =(e)=> setDef(e.target.value);
    const inputSpatk =(e)=> setSpatk(e.target.value);
    const inputSpdef =(e)=> setSpdef(e.target.value);
    const inputSpd =(e)=> setSpd(e.target.value); 
    
    const bgc = [
        { name: "rock", color: "#869E31" },
        { name: "ghost", color: "#70559B" },
        { name: "steel", color: "#8789D0" },
        { name: "water", color: "#6493EB" },
        { name: "grass", color: "#74CB4B" },
        { name: "psychic", color: "#FB5584" },
        { name: "ice", color: "#9AD6DF" },
        { name: "dark", color: "#75574C" },
        { name: "fairy", color: "#E69EAC" },
        { name: "normal", color: "#AAA67F" },
        { name: "fighting", color: "#C12239" },
        { name: "flying", color: "#A891EC" },
        { name: "poison", color: "#A43E9E" },
        { name: "ground", color: "#DEC16B" },
        { name: "bug", color: "#A78723" },
        { name: "fire", color: "#F57D31" },
        { name: "electric", color: "#F9CF30" },
        { name: "dragon", color: "#7037FF" },
      ];
      const firstType =(e)=>{
        const type = bgc.find((type)=> type.name===e.target.value);
        setType1(type.color);
    } 
    const secondType =(e)=> {
        const type = bgc.find((type)=> type.name===e.target.value);
        setType2(type.color);
    }
  return (
    <div>
      <div className="container" style={{ background: type1 }}>
        <div className="main">
          <nav>
            <div>
              <Link className="linkImg" to="/">
                <img className="flechaImg" src="../img/arrowicon.png" alt="1" />
              </Link>
              <h1><input className="inputName"></input></h1>
            </div>
            <p><input className="inputNumber"></input></p>
          </nav>
          <div className="pokebola">
            <img src="../img/pokebola-blanca.png" />
          </div>
          <div className="pokemon">
            <img className="pokemonimg" src="" />
          </div>
          <div className="pokebola">
                <img src="./img/pokebola-blanca.png" alt="" />
              </div>
          
        </div>
        <div className="info">
          <div className="pokemontype">
            <p style={{ background: type1 }}><select onChange={firstType} style = {{background:type1}}>
                <option value="">

                </option>
                <option value="rock"> Rock

                </option>
                <option value="ghost"> Ghost

                </option>
                <option value="steel"> Steel

                </option>
                <option value="water"> Water

                </option>
                <option value="grass"> Grass

                </option>
                <option value="psychic"> Psychic

                </option>
                <option value="ice"> Ice

                </option>
                <option value="dark"> Dark

                </option>
                <option value="fairy"> Fairy

                </option>
                <option value="normal"> Normal

                </option>
                <option value="fighting"> Fighting

                </option>
                <option value="flying"> Flying

                </option>
                <option value="poison"> Poison
                </option>
                <option value="ground"> Ground

                </option>
                <option value="bug"> Bug

                </option>
                <option value="fire"> Fire

                </option>
                <option value="electric"> Electric

                </option>
                <option value="dragon"> Dragon

                </option>

                </select></p>
            
              <p style={{ background: type2 }}><select onChange={secondType}
               style = {{background:type2}}>
                <option value="">

                </option>
                <option value="rock"> Rock

                </option>
                <option value="ghost"> Ghost

                </option>
                <option value="steel"> Steel

                </option>
                <option value="water"> Water

                </option>
                <option value="grass"> Grass

                </option>
                <option value="psychic"> Psychic

                </option>
                <option value="ice"> Ice

                </option>
                <option value="dark"> Dark

                </option>
                <option value="fairy"> Fairy

                </option>
                <option value="normal"> Normal

                </option>
                <option value="fighting"> Fighting

                </option>
                <option value="flying"> Flying

                </option>
                <option value="poison"> Poison
                </option>
                <option value="ground"> Ground

                </option>
                <option value="bug"> Bug

                </option>
                <option value="fire"> Fire

                </option>
                <option value="electric"> Electric

                </option>
                <option value="dragon"> Dragon

                </option>

                </select></p>
           
          </div>
          <h2 className="pokemoninfo" style={{ color: type1 }}>
            Info
          </h2>
          <div className="properties">
            <div className="properties-container">
              <div className="properties-one">
                <img src="../img/Weight.svg" />
                <p><input></input></p>
              </div>
              <p className="properties-p">Peso</p>
            </div>
            <div className="properties-container properties-container-center">
              <div className="properties-two">
                <img src="../img/Height.svg" />
                <p><input></input></p>
              </div>
              <p className="properties-p">Altura</p>
            </div>
            <div className="properties-three properties-container">
              <p className="pokemon-moves"><input className="moves"></input></p>
              <p className="pokemon-moves"><input className="moves"></input></p>
              <p className="properties-p">Movimientos</p>
            </div>
          </div>
          <p className="pokemon-description"><input className = "inputDescription" placeholder="Escribir descripcion del pokemon.."></input></p>
          <h2 className="pokemoninfo" style={{ color: type1 }}>
            Estadísticas base
          </h2>
          <div className="progress">
            <div className="progress-item">
              <div className="progress-item-string" style={{ color: type1 }}>
                HP
              </div>
              <div className="progress-item-props"><input style={{color: type1, borderColor:type1}} onChange={inputHp}></input></div>
              <ProgressBar
                maxCompleted={200}
                completed={hp}
                bgColor={type1}
                height={5}
                labelSize={0}
              />
            </div>
            <div className="progress-item">
              <div className="progress-item-string" style={{ color: type1 }}>
                ATK
              </div>
              <div className="progress-item-props"><input style={{color: type1, borderColor:type1}} onChange={inputAtk}></input></div>
              <ProgressBar
                maxCompleted={200}
                completed={atk}
                bgColor={type1}
                height={5}
                labelSize={0}
              />
            </div>
            <div className="progress-item">
              <div className="progress-item-string" style={{ color: type1 }}>
                DEF
              </div>
              <div className="progress-item-props"><input style={{color: type1, borderColor:type1}} onChange={inputDef}></input></div>
              <ProgressBar
                maxCompleted={200}
                completed={def}
                bgColor={type1}
                height={5}
                labelSize={0}
              />
            </div>
            <div className="progress-item">
              <div className="progress-item-string" style={{ color: type1 }}>
                SPATK
              </div>

              <div className="progress-item-props"><input style={{color: type1, borderColor:type1}} onChange={inputSpatk}></input></div>
              <ProgressBar
                maxCompleted={200}
                completed={spatk}
                bgColor={type1}
                height={5}
                labelSize={0}
              />
            </div>
            <div className="progress-item">
              <div className="progress-item-string" style={{ color: type1 }}>
                SPDEF
              </div>
              <div className="progress-item-props"><input style={{color: type1, borderColor:type1}} onChange={inputSpdef}></input></div>
              <ProgressBar
                maxCompleted={200}
                completed={spdef}
                bgColor={type1}
                height={5}
                labelSize={0}
              />
            </div>
            <div className="progress-item">
              <div className="progress-item-string" style={{ color: type1 }}>
                SPD
              </div>
              <div className="progress-item-props"><input style={{color: type1, borderColor:type1}} onChange={inputSpd}></input></div>

              <ProgressBar
                maxCompleted={200}
                completed={spd}
                bgColor={type1}
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

export default PokeInput;
