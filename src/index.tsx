import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./custom.css";
import App from "./App";
import DataProvider from "./context/DataProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
