import React from "react";

const NoteBox = ({ note, index, setUserNotes }) => {
    const handleClick = (event) => {
        event.preventDefault();
        setUserNotes((prev) => {
            prev.splice(index, 1);
        });
    };
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={handleClick}>Borrar</button>
            {/* <button onClick={}>Editar</button> */}
        </div>
    );
};

export default NoteBox;
