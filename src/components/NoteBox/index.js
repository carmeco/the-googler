import React from "react";

//styles
import { Wrapper } from "./NoteBox.styles";

const NoteBox = ({ note }) => {
    return (
        <Wrapper>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            {/* <button onClick={handleClick}>Borrar</button> */}
            {/* <button onClick={}>Editar</button> */}
        </Wrapper>
    );
};

export default NoteBox;
