import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

function tick() {
  root.render(<App />);
}

setInterval(tick, 1000);
