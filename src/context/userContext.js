import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(null);
    const [userNotes, setUserNotes] = useState([]);

    return (
        <UserContext.Provider
            value={{ userLogged, setUserLogged, userNotes, setUserNotes }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
