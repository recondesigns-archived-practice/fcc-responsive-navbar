import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./contexts/AppProvider";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

function Index() {
  return (
    <AppProvider>
      <App />;
    </AppProvider>
  );
}

ReactDOM.render(<Index />, rootElement);
