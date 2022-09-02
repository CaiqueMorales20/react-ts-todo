import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    line-height: 1.6;
    background-color: #cd3c43;
    font-family: 'Anek Telugu', sans-serif;
  }
  ul{
    list-style: none;
  }
  input{
    border: none;
    outline: none;
  }
  img{
    width: 100%;
    height: auto;
  }
  * span {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
`;
