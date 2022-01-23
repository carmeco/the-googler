import React, { useRef, useContext, useEffect } from "react";

//context
import { UserContext } from "../../context/userContext";

//styles
import { Wrapper, DescriptionTextArea } from "./CreateNote.styles";

const CreateNote = () => {
    //refs to DOM elements
    const noteTitleRef = useRef(null);
    const noteDescriptionRef = useRef(null);
    const noteTagsRef = useRef(null);

    //context for notes
    const { setUserNotes } = useContext(UserContext);

    //handle submit a note
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserNotes((prev) => [
            ...prev,
            {
                title: noteTitleRef.current.value,
                description: noteDescriptionRef.current.value,
                tags: noteTagsRef.current.value,
            },
        ]);
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={noteTitleRef}
                    placeholder="Create a new note..."
                />
                <DescriptionTextArea
                    type="text"
                    rows="9"
                    ref={noteDescriptionRef}
                    placeholder="Hero goes the title of the note"
                />
                <input
                    id="note-tags"
                    type="text"
                    ref={noteTagsRef}
                    placeholder="Tags (comma separated)"
                />
                <button type="submit">Create note</button>
            </form>
        </Wrapper>
    );
};

export default CreateNote;
