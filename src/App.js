import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SearchBox />
      </div>
    </Router>
  );
}

export default App;
