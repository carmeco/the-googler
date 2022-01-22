//context
import { UserContextProvider } from "./context/userContext";

//routes
import Routing from "./Routing";

function App() {
    return (
        <UserContextProvider>
            <Routing />
        </UserContextProvider>
    );
}

export default App;
