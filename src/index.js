import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from "./context/MoviesContextProvider";
import MyListContextProvider from "./context/MyListContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyListContextProvider>
    <MoviesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoviesContextProvider>
  </MyListContextProvider>
);
