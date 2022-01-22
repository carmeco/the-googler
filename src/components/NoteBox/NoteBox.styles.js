import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 1.5rem;
    background-color: var(--lightGrey);
    height: 300px;
    border-radius: 0.5rem;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.2rem;
    margin-bottom: 0.5rem;

    button {
        opacity: 0.5;
        color: var(--darkBlue);
        background-color: none;
        border: none;
        &:hover {
            opacity: 1;
        }
    }
`;

export const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10; /* number of lines to show */
    line-clamp: 10;
    -webkit-box-orient: vertical;
`;

export const DescriptionTextArea = styled.textarea`
    resize: none;
`;

export const Tags = styled.p`
    border-top: 1px solid var(--darkBlue);
    opacity: 0.5;
    padding-top: 0.5rem;
    margin: 0.8rem 0;
`;

