import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Professional from "./Pages/Professional";
import Error from "./Pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/project" element={<Project />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;
