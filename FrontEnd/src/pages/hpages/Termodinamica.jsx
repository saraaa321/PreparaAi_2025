
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Termodinamica.css";

function Termodinamica() {
  const navigate = useNavigate();
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progresso_termodinamica");
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
    localStorage.setItem("progresso_termodinamica", "true");
    setConcluido(true);
    showNotification("✓ Conteúdo marcado como concluído!", "success");
  };

  const removerConcluido = () => {
    localStorage.setItem("progresso_termodinamica", "false");
    setConcluido(false);
    showNotification("✗ Conteúdo desmarcado como concluído.", "info");
  };

  const voltar = () => navigate("/Fisica");

  return (
    <div className="feudalismo-wrapper"> 
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn" onClick={() => navegate ("/SobreNos}>Sobre Nós</button>
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
          <span className="titulo-animado">Termodinâmica</span>
          <div className="subtitulo-principal">O estudo da energia, calor e trabalho e suas transformações</div>
        </h1>

        <div className="resumo-card">
          <section className="resumo-section">
            <h2 className="resumo-titulo">
              Resumo Geral da Termodinâmica
            </h2>
            <div className="resumo-content">
              <p className="resumo-descricao">
                A Termodinâmica é a parte da física que estuda as relações entre calor, trabalho e outras formas de energia. Ela descreve como a energia é transferida e transformada em sistemas macroscópicos, sendo fundamental para entender desde o funcionamento de motores até processos biológicos. Suas leis fundamentais estabelecem os limites para a eficiência de máquinas térmicas e a direção de processos naturais.
              </p>
              <div className="imagemPrincipal">
                <img
                  src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/10/maquina-termica-imagem-principal.jpg" 
                  alt="Máquina térmica"
                  className="imagemPrincipal"
                />
              </div>
            </div>
          </section>

          <section className="contexto-section"> 
            <h2 className="resumo-titulo">
              <span className="titulo-icon">🌡️</span> 
              Conceitos Fundamentais e Leis da Termodinâmica
            </h2>
            <div className="content-with-image-column"> 
              <div className="text-content">
                <p className="resumo-descricao">
                  Para compreender a termodinâmica, é essencial conhecer alguns conceitos-chave como sistema termodinâmico (parte do universo em estudo), vizinhança (tudo ao redor do sistema), estado termodinâmico (descrição do sistema por propriedades como pressão, volume e temperatura) e equilíbrio termodinâmico (estado em que as propriedades do sistema não mudam com o tempo).
                </p>
                <h2 className="resumo-titulo">
                   
                  As Leis da Termodinâmica
                </h2>
                <p className="resumo-descricao">
                  <strong>Lei Zero da Termodinâmica:</strong> Se dois sistemas estão em equilíbrio térmico com um terceiro sistema, então eles estão em equilíbrio térmico entre si. Essa lei define a temperatura. <br/>
                  <strong>Primeira Lei da Termodinâmica (Delta U = Q - W ):</strong> O calor fornecido a um sistema é usado para aumentar sua energia interna e para realizar trabalho. É o princípio da conservação da energia. <br/>
                  <strong>Segunda Lei da Termodinâmica:</strong> Nenhuma máquina térmica operando em ciclos pode converter integralmente calor em trabalho (implica na irreversibilidade de processos e no aumento da entropia do universo). O calor sempre flui espontaneamente de um corpo mais quente para um mais frio. <br/>
                  <strong>Terceira Lei da Termodinâmica:</strong> É impossível atingir o zero absoluto (0 Kelvin ou -273.15 °C) em um número finito de passos. A entropia de um cristal perfeito no zero absoluto é zero.
                </p>
              </div>
              <div className="side-image-container-column"> 
                <img
                  src="https://files.passeidireto.com/55b27279-85dd-4f26-941f-049b72cbdf83/bg1.png" 
                  alt="Leis da Termodinâmica"
                  className="side-image"
                />
                <div className="image-caption">Representação das Leis da Termodinâmica - Coladaweb</div>
              </div>
            </div>
          </section>

          <section className="caracteristicas-section">
            <h2 className="resumo-titulo">
              Transformações Gasosas e Máquinas Térmicas
            </h2>

            <div className="caracteristica-item">
              <h3 className="caracteristica-titulo">Tipos de Transformações Termodinâmicas</h3>
              <div className="content-with-image-column"> 
                <div className="text-content">
                  <p className="resumo-descricao">
                    Em sistemas gasosos, as transformações podem ocorrer mantendo uma das variáveis termodinâmicas constante:
                  </p>
                  <div className="estamentos-grid"> 
                    <div className="estamento-card">
                      <h4>💨 Transformação Isobárica</h4>
                      <p>Ocorre a pressão constante. O volume e a temperatura são diretamente proporcionais (Lei de Charles e Gay-Lussac).</p>
                    </div>
                    <div className="estamento-card">
                      <h4>📦 Transformação Isocórica/Isovolumétrica</h4>
                      <p>Ocorre a volume constante. A pressão e a temperatura são diretamente proporcionais (Lei de Gay-Lussac).</p>
                    </div>
                    <div className="estamento-card">
                      <h4>❄️ Transformação Isotérmica</h4>
                      <p>Ocorre a temperatura constante. A pressão e o volume são inversamente proporcionais (Lei de Boyle-Mariotte).</p>
                    </div>
                    <div className="estamento-card">
                      <h4>🔥 Transformação Adiabática</h4>
                      <p>Não há troca de calor com o ambiente. O trabalho é realizado à custa da energia interna do sistema.</p>
                    </div>
                  </div>
                </div>
                <div className="side-image-container-column"> 
                  <img
                    src="https://www.if.ufrgs.br/~leila/isobarica1.gif"
                    alt="Transformações Gasosas"
                    className="side1-image" 
                  />
                </div>
              </div>
            </div>

            <div className="caracteristica-item">
              <h3 className="resumo-titulo">⚙️ Máquinas Térmicas e Refrigeradores</h3>
              <div className="content-with-image-column"> 
                <div className="text-content">
                  <p className="resumo-descricao">
                    Máquinas térmicas são dispositivos que convertem energia térmica em trabalho mecânico, como motores de carros e usinas termelétricas. Refrigeradores e bombas de calor são máquinas que transferem calor de uma fonte fria para uma fonte quente.
                  </p>
                  <div className="economia-features"> 
                    <div className="feature-item">
                      <span className="feature-icon">🚗</span>
                      <div>
                        <strong>Ciclo de Carnot</strong>
                        <p>Ciclo teórico ideal de máxima eficiência para uma máquina térmica ou refrigerador.</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🧊</span>
                      <div>
                        <strong>Coeficiente de Desempenho (COP)</strong>
                        <p>Mede a eficiência de refrigeradores e bombas de calor.</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">📈</span>
                      <div>
                        <strong>Eficiência Térmica (η)</strong>
                        <p>Relação entre o trabalho realizado e o calor absorvido por uma máquina térmica.</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">♨️</span>
                      <div>
                        <strong>Fontes Quente e Fria</strong>
                        <p>Máquinas térmicas operam entre um reservatório quente (fonte de calor) e um reservatório frio (sumidouro de calor).</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-image-container-column"> 
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReZ1ZIiiEt6jUH63oHmSQftPj4uEZfjO3GA&s"
                    alt="Motor de carro"
                    className="side-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="decadencia-section"> 
            <h2 className="resumo-titulo">
              <span className="titulo-icon">🔬</span> 
              Aplicações e Importância da Termodinâmica
            </h2>
            <div className="content-with-image-column"> 
              <div className="text-content">
                <p className="resumo-descricao">
                  A termodinâmica tem aplicações em diversas áreas da ciência e engenharia, sendo fundamental para o desenvolvimento de tecnologias e a compreensão de fenômenos naturais.
                </p>
                <div className="declinio-fatores"> 
                  <div className="fator-item">
                    <span className="fator-numero">1</span>
                    <div>
                      <strong>Engenharia e Tecnologia</strong>
                      <p>Design de motores, refrigeradores, sistemas de aquecimento e usinas de energia.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">2</span>
                    <div>
                      <strong>Química e Biologia</strong>
                      <p>Estudo de reações químicas, processos metabólicos e fluxo de energia em sistemas vivos.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">3</span>
                    <div>
                      <strong>Climatologia e Meteorologia</strong>
                      <p>Compreensão dos fenômenos atmosféricos, correntes oceânicas e balanço energético da Terra.</p>
                    </div>
                  </div>
                  <div className="fator-item">
                    <span className="fator-numero">4</span>
                    <div>
                      <strong>Cosmologia</strong>
                      <p>Estudo da evolução do universo e o conceito de "morte térmica" do universo (Big Freeze).</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-image-container-column"> 
                <img
                  src="https://areademulher.r7.com/wp-content/uploads/2020/11/termodinamica-como-a-fisica-esta-presente-no-seu-cotidiano-3.jpg" 
                  alt="Aplicações da Termodinâmica"
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

export default Termodinamica;