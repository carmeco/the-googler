import React, { useContext, useEffect } from "react";

//context
import { UserContext } from "../../context/userContext";

//styles
import { Wrapper, Header, Main } from "./MySpace.styles";

//components
import NotesList from "../../components/NotesList";

const MySpace = () => {
    //getting data from Context
    const { userLogged, userNotes } = useContext(UserContext);

    //saving data in localStorage
    useEffect(() => {
        localStorage.setItem(
            `${userLogged.userName}Notes`,
            JSON.stringify(userNotes)
        );
    }, [userLogged, userNotes]);

    return (
        <Wrapper>
            <Header>
                <h1>The Googler</h1>
                <ul>
                    <li>Hello {userLogged.userName}!</li>
                    <li>Log Out</li>
                </ul>
            </Header>
            <Main>
                <NotesList />
            </Main>
        </Wrapper>
    );
};

export default MySpace;
