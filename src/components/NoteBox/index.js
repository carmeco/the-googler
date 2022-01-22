import React from "react";

const NoteBox = ({ note }) => {
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            {/* <button onClick={}>Borrar</button>
            <button onClick={}>Editar</button> */}
        </div>
    );
};

export default NoteBox;
