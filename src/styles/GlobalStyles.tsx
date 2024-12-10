import { createGlobalStyle } from 'styled-components';
import myThemeStyled from "./myThemeStyled";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
         //background-color: ${myThemeStyled.colors.blue}
    }
`