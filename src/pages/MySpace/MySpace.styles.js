import styled from "styled-components";
import { devices } from "../../GlobalStyles";
import background from "../../images/background.jpg";

export const Wrapper = styled.div`
    min-height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
`;

export const Header = styled.header`
    background-color: var(--darkBlue);
    opacity: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 1rem;
    @media ${devices.sm} {
        padding: 1rem 2rem;
    }

    h1 {
        font-size: 2rem;
        @media ${devices.sm} {
            font-size: 2.5rem;
        }
    }

    ul {
        @media ${devices.sm} {
            display: flex;
            gap: 1rem;
        }
    }
`;

export const Main = styled.main`
    padding: 1rem;
    @media ${devices.sm} {
        padding: 1rem 2rem;
    }
`;