import React, { useContext, useEffect, useState } from "react";

//context
import { LoginContext } from "../../context/loginContext";

//components
import CreateNote from "../../components/CreateNote";
import NoteBox from "../../components/NoteBox";

const MySpace = () => {
    //getting userLogged from Context
    const { userLogged } = useContext(LoginContext);

    //setting notes from localStorage in a state
    const [userNotes, setUserNotes] = useState(
        JSON.parse(localStorage.getItem(`${userLogged.userName}`)) || []
    );

    //saving notes in localStorage
    useEffect(() => {
        localStorage.setItem(
            `${userLogged.userName}`,
            JSON.stringify(userNotes)
        );
    }, [userNotes]);

    return (
        <div>
            <h1>My Space</h1>
            <CreateNote userNotes={userNotes} setUserNotes={setUserNotes} />
            {userNotes.map((note, index) => (
                <NoteBox key={index} note={note} />
            ))}
        </div>
    );
};

export default MySpace;
