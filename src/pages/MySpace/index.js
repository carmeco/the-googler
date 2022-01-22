import React, { useContext, useEffect } from "react";

//context
import { UserContext } from "../../context/userContext";

//styles
import { Wrapper } from "./MySpace.styles";

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
            <h1>My Space</h1>
            <NotesList />
        </Wrapper>
    );
};

export default MySpace;
