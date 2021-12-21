import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import TodoContextProvider from "./context/todo-context";
import AuthContextProvider from "./context/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
