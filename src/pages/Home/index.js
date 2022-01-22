import React from "react";

//styles
import { Wrapper, Main } from "./Home.styles";

//components
import Login from "../../components/Login";
import Signup from "../../components/Signup";

const Home = () => {
    return (
        <Wrapper>
            <Main>
                <Signup />
                <Login />
            </Main>
        </Wrapper>
    );
};

export default Home;
