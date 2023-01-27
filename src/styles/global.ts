import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    }
  body {
    background: #E5E5E5;
    min-height: 100vH;

    > #root {
      min-height: 100vH;
    }
  }
`;

export default GlobalStyle;
