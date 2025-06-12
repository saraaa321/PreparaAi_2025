import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GeografiaLogo from "../assets/geografia.png";
import mainImg from "../assets/img.png";
import logo from "../assets/logo.png";
import "./Css/Geografia.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [lastVisited, setLastVisited] = useState("/Economia");
  const navigate = useNavigate();

  useEffect(() => {
    const savedProgress = localStorage.getItem("progresso");
    const savedLastVisited = localStorage.getItem("ultimaPagina");
    if (savedProgress) setProgress(Number(savedProgress));
    if (savedLastVisited) setLastVisited(savedLastVisited);
  }, []);

  useEffect(() => {
    localStorage.setItem("progresso", progress);
  }, [progress]);

  const handleContinue = () => {
    navigate(lastVisited);
  };

  const handleSobreNos = () => {
    alert("Página 'Sobre Nós' em construção.");
  };

  const handleLogout = () => {
    alert("Você saiu com sucesso.");
  };

  const handleSaveAndNavigate = (path) => {
    setLastVisited(path);
    localStorage.setItem("ultimaPagina", path);
  };

  return (
    <div className="home-wrapper">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn" onClick={handleSobreNos}>Sobre Nós</button>
          <button className="btn sair" onClick={handleLogout}>Sair</button>
        </div>
      </header>

      <div className="historia-container">
        <img src={GeografiaLogo} alt="História" className="historia-img" />
      </div>

      <div className="main-content">
        <div className="left-section">
          <img src={mainImg} alt="Estudo" className="main-img" />
          <p className="subtitle">Com o Gabarita você passa!</p>
          <p>Progresso:</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-percent">{progress}%</p>
          <button className="continue-button" onClick={handleContinue}>
            Continuar de onde parei
          </button>
        </div>

        <div className="right-section">
          <h2>Matérias:</h2>
          <Link to="/Demografia" className="subject-button" onClick={() => handleSaveAndNavigate("/Demografia")}>
          Demografia
          </Link>
          <Link to="/Geologia" className="subject-button" onClick={() => handleSaveAndNavigate("/Geologia")}>
          Geologia
          </Link>
          <Link to="/Economia" className="subject-button" onClick={() => handleSaveAndNavigate("/Economia")}>
          Geografia Econômica
          </Link>
          <Link to="/Biomas" className="subject-button" onClick={() => handleSaveAndNavigate("/Biomas")}>
          Geomorfologia e Biomas
          </Link>
        </div>
      </div>
    </div>
  );
}
 