import React from "react";
import "./css/PgQuiz.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import logo from "../assets/logo.png"; // Substitua pelo caminho correto da logo
import titulo from "../assets/questionarios.png"; // Substitua pelo caminho correto do título
import geral from "../assets/geral.png"; // Substitua pelo caminho correto do título

function PgQuiz() {

  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleVolta = async () => {
    try {
      navigate('/PagInicial'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro", error.message);
    }
  };

  const handleQuiz = async () => {
    try {
      navigate('/Quiz/geral'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro", error.message);
    }
  };

  useEffect(() => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

    setLoading(true); // começa carregando
    axios.get(`${API_BASE_URL}/perguntas`)
      .then((res) => {
        const todasCategorias = res.data.map(p => p.categoria);
        const unicas = [...new Set(todasCategorias)];
        setCategorias(unicas);
        setLoading(false); // finaliza o carregamento
      })
      .catch(err => {
        console.error('Erro ao buscar categorias', err);
        setLoading(false); // mesmo em erro, remove o "carregando"
      });
  }, []);


  const iniciarQuiz = (categoria) => {
    navigate(`/quiz/${categoria}`);
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


      <div className="box-geral">
        <div className="box-geral-titulo">POR CATEGORIA</div>
      </div>

      <div className="botoes-categorias">
        {loading ? (
          <p>Carregando categorias...</p>
        ) : categorias.length > 0 ? (
          categorias.map((cat, index) => (
            <button key={index} onClick={() => iniciarQuiz(cat)} className="categoria-btn">
              {cat}
            </button>
          ))
        ) : (
          <p>Nenhuma categoria encontrada.</p>
        )}
      </div>

    </div>
  );
}

export default PgQuiz;
