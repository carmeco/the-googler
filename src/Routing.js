import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//context
import { UserContext } from "./context/userContext";

//pages
import Home from "./pages/Home";
import MySpace from "./pages/MySpace";

const Routing = () => {
    const { userLogged } = useContext(UserContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/my-space"
                    element={
                        userLogged ? <MySpace /> : <Navigate to="/" replace />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
