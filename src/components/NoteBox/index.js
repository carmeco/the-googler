import React, { useState, useContext } from "react";

//context
import { UserContext } from "../../context/userContext";

//styles
import {
    Wrapper,
    Buttons,
    Description,
    DescriptionTextArea,
    Content,
    Tags,
} from "./NoteBox.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const NoteBox = ({ note, index }) => {
    const [editMode, setEditMode] = useState(false);

    //note states
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [tags, setTags] = useState(note.tags);

    //context for notes
    const { setUserNotes } = useContext(UserContext);

    //handle note editing submit
    const handleSubmit = (event) => {
        event.preventDefault();
        setUserNotes((prev) => {
            const newUserNotes = [...prev];
            newUserNotes[index] = {
                title: title,
                description: description,
                tags: tags,
            };
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
            <Buttons>
                <button onClick={() => setEditMode(true)}>
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                </button>
                <button onClick={() => deleteNote()}>
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                </button>
            </Buttons>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <DescriptionTextArea
                        type="text"
                        rows="9"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input
                        type="text"
                        value={tags}
                        onChange={(event) => setTags(event.target.value)}
                    />
                    <button type="submit">Save changes</button>
                </form>
            ) : (
                <Content>
                    <h2>{title}</h2>
                    <Description>{description}</Description>
                    {tags ? <Tags>{tags}</Tags> : null}
                </Content>
            )}
        </Wrapper>
    );
};

export default NoteBox;
