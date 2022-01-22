import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Theme Colors
        --darkBlue: #172b4d;
        --grey: #b2b8c4;
        --lightGrey: #ebecf0;
        --black: #202124;
    }
    * {
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        margin: 0;
        padding: 0;
    }
    body {
        color: var(--darkBlue);
        margin: auto;
    }
    ul, ol {
        list-style: none;
    }
    h2 {
        font-size: 1.2rem;
        padding: 0.2rem 0;
    }
    a:hover, button:hover {
        cursor: pointer;
    }
`;

export const devices = {
    sm: `(min-width: 576px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 992px)`,
    xl: `(min-width: 1200px)`,
    xxl: `(min-width: 1400px)`,
};
