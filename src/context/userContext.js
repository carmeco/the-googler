import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(null);
    const [userNotes, setUserNotes] = useState([]);

    useEffect(() => {
        const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
        const loggedInUsername = localStorage.getItem("loggedInUsername");
        if (loggedInUsername) {
            const user = registeredUsers.find(
                (user) => user.userName === loggedInUsername
            );
            setUserLogged(user);
            setUserNotes(
                JSON.parse(localStorage.getItem(`${user.userName}Notes`)) || []
            );
        }
    }, []);

    return (
        <UserContext.Provider
            value={{ userLogged, setUserLogged, userNotes, setUserNotes }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
