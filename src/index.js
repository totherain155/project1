import React from "react";
import ReactDOM from "react-dom";
// jsconfig.json의 설정덕분에 src를 기준으로 경로 지정이 가능하다.
import App from "Components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
