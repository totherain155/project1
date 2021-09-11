import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  a{
      text-decoration: none;

  }
  *{
     box-sizing: border-box;
   }
   body{
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       font-size:13px;
       padding-top:50px;
   }
`;

export default GlobalStyle;
