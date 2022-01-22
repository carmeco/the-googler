import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Theme Colors
        --light-shades: #F5F6F5;
        --light-accent: #BEA2B4;
        --main: #E5A675;
        --dark-accent: #A67B95;
        --dark-shades: #574E62;
        --light-grey: #f1f3f4;
        --black: #202124;
        //Font sizes
        /* --fontSuperBig: 3rem;
        --fontBig: 2.5rem;
        --fontMed: 2rem;
        --fontSmall: 1.5rem;
        --fontSuperSmall: 1.2rem;
        --fontReSuperSmall: 0.8rem; */
    }
    * {
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        margin: 0;
        padding: 0;
        body {
            color: var(--black);
            margin: auto;
        }
        ul, ol {
            list-style: none;
        }
    }
`;

export const devices = {
    sm: `(min-width: 576px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 992px)`,
    xl: `(min-width: 1200px)`,
    xxl: `(min-width: 1400px)`,
};
