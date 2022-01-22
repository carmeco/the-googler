import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import MySpace from "./pages/MySpace";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/my-space" element={<MySpace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
