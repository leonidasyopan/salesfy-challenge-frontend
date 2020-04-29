import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font-family: 'Titillium Web', sans-serif;
    font-size: 16px;
    background: #3E2C3E;
  }
  button {
    cursor: pointer;
  }
`;
