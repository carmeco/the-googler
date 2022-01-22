import styled from "styled-components";
import { devices } from "../../GlobalStyles";
import background from "../../images/background.jpg";

export const Wrapper = styled.div`
    min-height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    @media ${devices.sm} {
        flex-direction: row;
    }

    form {
        padding: 1rem;
        background-color: var(--lightGrey);
        border-radius: 0.5rem;
    }
`;
