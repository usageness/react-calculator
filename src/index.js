import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Calculator from "./Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
