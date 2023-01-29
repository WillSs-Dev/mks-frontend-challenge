import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    }
  body {
    background: #E5E5E5;

    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: #373737;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }

    > #root {
      min-height: 100vH;
    }
  }
`;

export default GlobalStyle;
