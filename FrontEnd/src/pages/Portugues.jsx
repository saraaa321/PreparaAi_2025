import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import portuguesLogo from "../assets/portugues.png";
import mainImg from "../assets/book_3601167.png";
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
        <img src={portuguesLogo} alt="História" className="historia-img" />
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
          <Link to="/Literatura" className="subject-button" onClick={() => handleSaveAndNavigate("/EscolasLiterarias")}>
          Escolas Literárias
          </Link>
          <Link to="/Geneross" className="subject-button" onClick={() => handleSaveAndNavigate("/GenerosTextuais")}>
          Gêneros Textuais
          </Link>
          <Link to="/Interpretacao" className="subject-button" onClick={() => handleSaveAndNavigate("/LeituraInterpretacao")}>
            Leitura e Interpretação
          </Link>
          <Link to="/Producao" className="subject-button" onClick={() => handleSaveAndNavigate("/ProducaoTextual")}>
            Produção Textual
          </Link>
        </div>
      </div>
    </div>
  );
}
 