import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./contexts/AppProvider";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

function Index() {
  return (
    <AppProvider>
      <Router>
        <App />;
      </Router>
    </AppProvider>
  );
}

ReactDOM.render(<Index />, rootElement);
