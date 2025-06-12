import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FisicaLogo from "../assets/fisica.png";
import mainImg from "../assets/img.png";
import logo from "../assets/logo.png";
import "./css/Fisica.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [lastVisited, setLastVisited] = useState("/Fundamentos");
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
        <img src={FisicaLogo} alt="História" className="historia-img" />
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
          <Link to="/Ondas" className="subject-button" onClick={() => handleSaveAndNavigate("/Ondas")}>
          Óptica e Ondulatória: Luz e Som
          </Link>
          <Link to="/Fundamentos" className="subject-button" onClick={() => handleSaveAndNavigate("/Fundamentos")}>
          Fundamentos da Física: Unidades e Conceitos Básicos
          </Link>
          <Link to="/Termodinamica" className="subject-button" onClick={() => handleSaveAndNavigate("/Evolucao")}>
          Termodinâmica: Conceitos de Calor e Energia 
          </Link>
          <Link to="/Mecanica" className="subject-button" onClick={() => handleSaveAndNavigate("/Mecanica")}>
          Mecânica Clássica: Forças e Leis de Newton 
          </Link>
        </div>
      </div>
    </div>
  );
}
 