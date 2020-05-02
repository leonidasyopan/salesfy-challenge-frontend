import { createGlobalStyle } from "styled-components";

/* Some resetting to the CSS so we can
style it ourselves */
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
    font-family: 'Lato', sans-serif;
    font-size: 20px;
  }
  button {
    cursor: pointer;
  }
`;
