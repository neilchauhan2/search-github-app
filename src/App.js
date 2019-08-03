import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import SearchBox from "./components/SearchBox";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SearchBox />
        <User />
      </div>
    </Router>
  );
}

export default App;
