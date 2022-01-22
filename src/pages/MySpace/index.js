import React, { useContext, useEffect } from "react";

//context
import { UserContext } from "../../context/userContext";

//styles
import { Wrapper, Header, Main } from "./MySpace.styles";

//components
import NotesList from "../../components/NotesList";

const MySpace = () => {
    //getting data from Context
    const { userLogged, setUserLogged, userNotes } = useContext(UserContext);

    //saving data in localStorage
    useEffect(() => {
        localStorage.setItem(
            `${userLogged.userName}Notes`,
            JSON.stringify(userNotes)
        );
    }, [userLogged, userNotes]);

    const logOut = () => {
        setUserLogged(null);
        localStorage.removeItem("loggedInUsername");
    };

    return (
        <Wrapper>
            <Header>
                <h1>The Googler</h1>
                <ul>
                    <li>Hello {userLogged.userName}!</li>
                    <li>
                        <a onClick={logOut}>Log Out</a>
                    </li>
                </ul>
            </Header>
            <Main>
                <NotesList />
            </Main>
        </Wrapper>
    );
};

export default MySpace;
