import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../../assets/logo.png";
import estruturaImg from '../../assets/estrutura.png';
import "../Css/Feudalismo.css"; 

function Feudalismo() {
  const navigate = useNavigate(); 
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progresso_feudalismo");
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
    localStorage.setItem("progresso_feudalismo", "true");
    setConcluido(true);
    showNotification("✓ Conteúdo marcado como concluído!", "success");
  };

  const removerConcluido = () => {
    localStorage.setItem("progresso_feudalismo", "false");
    setConcluido(false);
    showNotification("✗ Conteúdo desmarcado como concluído.", "info");
  };

  const voltar = () => navigate("/Historia");

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
          <span className="titulo-animado">Feudalismo Medieval</span>
          <div className="subtitulo-principal">A estrutura da sociedade medieval europeia</div>
        </h1>

        <div className="resumo-card">
          <section className="resumo-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon">📜</span>
              Resumo Geral
            </h2>
            <div className="resumo-content">
              <p className="resumo-descricao">
                O feudalismo foi a forma de organização social e econômica instituída na Europa Ocidental entre os séculos V a XV, durante a Idade Média. Baseava-se em grandes propriedades de terra, chamadas de feudos, que pertenciam aos senhores feudais, e a mão de obra era servil. Com a queda do Império Romano do Ocidente e a invasão dos povos bárbaros entre os séculos IV e V, a Europa atravessou um período de ruralização, isto é, os moradores da cidade se deslocaram para o campo, fugindo da instabilidade provocada pela movimentação dos bárbaros. A partir do século XV, o feudalismo entrou em crise por conta das mudanças ocorridas na Europa, como os renascimentos cultural, urbano e comercial.
              </p>
              <div className="imagemPrincipal">
                <img
                  src="https://recreacionhistoria.com/wp-content/uploads/2018/12/Feudalismo2-1000x500.jpg"
                  alt="Representação artística do sistema feudal medieval"
                  className="imagemPrincipal"
                />
              </div>
              <div className="highlight-box">
                <p>
                  <strong>Período:</strong> Séculos IX-XV | <strong>Local:</strong> Europa Ocidental | <strong>Sociedade:</strong> Estagnada
                </p>
              </div>
            </div>
          </section>

          <section className="contexto-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon">🏛️</span>
              Contexto Histórico
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  A origem do feudalismo está na crise que provocou a queda do Império Romano do Ocidente. No século III, por conta da crise econômica provocada pela falta de escravizados e das invasões germânicas, os romanos abandonaram as cidades e migraram para o campo com o objetivo de encontrar proteção e trabalho. Dessa forma, surgiam os colonatos, nos quais aqueles que encontravam abrigos no campo trabalhavam para o seu senhor.
                </p>
                <p className="resumo-descricao">
                  O surgimento dos reinos germânicos, no século V, contribuiu para aprofundar o processo de ruralização europeia. Além desse movimento de saída das cidades para o campo, o enfraquecimento do poder político contribuiu para o surgimento do feudalismo.
                </p>
                <h2 className="resumo-titulo">
                  <span className="titulo-icon">🧝‍♂️</span>
                  Vassalagem
                </h2>
                <p className="resumo-descricao">
                  Uma parte importante do feudalismo foram as relações de vassalagem: O termo juramentado que ligava os senhores feudais ao rei. Nesse acordo, um rei cedia terras para o nobre que jurasse fidelidade a ele, permitindo que esse nobre explorasse essas terras e os servos que nelas trabalhassem. Tal fidelidade fazia com que o vassalo tivesse obrigações a cumprir com o rei sempre que fosse convocado, em especial quando se tratava de dever militar.
                </p>
              </div>
              <div className="side-image-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sack_of_Rome_by_the_Visigoths_on_24_August_410_by_JN_Sylvestre_1890.jpg/250px-Sack_of_Rome_by_the_Visigoths_on_24_August_410_by_JN_Sylvestre_1890.jpg"
                  alt="Queda do Império Romano"
                  className="side-image"
                />
                <div className="image-caption">Invasões bárbaras e queda de Roma</div>
              </div>
            </div>
          </section>

          <section className="caracteristicas-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon">⚔️</span>
              Características do Feudalismo
            </h2>

            <div className="caracteristica-item">
              <h3 className="caracteristica-titulo">Sociedade Feudal</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    A sociedade feudal, também conhecida como sociedade de ordens, era caracterizada por uma estrutura hierárquica e rígida, com a terra como principal fonte de riqueza e poder
                  </p>
                  <div className="estamentos-grid">
                    <div className="estamento-card">
                      <h4>👑 Nobreza</h4>
                      <p>Senhores feudais, cavaleiros e proprietários de terras responsáveis pela proteção militar.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>⛪ Clero</h4>
                      <p>Representantes da Igreja Católica, responsáveis pelos cuidados espirituais e educação.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>🌾 Servos</h4>
                      <p>Maioria da população, trabalhadores das terras em troca de proteção e moradia.</p>
                    </div>
                    <div className="estamento-card">
                      <h4>⛓️ Escravos</h4>
                      <p>Eram empregados no serviço doméstico a minoria. Nesta época era comum os cristãos escravizarem muçulmanos e vice-versa..</p>
                    </div>
                  </div>
                </div>
                <div className="side-image-container">
                  <img
                    src={estruturaImg}
                    alt="Pirâmide social feudal"
                    className="side1-image"
                  />
                  <div className="image-caption">Estrutura social feudal</div>
                </div>
              </div>
            </div>

            <div className="caracteristica-item">
              <h3 className="resumo-titulo">Economia Feudal</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    A economia medieval era basicamente <strong>agrária</strong>. Com a expansão árabe no século VII d.C.,
                    o mar Mediterrâneo foi conquistado, forçando os europeus ocidentais a se concentrarem na agricultura.
                  </p>
                  <p className="resumo-descricao">
                    É importante ressalytar que a partir do século XI, houve um crescimento comercial que contribuiu para o surgimento da burguesia e o crescimento urbano.
                  </p>
                  <div className="economia-features">
                    <div className="feature-item">
                      <span className="feature-icon">🌱</span>
                      <div>
                        <strong>Agricultura de Subsistência</strong>
                        <p>Produção voltada principalmente para o consumo local</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🔄</span>
                      <div>
                        <strong>Rotação de Terras</strong>
                        <p>Técnica para manter a fertilidade do solo</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🏰</span>
                      <div>
                        <strong>Feudos Autossuficientes</strong>
                        <p>Unidades econômicas independentes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-image-container">
                  <img
                    src="https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/07/gehistoria-10-31-ed.jpg?quality=70&strip=all"
                    alt="Agricultura medieval"
                    className="side-image"
                  />
                  <div className="image-caption">Trabalho agrícola no período feudal</div>
                </div>
              </div>
            </div>

            <div className="secao-politica-feudal">
              <h3 className="resumo-titulo">Política Feudal</h3>
              <div className="bloco-conteudo-imagem">
                <div className="texto-politica-feudal">
                  <p className="resumo-descricao">
                    No início do período medieval, os reis germânicos tentaram manter a unidade territorial do Império Romano.
                    O poder secular estava intimamente ligado ao poder religioso, conferindo grande influência política à Igreja Católica.
                  </p>
                  <div className="imagem-politica-feudal">
                    <img
                      src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/09/carlos-magno.jpg"
                      alt="Poder político feudal"
                      className="imagemPrincipal"
                    />
                    <div className="legenda-imagem">Descentralização do poder político</div>
                  </div>
                  <p className="resumo-descricao">
                    Com a queda do império carolíngio, a unidade territorial se desfez e o poder se descentralizou entre os
                    senhores feudais. Cada feudo se autogovernava, estabelecendo sua própria política local.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="decadencia-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon"></span>
              Declínio do Feudalismo
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  O declínio do feudalismo se deu a partir do século XI com uma série de transformações significativas
                  que alteraram profundamente a estrutura social, econômica e política da Europa.
                </p>
                <div className="declinio-fatores">
                  <div className="fator-item">
                    <span className="fator-numero">1</span>
                    <div>
                      <strong>Renascimento Comercial</strong>
                      <p>Retomada das atividades comerciais e surgimento de feiras</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">2</span>
                    <div>
                      <strong>Fortalecimento Real</strong>
                      <p>Centralização do poder nas mãos dos monarcas</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">3</span>
                    <div>
                      <strong>Surgimento da Burguesia</strong>
                      <p>Nova classe social ligada ao comércio e às cidades</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">4</span>
                    <div>
                      <strong>Crescimento Urbano</strong>
                      <p>Desenvolvimento das cidades e vida urbana</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-image-container">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5Vxscj2GMrx3pzzq1JdQVkWbdx2dCD27o2-1gxWuihthpJRUlwyqn4rfCQ2RkWBSf6UgllKQ0SMPOgXlDhMg7VTf-tY1eT2kXKHntE-SBQNMrcIWda2me02L3RVHq_DHgmZd4ux-ihds8/s280/Costumes+da+Normandia%252C+Idade+Media.jpg"
                  alt="Transição para a Idade Moderna"
                  className="side-image"
                />
                <div className="image-caption">Transição do feudalismo para os Estados modernos</div>
              </div>
            </div>
          </section>

          <div className="timeline-container">
            <h3 className="timeline-title">Linha do Tempo do Feudalismo</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">Séc. V</div>
                <div className="timeline-content">Queda do Império Romano do Ocidente</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Séc. IX-XV</div>
                <div className="timeline-content">Auge do Sistema Feudal</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Séc. XI</div>
                <div className="timeline-content">Início do declínio - Renascimento comercial</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Séc. XV</div>
                <div className="timeline-content">Formação dos Estados Modernos</div>
              </div>
            </div>
          </div>
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
          <p>&copy; 2025 Gabarita Mente - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Feudalismo;