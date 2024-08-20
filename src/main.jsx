import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context.jsx"; // Import the Context component

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context> {/* Use Context as the provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
