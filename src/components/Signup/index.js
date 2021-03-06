import React, { useRef } from "react";

const Signup = () => {
    //refs to the DOM
    const userInput = useRef(null);
    const passwordInput = useRef(null);

    //getting users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        users.push({
            userName: userInput.current.value,
            password: passwordInput.current.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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
                    <button type="submit">Sign Up</button>
                </li>
            </ul>
        </form>
    );
};

export default Signup;
