import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    width: 80%;
    margin: auto;
    font-family: "Helvetica", "Arial", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
