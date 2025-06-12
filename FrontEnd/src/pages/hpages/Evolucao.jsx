import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import "../Css/Evolucao.css";
function Evolucao() {
  const navigate = useNavigate();
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progresso_evolucao");
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
    localStorage.setItem("progresso_evolucao", "true");
    setConcluido(true);
    showNotification("✓ Conteúdo marcado como concluído!", "success");
  };

  const removerConcluido = () => {
    localStorage.setItem("progresso_evolucao", "false");
    setConcluido(false);
    showNotification("✗ Conteúdo desmarcado como concluído.", "info");
  };

  const voltar = () => navigate("/Biologia");

  return (
    <div className="feudalismo-wrapper"> 
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
           <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
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
          <span className="titulo-animado">Evolução Biológica</span>
          <div className="subtitulo-principal">A jornada da vida na Terra: dos ancestrais comuns à diversidade atual</div>
        </h1>

        <div className="resumo-card">
          <section className="resumo-section">
            <h2 className="resumo-titulo">
              Resumo Geral da Evolução
            </h2>
            <div className="resumo-content">
              <p className="resumo-descricao">
              Evolução é o termo utilizado para se referir às mudanças que os organismos sofrem ao longo do tempo, mudanças essas que explicam a grande variedade de organismos existentes em nosso planeta. Várias teorias foram propostas com o passar dos anos para explicar como essas mudanças ocorriam. Entre essas teorias se destacam a de Lamarck, de Darwin e o Neodarwinismo.
              </p>
              <div className="imagemPrincipal">
                <img
                  src="https://static.todamateria.com.br/upload/55/77/55775b0b69546-fosseis.jpg" 
                  alt=""
                  className="imagemPrincipal"
                />
              </div>
            
            </div>
          </section>

          <section className="contexto-section"> 
            <h2 className="resumo-titulo">
              <span className="titulo-icon">⏳</span> 
              Bases e Evidências da Evolução
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  As primeiras ideias sobre a transformação das espécies surgiram antes de Darwin, com pensadores como Lamarck. No entanto, foi a obra "A Origem das Espécies" de Darwin (1859) que apresentou um mecanismo robusto (seleção natural) e uma vasta quantidade de evidências. A teoria evolutiva moderna, conhecida como Neodarwinismo ou Teoria Sintética da Evolução, integra as ideias de Darwin com os conhecimentos da genética (mutações, recombinação gênica, deriva genética) e outras áreas da biologia.
                </p>
                <h2 className="resumo-titulo">
                  <span className="titulo-icon">🦴</span> 
                  Principais Evidências
                </h2>
                <p className="resumo-descricao">
                  <strong>Fósseis:</strong> Restos ou vestígios de seres vivos do passado que mostram formas de transição e mudanças ao longo do tempo. <br/>
                  <strong>Anatomia Comparada:</strong> Órgãos homólogos (mesma origem embrionária, funções diferentes) e análogos (origem embrionária diferente, mesma função) revelam relações de parentesco e convergência adaptativa. <br/>
                  <strong>Embriologia Comparada:</strong> Semelhanças no desenvolvimento embrionário de diferentes espécies sugerem ancestralidade comum. <br/>
                  <strong>Bioquímica Comparada:</strong> Similaridades no DNA, RNA e proteínas entre diferentes organismos indicam parentesco evolutivo. Quanto maior a semelhança, mais próximo o parentesco.
                </p>
              </div>
              <div className="side-image-container">
                <img
                  src="https://st2.depositphotos.com/1013053/12105/i/450/depositphotos_121056990-stock-photo-well-preserved-fossilized-lizard.jpg" 
                  alt=""
                  className="side-image"
                />
                <div className="image-caption">Registro fóssil, retirado do acervo virtual - depositphotos</div>
              </div>
            </div>
          </section>

          <section className="caracteristicas-section">
            <h2 className="resumo-titulo">
              Mecanismos e Exemplos de Evolução
            </h2>

            <div className="caracteristica-item">
              <h3 className="caracteristica-titulo">Mecanismos Fundamentais</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    A evolução ocorre através de vários mecanismos que alteram a frequência dos alelos (variantes de genes) nas populações ao longo do tempo.
                  </p>
                  <div className="estamentos-grid"> 
                    <div className="estamento-card">
                      <h4>🧬 Mutação</h4>
                      <p>Alterações aleatórias no material genético (DNA/RNA), fonte primária de nova variabilidade.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>🌿 Seleção Natural</h4>
                      <p>Indivíduos com características favoráveis ao ambiente sobrevivem e se reproduzem mais, passando essas características adiante.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>💨 Deriva Genética</h4>
                      <p>Flutuações aleatórias na frequência de alelos de uma geração para outra, mais impactante em populações pequenas.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>➡️ Fluxo Gênico</h4>
                      <p>Movimento de alelos entre populações através da migração de indivíduos ou dispersão de gametas.</p>
                    </div>
                  </div>
                </div>
                <div className="side-image-container">
                  <img
                    src="https://static-prodigio.b-cdn.net/Biologia/Teorias%20evolutivas/Evolutivas-2.png"
                    alt=""
                    className="side1-image" 
                  />
                </div>
              </div>
            </div>

            <div className="caracteristica-item">
              <h3 className="resumo-titulo">🐒 Evolução Humana</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    A evolução humana é o processo evolutivo que levou ao surgimento do <i>Homo sapiens</i>. Compartilhamos um ancestral comum com outros primatas, e nossa linhagem (hominídeos) desenvolveu características como bipedalismo, aumento da capacidade craniana e uso de ferramentas.
                  </p>
                  <div className="economia-features"> 
                    <div className="feature-item">
                      <span className="feature-icon">🦴</span>
                      <div>
                        <strong>Australopithecus</strong>
                        <p>Primeiros hominídeos bípedes (ex: Lucy).</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🛠️</span>
                      <div>
                        <strong>Homo habilis</strong>
                        <p>Primeiro do gênero Homo, associado a ferramentas de pedra.</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🔥</span>
                      <div>
                        <strong>Homo erectus</strong>
                        <p>Postura ereta, uso do fogo, migração para fora da África.</p>
                      </div>
                    </div>
                     <div className="feature-item">
                      <span className="feature-icon">🧠</span>
                      <div>
                        <strong>Homo sapiens</strong>
                        <p>Nossa espécie, com desenvolvimento de linguagem complexa, arte e cultura.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-image-container">
                  <img
                    src="https://revistaforum.com.br/u/fotografias/m/2024/11/24/f638x638-140552_198719_5031.jpg"
                    alt=""
                    className="side-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="decadencia-section"> 
            <h2 className="resumo-titulo">
              <span className="titulo-icon">💡</span> 
              Evolução em Ação e Implicações
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  A evolução não é apenas um evento do passado; ela continua ocorrendo. Compreendê-la tem implicações profundas em áreas como medicina, agricultura e conservação.
                </p>
                <div className="declinio-fatores"> 
                  <div className="fator-item">
                    <span className="fator-numero">1</span>
                    <div>
                      <strong>Resistência a Antibióticos</strong>
                      <p>Bactérias evoluem rapidamente, tornando alguns antibióticos ineficazes.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">2</span>
                    <div>
                      <strong>Coevolução</strong>
                      <p>Espécies evoluem em resposta umas às outras (ex: predador-presa, polinizador-planta).</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">3</span>
                    <div>
                      <strong>Conservação da Biodiversidade</strong>
                      <p>Entender a evolução ajuda a proteger espécies e ecossistemas.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">4</span>
                    <div>
                      <strong>Melhoramento Genético</strong>
                      <p>Princípios evolutivos são usados na agricultura e pecuária.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-image-container">
                <img
                  src="https://static.preparaenem.com/conteudo/images/estrutura-dna.jpg" 
                  className="side-image"
                />
              </div>
            </div>
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

export default Evolucao;