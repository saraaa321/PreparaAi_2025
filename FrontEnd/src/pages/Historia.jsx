import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Guerras from "./pages/Guerras";
import Feudalismo from "./pages/Feudalismo";
import BrasilRepublica from "./pages/BrasilRepublica";
import Revolucoes from "./pages/Revolucoes";
import "./Css/App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Historia" element={<Home />} />
          <Route path="/Guerras" element={<Guerras />} />
          <Route path="/Feudalismo" element={<Feudalismo />} />
          <Route path="/BrasilRepublica" element={<BrasilRepublica />} />
          <Route path="/Revolucoes" element={<Revolucoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;