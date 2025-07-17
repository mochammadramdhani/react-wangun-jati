import React from "react";
import "./App.css";
import Home from "./pages/Home/index";
import { Routes, Route, Navigate } from "react-router-dom";
import Projects from "./pages/Projects/index";
import About from "./pages/About/index";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/layanan" element={<Projects />} />
      <Route path="/tentang" element={<About />} />
      <Route path="/kontak" element={<Contact />} />
      <Route path="/portofolio" element={<Posts />} />
      {/* Catch all to Home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
