//context
import { UserContextProvider } from "./context/userContext";
import { GlobalStyle } from "./GlobalStyles";

//routes
import Content from "./Content";

function App() {
    return (
        <UserContextProvider>
            <Content />
            <GlobalStyle />
        </UserContextProvider>
    );
}

export default App;
