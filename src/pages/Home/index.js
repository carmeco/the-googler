import React from "react";

//components
import Login from "../../components/Login";
import Signup from "../../components/Signup";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <h2>Sign Up</h2>
            <Signup />
            <h2>Login</h2>
            <Login />
        </div>
    );
};

export default Home;
