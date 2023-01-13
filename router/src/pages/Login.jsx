import { useState } from "react";
import "../styles/login.css"

export default function Login(prop) {
    const { loginState } = prop;
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");

    function loginHandler(event) {
        event.preventDefault();
        setUsername(event.target.userName.value);
        setPassword(event.target.password.value);
        loginState(username, password);
        console.log(username);
    }

    return <div className="login">
        <div className="loginPage">
            <form onSubmit={loginHandler} className="loginForm">
                <input type="text" name="userName"></input>
                <input type="text" name="password"></input>
                <button type="submit">Log In</button>
                <input type="button" value="Register" />
            </form>
        </div>

    </div>
}