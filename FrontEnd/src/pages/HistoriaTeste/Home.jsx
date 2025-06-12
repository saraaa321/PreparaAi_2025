import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Home.css";
import historiaLogo from "./assets/historia.png";

function Home() {
  const [progress, setProgress] = useState(8);
  const [lastVisited, setLastVisited] = useState("/Guerras");

  const handleContinue = () => {
    window.location.href = lastVisited;
  };

  return (
    <div className="home-container">
      <div className="header">
        <img src={historiaLogo} alt="História Logo" className="logo" />
      </div>
      <div className="content">
        <div className="progress-section">
          <p>Com o Gabarita você passa!</p>
          <p>Progresso:</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <button className="continue-button" onClick={handleContinue}>
            continuar de onde parei
          </button>
        </div>
        <div className="subjects">
          <h2>Matérias:</h2>
          <Link to="/Guerras" className="subject-button" onClick={() => setLastVisited("/Guerras")}>
            Guerras: O mundo em conflito
          </Link>
          <Link to="/BrasilRepublica" className="subject-button" onClick={() => setLastVisited("/BrasilRepublica")}>
            Brasil República
          </Link>
          <Link to="/Feudalismo" className="subject-button" onClick={() => setLastVisited("/Feudalismo")}>
            Feudalismo
          </Link>
          <Link to="/Revolucoes" className="subject-button" onClick={() => setLastVisited("/Revolucoes")}>
            A perspectiva das Revoluções
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;