import React, { useState } from "react";
import Router from "Components/Router";
import GlobalStyle from "./GlobalStyle";
import axios from "axios";

function App() {
  return (
    // Fragments는 원하는 수만큼의 컴포넌트를 return할 수 있게 해준다.
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
