import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Guerras from "./pages/Materia1";
import Feudalismo from "./pages/Materia2";
import BrasilRepublica from "./pages/Materia3";
import Revolucoes from "./pages/Materia4";
import "./Css/App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
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