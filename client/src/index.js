import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";

M.AutoInit();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
