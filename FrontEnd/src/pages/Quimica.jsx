import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuimicaLogo from "../assets/unnamed.png";
import mainImg from "../assets/quim.png";
import logo from "../assets/logo.png";
import "./css/Quimica.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [lastVisited, setLastVisited] = useState("/Atomo");
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
        <img src={QuimicaLogo} alt="História" className="historia-img" />
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
          <h2>MATÉRIAS:</h2>
          <Link to="/Atomo" className="subject-button" onClick={() => handleSaveAndNavigate("/Atomo")}>
            Estrutura dos Átomos e a Tabela Periódica
          </Link>
          <Link to="/Estados" className="subject-button" onClick={() => handleSaveAndNavigate("/Estados")}>
            Estados Físicos dos Elementos e Propriedades
          </Link>
          <Link to="/Isomeria" className="subject-button" onClick={() => handleSaveAndNavigate("/Isomeria")}>
            Isomeria e Classificação das Substâncias
          </Link>
          <Link to="/Reacoes" className="subject-button" onClick={() => handleSaveAndNavigate("/Reacoes")}>
            Tipos de Reações Químicas
          </Link>
          <Link to="/Ph" className="subject-button" onClick={() => handleSaveAndNavigate("/Ph")}>
            pH e Catalisadores
          </Link>
        </div>
      </div>
    </div>
  );
}
 