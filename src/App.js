import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import { LoginContextProvider } from "./context/loginContext";

//pages
import Home from "./pages/Home";
import MySpace from "./pages/MySpace";

function App() {
    return (
      <LoginContextProvider>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/my-space" element={<MySpace />} />
            </Routes>
        </BrowserRouter>
      </LoginContextProvider>
    );
}

export default App;
