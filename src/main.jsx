import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from 'react-router-dom';
import App from "./App";
import "./index.css";
import axios from "axios";

import { MyProvider } from "./context/Context";

axios.interceptors.request.use((request) => {
  request.headers.authorization = `Bearer ${window.localStorage.getItem(
    "token"
  )}`;
  request.headers["x-frontend-origin"] = "kbrus"
  return request;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Router>
      <MyProvider>
        <App />
      </MyProvider>
    </Router>
 
);
