import React, { useContext } from "react";

//context
import { UserContext } from "../../context/userContext";

//components
import NoteBox from "../NoteBox";

const SavedNotesList = () => {
    //getting data from context
    const { userNotes } = useContext(UserContext);

    return (
        userNotes &&
        userNotes.map((note, index) => (
            <NoteBox key={index} note={note} index={index} />
        ))
    );
};

export default SavedNotesList;
