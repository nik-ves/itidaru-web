import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TodoContextProvider from "./context/todo-context";

ReactDOM.render(
  <BrowserRouter>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
