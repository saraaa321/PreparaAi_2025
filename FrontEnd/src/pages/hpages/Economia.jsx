import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Geografia.jsx";

import "../Css/Economia.css";

function GeografiaEconomica() {
  const navigate = useNavigate();
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progresso_geografia_economica");
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
    localStorage.setItem("progresso_geografia_economica", "true");
    setConcluido(true);
    showNotification("✓ Conteúdo marcado como concluído!", "success");
  };

  const removerConcluido = () => {
    localStorage.setItem("progresso_geografia_economica", "false");
    setConcluido(false);
    showNotification("✗ Conteúdo desmarcado como concluído.", "info");
  };

  const voltar = () => navigate("/");

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
            Voltar
          </button>

          <div className="revolucao-actions">
            <button
              className={`btn-concluir ${concluido ? "concluido" : ""}`}
              onClick={marcarComoConcluido}
              disabled={concluido}
            >
              {concluido ? "Conteúdo Concluído" : "Marcar como Concluído"}
            </button>

            {concluido && (
              <button
                className="btn-remover-concluido"
                onClick={removerConcluido}
              >
                Remover Conclusão
              </button>
            )}
          </div>
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">Geografia Econômica</span>
          <div className="subtitulo-principal">
            Estudo das atividades produtivas e suas relações espaciais
          </div>
        </h1>

        <div className="resumo-card">
          <section className="resumo-section">
            <h2 className="resumo-titulo">Introdução à Geografia Econômica</h2>
            <div className="resumo-content">
              <p className="resumo-descricao">
                A Geografia Econômica é o ramo da geografia humana que estuda a
                distribuição das atividades econômicas no espaço geográfico e as
                relações entre economia e meio ambiente. Ela analisa a localização
                das indústrias, o comércio, a agricultura e os fluxos financeiros
                e de mercadorias no mundo.
              </p>
              <div className="imagemPrincipal">
                <img
                  src="https://adenilsongiovanini.com.br/blog/wp-content/uploads/2019/12/mapa-econ%C3%B4mico-2.jpg"
                  alt="Mapa econômico"
                  className="imagemPrincipal"
                />
              </div>
            </div>
          </section>

          <section className="contexto-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon">🌍</span>
              Atividades Econômicas Primárias, Secundárias e Terciárias
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  As atividades econômicas podem ser classificadas em três setores principais:
                </p>
                <h2 className="resumo-titulo">Setores Econômicos</h2>
                <p className="resumo-descricao">
                  <strong>Setor Primário:</strong> Abrange atividades ligadas à exploração direta dos recursos naturais, como agricultura, pesca e mineração.
                  <br />
                  <strong>Setor Secundário:</strong> Refere-se à transformação de matérias-primas em produtos industrializados.
                  <br />
                  <strong>Setor Terciário:</strong> Envolve os serviços e o comércio, fundamentais para a circulação de bens e informações.
                </p>
              </div>
              <div className="side-image-container">
                <img
                  src="https://nova-escola-producao.s3.amazonaws.com/BCv9UEKMEEJuvHbYdPynEtaDgmEZeGZJRbTpVWXTRdCsQ6naNz2TBtFqGKwH/geo7-08un06.jpg"
                  alt="Setores da Economia"
                  className="side-image"
                />
                <div className="image-caption">Divisão clássica dos setores econômicos</div>
              </div>
            </div>
          </section>

          <section className="caracteristicas-section">
            <h2 className="resumo-titulo">Globalização e a Nova Ordem Econômica Mundial</h2>

            <div className="caracteristica-item">
              <h3 className="caracteristica-titulo">Processos de Globalização</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    A globalização intensificou as interações econômicas, políticas e culturais entre os países. Grandes corporações transnacionais expandem sua atuação, enquanto blocos econômicos regionais, como a União Europeia e o Mercosul, promovem integração econômica.
                  </p>
                  <div className="estamentos-grid">
                    <div className="estamento-card">
                      <h4>🌐 Comércio Internacional</h4>
                      <p>Aumento do intercâmbio de mercadorias entre os países.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>🏭 Desconcentração Industrial</h4>
                      <p>Indústrias migram para regiões com menor custo de produção.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>🚢 Fluxos de Capital</h4>
                      <p>Movimentação global de investimentos e especulações financeiras.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>💻 Revolução Tecnológica</h4>
                      <p>Avanços em telecomunicações e transporte impulsionam a globalização.</p>
                    </div>
                  </div>
                </div>
                <div className="side-image-container">
                  <img
                    src="https://static.todamateria.com.br/upload/gl/ob/globalizacao-cke.jpg"
                    alt="Globalização"
                    className="side1-image"
                  />
                </div>
              </div>
            </div>

            <div className="caracteristica-item">
              <h3 className="resumo-titulo">🌆 Desigualdades Regionais</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    A geografia econômica também estuda as desigualdades de desenvolvimento entre países e regiões. O modelo centro-periferia explica como países centrais concentram riqueza e tecnologia, enquanto países periféricos enfrentam dificuldades de desenvolvimento.
                  </p>
                  <div className="economia-features">
                    <div className="feature-item">
                      <span className="feature-icon">💸</span>
                      <div>
                        <strong>Países Desenvolvidos</strong>
                        <p>Alta renda, infraestrutura avançada e indústrias tecnologicamente intensivas.</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🌾</span>
                      <div>
                        <strong>Países em Desenvolvimento</strong>
                        <p>Dependência de exportações primárias e desigualdade socioeconômica.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-image-container">
                  <img
                    src="https://sessao.wordpress.com/wp-content/uploads/2013/09/tuca-vieira.jpg"
                    alt="Centro e periferia"
                    className="side-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="decadencia-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon">💡</span>
              Desafios Contemporâneos da Geografia Econômica
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  A geografia econômica enfrenta desafios como a sustentabilidade ambiental, as crises econômicas globais e as transformações no mundo do trabalho devido à automação e à economia digital.
                </p>
                <div className="declinio-fatores">
                  <div className="fator-item">
                    <span className="fator-numero">1</span>
                    <div>
                      <strong>Mudanças Climáticas</strong>
                      <p>Aquecimento global impacta atividades produtivas e deslocamentos populacionais.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">2</span>
                    <div>
                      <strong>Economia Digital</strong>
                      <p>Novos modelos de negócio baseados em tecnologia e inovação.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">3</span>
                    <div>
                      <strong>Desemprego Estrutural</strong>
                      <p>Automação reduz a necessidade de mão de obra em diversos setores.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">4</span>
                    <div>
                      <strong>Desigualdade Social</strong>
                      <p>Crescimento econômico nem sempre gera distribuição equitativa de renda.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-image-container">
                <img
                  src="https://static.preparaenem.com/conteudo/images/desemprego.jpg"
                  alt="Desafios econômicos"
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
              <li>
                <span onClick={voltar}>Página Inicial</span>
              </li>
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

export default GeografiaEconomica;
