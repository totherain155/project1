import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// styled-components는 local에서 동작하기 때문에 global한 css를 만들기 위해선 'styled-reset'을 설치해주고 ${reset}으로 사용한다.

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
       padding-top:60px;
   }
`;

export default GlobalStyle;
