import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Student from "./components/Student";
import NavigationBar from "./components/Navbar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}
