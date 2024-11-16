import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
