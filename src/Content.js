import React, { useContext } from "react";

//context
import { UserContext } from "./context/userContext";

//pages
import Home from "./pages/Home";
import MySpace from "./pages/MySpace";

const Content = () => {
    const { userLogged } = useContext(UserContext);
    return userLogged ? <MySpace /> : <Home />;
};

export default Content;
