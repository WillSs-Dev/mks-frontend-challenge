import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    }
  body {
    background: #E5E5E5;

    > #root {
      min-height: 100vH;
    }
  }
`;

export default GlobalStyle;
