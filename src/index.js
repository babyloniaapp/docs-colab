import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
