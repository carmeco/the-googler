import styled from "styled-components";
import { devices } from "../../GlobalStyles";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1.5rem;
`;
