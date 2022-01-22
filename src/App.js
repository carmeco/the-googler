//context
import { LoginContextProvider } from "./context/loginContext";

//routes
import Routing from "./Routing";

function App() {
    return (
        <LoginContextProvider>
            <Routing />
        </LoginContextProvider>
    );
}

export default App;
