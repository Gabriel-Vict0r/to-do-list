import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${(prop) => prop.theme.colors.background};
        color: ${prop => prop.theme.colors.text};
    }
`
export const Main = styled.main`
    min-height: 79vh;
    text-align: center;
`