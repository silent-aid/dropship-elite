import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import Tailwind CSS styles
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // Import React Router for routing

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <App />
  </Router>
);
