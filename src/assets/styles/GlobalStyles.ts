import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
    
  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  ul,li{
    list-style: none;
  }
`;

export default GlobalStyles;
