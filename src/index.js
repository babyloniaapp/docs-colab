import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  rootElement
);
