import React, { useRef, useContext, useState } from "react";

//context
import { UserContext } from "../../context/userContext";

const Login = () => {
    //refs to DOM elements
    const userInput = useRef(null);
    const passwordInput = useRef(null);

    //getting data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //context for logged users
    const { setUserLogged, setUserNotes } = useContext(UserContext);

    //state for feedback on submitting
    const [feedback, setFeedback] = useState("");

    //handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find(
            (user) => user.userName === userInput.current.value
        );
        if (!user) {
            setFeedback("User not found");
        } else if (user.password === passwordInput.current.value) {
            setUserLogged(user);
            setUserNotes(
                JSON.parse(localStorage.getItem(`${user.userName}Notes`)) || []
            );
        } else {
            setFeedback("Invalid password");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
                    <button type="submit">Log in</button>
                </li>
                <li>{feedback}</li>
            </ul>
        </form>
    );
};

export default Login;
