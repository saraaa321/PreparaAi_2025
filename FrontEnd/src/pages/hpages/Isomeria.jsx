import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Isomeria.css";

function Isomeria() {
  const navigate = useNavigate();
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progresso_isomeria");
    if (saved === "true") {
      setConcluido(true);
    }
  }, []);

  const showNotification = (message, type) => {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
          notification.remove();
        }, 500);
      }, 2000);
    }, 100);
  };

  const marcarComoConcluido = () => {
    localStorage.setItem("progresso_isomeria", "true");
    setConcluido(true);
    showNotification("✓ Conteúdo marcado como concluído!", "success");
  };

  const removerConcluido = () => {
    localStorage.setItem("progresso_isomeria", "false");
    setConcluido(false);
    showNotification("✗ Conteúdo desmarcado como concluído.", "info");
  };

  const voltar = () => navigate("/");

  return (
    <div className="isomeria-wrapper">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn" onClick={() => alert("Página 'Sobre Nós' em construção.")}>Sobre Nós</button>
          <button className="btn sair" onClick={() => alert("Você saiu com sucesso.")}>Sair</button>
        </div>
      </header>

      <main className="content">
        <div className="top-content-actions">
          <button className="back-button" onClick={voltar}>
            Voltar
          </button>
          {concluido ? (
            <button className="btn-concluido concluido" onClick={removerConcluido}>
              Concluído!
            </button>
          ) : (
            <button className="btn-concluido" onClick={marcarComoConcluido}>
              Marcar como Concluído
            </button>
          )}
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">Isomeria e Classificação das Substâncias</span>
          <div className="subtitulo-principal">Entenda as diferenças estruturais e espaciais das moléculas</div>
        </h1>

        <div className="resumo-card">
          <section className="resumo-section">
            <h2 className="resumo-titulo">O que são Isômeros?</h2>
            <div className="resumo-content">
              <p className="resumo-descricao">
                Isômeros são moléculas que possuem a mesma fórmula molecular, ou seja, têm o mesmo número e tipo de átomos, mas organizados de maneiras diferentes no espaço ou na estrutura. Isso faz com que suas propriedades químicas e físicas sejam diferentes.
              </p>
              <div className="imagemPrincipal">
                <img
                  src="https://storage.googleapis.com/novo-blog-wordpress/2021/11/image-62.png"
                  alt="Exemplo de Isômeros"
                  className="imagemPrincipal"
                />
              </div>
            </div>
          </section>

          <section className="contexto-section">
            <h2 className="resumo-titulo">Tipos Principais de Isomeria</h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  A isomeria pode ser dividida em dois tipos principais: estrutural e espacial. Cada tipo possui subcategorias que explicam as diferentes formas de organização das moléculas.
                </p>
                <ul className="resumo-lista">
                  <li>
                    <strong>Isomeria Estrutural (ou Constitucional):</strong> Ocorre quando os átomos estão ligados em ordens diferentes. Exemplo: o butano (C₄H₁₀) tem duas formas: o n-butano (cadeia linear) e o isobutano (cadeia ramificada).
                  </li>
                  <li>
                    <strong>Isomeria Espacial (Estereoisomeria):</strong> Os átomos estão ligados na mesma ordem, mas com diferentes disposições espaciais.
                    <ul>
                      <li>
                        <strong>Isomeria Geométrica (Cis-Trans):</strong> Ocorre em compostos com duplas ligações, onde os grupos podem estar do mesmo lado (cis) ou em lados opostos (trans).
                      </li>
                      <li>
                        <strong>Isomeria Óptica:</strong> Moléculas que são imagens especulares não sobreponíveis (como as mãos esquerda e direita), chamadas de enantiômeros.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="side-image-container">
                <img
                  src="https://storage.googleapis.com/novo-blog-wordpress/2021/11/image-60.png"
                  alt="Tipos de Isomeria"
                  className="side-image"
                />
              </div>
            </div>
          </section>

          <section className="caracteristicas-section">
            <h2 className="resumo-titulo">Importância da Isomeria</h2>
            <div className="caracteristica-item">
              <h3 className="caracteristica-titulo">Propriedades Diferentes</h3>
              <p className="resumo-descricao">
                Isômeros podem ter propriedades muito diferentes, como ponto de ebulição, solubilidade e até atividade biológica. Por exemplo, o limoneno tem dois isômeros ópticos: um com cheiro de limão e outro com cheiro de laranja.
              </p>
            </div>
            <div className="caracteristica-item">
              <h3 className="caracteristica-titulo">Aplicações Práticas</h3>
              <p className="resumo-descricao">
                A isomeria é fundamental na indústria farmacêutica, onde diferentes isômeros de um mesmo composto podem ter efeitos terapêuticos ou tóxicos. Por exemplo, o talidomida, um medicamento, possui um isômero terapêutico e outro que causa efeitos colaterais graves.
              </p>
            </div>
          </section>

          <section className="contexto-section">
            <h2 className="resumo-titulo">Outros Termos Relacionados</h2>
            <ul className="resumo-lista">
              <li>
                <strong>Isótopos:</strong> Átomos do mesmo elemento com diferentes números de nêutrons.
              </li>
              <li>
                <strong>Alótropos:</strong> Diferentes formas do mesmo elemento químico, com arranjos estruturais distintos. Exemplo: carbono como grafite e diamante, oxigênio como O₂ e ozônio (O₃).
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li><span onClick={voltar}>Página Inicial</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gabarita Mente - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Isomeria;