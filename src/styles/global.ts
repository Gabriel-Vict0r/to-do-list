import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
    }
    body {
        background: ${(prop) => prop.theme.colors.forms.secondGray};
    }
`
export const Main = styled.main`
    min-height: 79vh;
    text-align: center;
    padding: 2em;
`
export const Subtitle = styled.h2`
    font-family: ${prop => prop.theme.fonts.primary || 'sans-serif'};
    font-size: ${prop => prop.theme.fonts.sizePrimary};
    margin: 0 auto;
    letter-spacing: 1px;
    
    
`