
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
`;