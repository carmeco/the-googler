//context
import { UserContextProvider } from "./context/userContext";
import { GlobalStyle } from "./GlobalStyles";

//routes
import Routing from "./Routing";

function App() {
    return (
        <UserContextProvider>
            <Routing />
            <GlobalStyle />
        </UserContextProvider>
    );
}

export default App;
