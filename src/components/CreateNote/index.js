import React, { useRef, useContext } from "react";

//context
import { LoginContext } from "../../context/loginContext";

const CreateNote = ({ setUserNotes }) => {
    //refs to DOM elements
    const noteTitleRef = useRef(null);
    const noteDescriptionRef = useRef(null);

    //getting user from context
    const { userLogged } = useContext(LoginContext);

    //submit a note
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserNotes((prev) => [
            ...prev,
            {
                title: noteTitleRef.current.value,
                description: noteDescriptionRef.current.value,
            },
        ]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="note-title"
                type="text"
                ref={noteTitleRef}
                placeholder="Title"
            />
            <input
                id="note-description"
                type="text"
                ref={noteDescriptionRef}
                placeholder="Text of the note"
            />
            <button type="submit">Create note</button>
        </form>
    );
};

export default CreateNote;
