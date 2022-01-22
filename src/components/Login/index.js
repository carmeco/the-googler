import React, { useRef, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";

//context
import { LoginContext } from "../../context/loginContext";

const Login = () => {
    //refs to DOM elements
    const userInput = useRef(null);
    const passwordInput = useRef(null);
    const remember = useRef(null);

    //getting data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userSaved = JSON.parse(localStorage.getItem("userSaved")) || "";

    //rendering data from saved user
    useEffect(() => {
        if (userSaved) {
            userInput.current.value = userSaved.userName;
            passwordInput.current.value = userSaved.password;
        }
    }, [userSaved]);

    //context for logged users
    const { setIsLogged, setUserLogged } = useContext(LoginContext);

    //state for feedback on submitting
    const [feedback, setFeedback] = useState("");

    //navigation
    const navigate = useNavigate();

    //form submitting
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find(
            (user) => user.userName === userInput.current.value
        );
        if (!user) {
            setFeedback("Usuari no registrat");
        } else if (user.password === passwordInput.current.value) {
            setIsLogged(true);
            setUserLogged(user);
            if (remember.current.checked)
                localStorage.setItem("userSaved", JSON.stringify(user));
            navigate("/my-space");
        } else {
            setFeedback("Contrasenya incorrecta");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="user">User</label>
                    <br />
                    <input
                        id="user"
                        type="text"
                        ref={userInput}
                        required
                    ></input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        id="password"
                        type="password"
                        ref={passwordInput}
                        required
                    ></input>
                </li>
                <li>
                    <input id="remember" type="checkbox" ref={remember}></input>
                    <label htmlFor="remember">Remember me</label>
                </li>
                <li>
                    <button type="submit">Log in</button>
                </li>
                <li>{feedback}</li>
            </ul>
        </form>
    );
};

export default Login;
