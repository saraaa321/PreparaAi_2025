import React from "react";
import "./css/PgQuiz.css";
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logo.png"; // Substitua pelo caminho correto da logo
import titulo from "../assets/questionarios.png"; // Substitua pelo caminho correto do título
import geral from "../assets/geral.png"; // Substitua pelo caminho correto do título

function PgQuiz() {

  const navigate = useNavigate();

  const handleVolta = async () => {
    try {
      navigate('/PagInicial'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro", error.message);
    }
  };

  const handleQuiz = async () => {
    try {
      navigate('/Quiz'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro", error.message);
    }
  };


  return (
    <div className="container">
      {/* Topo com logo e botão */}
      <div className="topo">
        <img src={logo} alt="Logo Gabarita Mente?!" className="logo-img" />
        <button className="btn-voltar" onClick={handleVolta}>Voltar</button>
      </div>

      {/* Título central (imagem) */}
      <div className="titulo-img-area">
        <img src={titulo} alt="Título Questionários" className="titulo-img" />
      </div>

      {/* Bloco Geral */}
      <div className="box-geral">
        <div className="box-geral-titulo">GERAL</div>
        <img src={geral} alt="img questionario geral" className="imagem" />
      </div>

      {/* Botão Iniciar */}
      <div className="area-iniciar">
        <button className="btn-iniciar" onClick={handleQuiz}>Iniciar</button>
      </div>
    </div>
  );
}

export default PgQuiz;
