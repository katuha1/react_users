import React from "react";
import Routes from "./Routes";
import Menu from "./Menu";
import User from "./User";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Menu />
        <User />
        <Routes />
      </Router>
    </div>
  );
}
