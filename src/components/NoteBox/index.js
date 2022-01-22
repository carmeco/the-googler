import React, { useState, useRef, useContext } from "react";

//context
import { UserContext } from "../../context/userContext";

//styles
import { Wrapper } from "./NoteBox.styles";

const NoteBox = ({ note, index }) => {
    const [editMode, setEditMode] = useState(false);

    //note states
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);

    //context for notes
    const { setUserNotes } = useContext(UserContext);

    //handle note editing submit
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserNotes((prev) => {
            const newUserNotes = [...prev];
            newUserNotes[index] = { title: title, description: description };
            return newUserNotes;
        });
        setEditMode(false);
    };

    //delete a note
    const deleteNote = () => {
        setUserNotes((prev) => {
            const newUserNotes = [...prev];
            newUserNotes.splice(index, 1);
            return newUserNotes;
        });
    };

    return (
        <Wrapper>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={() => deleteNote()}>Delete</button>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input
                        id="note-title"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <textarea
                        id="note-description"
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <button type="submit">Save changes</button>
                </form>
            ) : (
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            )}
        </Wrapper>
    );
};

export default NoteBox;
