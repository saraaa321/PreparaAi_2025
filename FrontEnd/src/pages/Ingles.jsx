import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// 1. A imagem do logo da matéria foi trocada.
// Você precisará de uma imagem para "Inglês" no seu diretório de assets.
import InglesLogo from "../assets/ingles.png"; // <<-- TROQUE "ingles.png" PELO NOME DA SUA IMAGEM
import mainImg from "../assets/img.png";
import logo from "../assets/logo.png";
import "./css/Biologia.css";

export default function Home() {
  const [progress, setProgress] = useState(0);
  // 2. O valor inicial do "último visitado" foi atualizado para uma rota válida de inglês.
  const [lastVisited, setLastVisited] = useState("/simple-past");
  const navigate = useNavigate();

  useEffect(() => {
    // A lógica de carregar o progresso e a última página foi mantida.
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
    navegate("/Resumos")
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
        {/* 3. A imagem e o texto alternativo foram atualizados. */}
        <img src={InglesLogo} alt="Inglês" className="historia-img" />
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
          {/* 4. Os links, rotas e textos dos botões foram todos atualizados para o conteúdo de Inglês. */}
          <Link to="/simplePast" className="subject-button" onClick={() => handleSaveAndNavigate("/simplePast")}>
            Inglês: Simple Past
          </Link>
          <Link to="/nounsAndPronouns" className="subject-button" onClick={() => handleSaveAndNavigate("/nounsAndPronouns")}>
            Inglês: Substantivos e Pronomes
          </Link>
          <Link to="/adjectivesAndComparatives" className="subject-button" onClick={() => handleSaveAndNavigate("/adjectivesAndComparatives")}>
            Inglês: Adjetivos e Comparativos
          </Link>
          <Link to="/translationAndStructure" className="subject-button" onClick={() => handleSaveAndNavigate("/translationAndStructure")}>
            Inglês: Tradução e Estrutura
          </Link>
        </div>
      </div>
    </div>
  );
}