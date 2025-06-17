import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BiologiaLogo from "../assets/biologia.png";
import mainImg from "../assets/img.png";
import logo from "../assets/logo.png";
import "./css/Biologia.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [lastVisited, setLastVisited] = useState("/Evolucao");
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
    navegate ("/SobreNos");
  };

  const handleLogout = () => {
    navigate("/Resumos");
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
          <button className="btn sair" onClick={handleLogout}>Voltar</button>
        </div>
      </header>

      <div className="historia-container">
        <img src={BiologiaLogo} alt="História" className="historia-img" />
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
          <Link to="/Celulas" className="subject-button" onClick={() => handleSaveAndNavigate("/Celulas")}>
          Célula: A Unidade da Vida
          </Link>
          <Link to="/Anatomia" className="subject-button" onClick={() => handleSaveAndNavigate("/Anatomia")}>
          Sistemas da Anatomia Humana
          </Link>
          <Link to="/Evolucao" className="subject-button" onClick={() => handleSaveAndNavigate("/Evolucao")}>
            Evolução: Do micro ao macro
          </Link>
          <Link to="/ReinoPlantae" className="subject-button" onClick={() => handleSaveAndNavigate("/ReinoPlantae")}>
            Reino Plantae: Diversidade e Importância 
          </Link>
        </div>
      </div>
    </div>
  );
}
 