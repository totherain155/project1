import React, { useState } from "react";
import Router from "Components/Router";
import GlobalStyle from "./GlobalStyle";
import axios from "axios";

function App() {
  const API_KEY = "16e89e9d98e64058a20fb283c8d05f68";

  return (
    <>
      <Router />
      <GlobalStyle />

      <h1>start</h1>
    </>
  );
}

export default App;
