import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";

//& Base Styles, all pages;
import "./Styles/_base.scss";
import "./Styles/_open-props.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
