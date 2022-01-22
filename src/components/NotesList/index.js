import React, { useContext } from "react";

//context
import { UserContext } from "../../context/userContext";

//styles
import { Grid } from "./NotesList.styles";

//components
import CreateNote from "../CreateNote";
import NoteBox from "../NoteBox";

const NotesList = () => {
    //getting notes from context
    const { userNotes } = useContext(UserContext);
    const userNotesReverse = [...userNotes].reverse();

    return (
        <Grid>
            <CreateNote />
            {userNotes &&
                userNotesReverse.map((note, index) => (
                    <NoteBox key={index} note={note} />
                ))}
        </Grid>
    );
};

export default NotesList;
