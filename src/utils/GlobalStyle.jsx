import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;