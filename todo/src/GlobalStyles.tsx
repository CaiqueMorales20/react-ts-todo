import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body{
    width: 100%;
    height: 100vh;
    /* overflow: hidden; */
  }
  body{
    margin: 0;
    line-height: 1.6;
    max-height: 90vh;
    background-color: #FF3CAC;  
    background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
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
  span {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
  }
`;
