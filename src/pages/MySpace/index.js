import React, { useContext, useEffect } from "react";

//context
import { UserContext } from "../../context/userContext";

//components
import CreateNote from "../../components/CreateNote";
import SavedNotesList from "../../components/SavedNotesList";

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
        <div>
            <h1>My Space</h1>
            <CreateNote />
            <SavedNotesList />
        </div>
    );
};

export default MySpace;
