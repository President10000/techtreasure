import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
