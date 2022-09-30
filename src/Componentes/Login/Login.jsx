import { useState } from "react";
import "./Login.css"

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const onUserInput = (e) => {
        setUser(e.target.value);
    }

    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    }

    return (
       <>
       <div className="container">
            <div className="logo">
                <div className="logo-h1"><h2>Pokédex</h2></div>
            </div>
            <input
            type="text"
            placeholder="User name"
            className="input"
            onChange={onUserInput} 
            value={user} />
             <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={onPasswordInput}
            value={password} />
            <button className="button">Log in</button>
        </div>
       </> 
    )
}

export default Login;