import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//context
import { LoginContext } from "./context/loginContext";

//pages
import Home from "./pages/Home";
import MySpace from "./pages/MySpace";

const Routing = () => {
    const { isLogged } = useContext(LoginContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    path="/my-space"
                    element={
                        isLogged ? <MySpace /> : <Navigate to="/" replace />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
