// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
// components 불러오기
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* App 화면 렌더링 */}
  </React.StrictMode>
);
