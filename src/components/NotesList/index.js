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

    return (
        <Grid>
            <CreateNote />
            {userNotes &&
                userNotes.map((note, index) => (
                    <NoteBox
                        key={`${index}-${note.title}`}
                        note={note}
                        index={index}
                    />
                ))}
        </Grid>
    );
};

export default NotesList;
