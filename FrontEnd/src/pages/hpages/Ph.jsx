import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import "../css/Reacoes.css"; 
import "../Quimica.jsx"; 

const plantaeData = [
        {
          id: "ph",
          titulo: "🌡️ O que é pH?",
          imagem: "https://media.istockphoto.com/id/997087002/pt/vetorial/the-science-ph-scale.jpg?s=612x612&w=0&k=20&c=ghn4HEJCHD7rLa8yc_rmY7er0rLa8Z4RqqqG076imFo=",
          aba1Titulo: "Definição e Escala",
          aba1Conteudo:
            "O pH é uma escala que mede a concentração de íons hidrogênio (H⁺) em uma solução, indicando se ela é ácida, neutra ou básica. É uma medida essencial para entender reações químicas, biológicas e processos ambientais.",
          aba2Titulo: "Escala de pH",
          aba2Conteudo: [
            "A escala de pH varia de 0 a 14:",
            "- **pH < 7**: Solução ácida (ex: suco de limão, vinagre).",
            "- **pH = 7**: Solução neutra (ex: água pura).",
            "- **pH > 7**: Solução básica ou alcalina (ex: soda cáustica, amônia).",
            "Quanto menor o pH, maior a acidez da solução. Quanto maior o pH, mais básica ela é.",
          ],
          aba3Titulo: "Importância do pH",
          aba3Conteudo: [
            "O pH é crucial em diversas áreas, como:",
            "- **Biologia**: O pH do sangue humano deve ser mantido entre 7,35 e 7,45 para garantir o funcionamento adequado do organismo.",
            "- **Química**: Determina a reatividade de substâncias em soluções.",
            "- **Meio Ambiente**: O pH da água influencia a vida aquática e a qualidade da água potável.",
            "- **Indústria**: É usado no controle de qualidade de alimentos, cosméticos e medicamentos.",
          ],
        },
        {
          id: "catalisadores",
          titulo: "⚗️ Catalisadores",
          imagem: "https://www.biologianet.com/upload/conteudo/images/2014/12/reacao-com-catalisador.jpg",
          aba1Titulo: "O que são Catalisadores?",
          aba1Conteudo:
            "Catalisadores são substâncias que aumentam a velocidade das reações químicas sem serem consumidos no processo. Eles funcionam diminuindo a energia de ativação necessária para a reação ocorrer.",
          aba2Titulo: "Exemplos de Catalisadores",
          aba2Conteudo: [
            "- **Enzimas**: Catalisadores biológicos que aceleram reações metabólicas em organismos vivos. Exemplo: a amilase, que ajuda na digestão de carboidratos.",
            "- **Catalisadores Industriais**: Substâncias usadas em processos químicos para aumentar a eficiência e reduzir custos. Exemplo: catalisadores usados na produção de amônia pelo processo Haber-Bosch.",
            "- **Catalisadores Automotivos**: Presentes nos conversores catalíticos dos carros, ajudam a reduzir a emissão de gases poluentes.",
          ],
          aba3Titulo: "Importância dos Catalisadores",
          aba3Conteudo: [
            "Os catalisadores são fundamentais em diversas áreas, como:",
            "- **Indústria Química**: Tornam reações mais rápidas e econômicas, reduzindo o consumo de energia.",
            "- **Biologia**: Enzimas catalisam reações essenciais para a vida, como a respiração celular.",
            "- **Meio Ambiente**: Catalisadores ajudam a reduzir a poluição, como nos conversores catalíticos de veículos.",
            "- **Medicina**: Enzimas artificiais são usadas em tratamentos médicos e diagnósticos.",
          ],
        },
      ];

function Revolucoes() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null); 
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_reino_plantae");
    if (saved) {
      const savedProgresso = JSON.parse(saved);
      setProgresso(savedProgresso);
    }

    const savedGrifos = localStorage.getItem("grifos_reino_plantae");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    plantaeData.forEach(item => { 
      initialActiveTabs[item.id] = 'aba1'; 
    });
    setActiveTab(initialActiveTabs);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    atualizarProgressoGeral();
  }, []); 

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = plantaeData.length; 
    const concluidos = Object.values(progresso).filter(value => value === true).length;
    const calculatedProgress = total > 0 ? Math.round((concluidos / total) * 100) : 0;
    setProgressoTotal(calculatedProgress);

  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
          notification.remove();
        }, 500);
      }, 2000);
    }, 100);
  };

  const marcarComoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: true };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_reino_plantae", JSON.stringify(novoProgresso)); 
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_reino_plantae", JSON.stringify(novoProgresso)); 
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  // Ajuste na função grifarTexto para as novas chaves de aba
  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_reino_plantae", JSON.stringify(novosGrifos)); 
  };

  const toggleItemAtivo = (id) => { 
    if (itemAtivo === id) {
      setItemAtivo(null);
    } else {
      setItemAtivo(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleSobreNos = () => {
    navegate ("/SobreNos");
  };

  const handleLogout = () => {
    alert("Você saiu com sucesso.");
  };

  const handleTabClick = (itemId, tabName) => { 
    setActiveTab(prev => ({ ...prev, [itemId]: tabName }));
  };

  const voltar = () => {
    navigate('/');
  };

  return (
    <div className="revolucoes-wrapper"> 
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn" onClick={handleSobreNos}>Sobre Nós</button>
          <button className="btn sair" onClick={handleLogout}>Sair</button>
        </div>
      </header>

      <main className="content">
        <div className="top-content">
        <button className="back-button" onClick={voltar}>
          <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar 
        </button>
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">Explorando o Reino Plantae</span>
          <div className="subtitulo-principal">Descubra o mundo das plantas com o Gabarita Mente!</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {plantaeData.map(item => ( 
              <button
                key={item.id}
                className={`nav-button ${itemAtivo === item.id ? 'active' : ''} ${progresso[item.id] ? 'completed' : ''}`}
                onClick={() => toggleItemAtivo(item.id)} 
              >
                {item.titulo.split(' ')[0]} 
                {progresso[item.id] && <span className="check-icon">✓</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="resumo-card">
          <h2 className="resumo-titulo">Resumo do Reino Plantae</h2>
          <p className="resumo-descricao">
            O Reino Plantae, ou Reino Vegetal, engloba uma vasta diversidade de organismos, desde pequenos musgos até árvores imponentes. São seres eucariontes, pluricelulares e, em sua maioria, autótrofos fotossintetizantes, ou seja, produzem seu próprio alimento utilizando a luz solar. As plantas são cruciais para a vida na Terra, responsáveis pela produção de oxigênio, servindo como base para inúmeras cadeias alimentares e fornecendo recursos essenciais para os seres humanos.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Principais Características:</h3>
              <ul>
                <li><strong>Eucariontes e Pluricelulares:</strong> Células com núcleo definido e organização multicelular.</li>
                <li><strong>Autótrofos Fotossintetizantes:</strong> Produzem seu alimento via fotossíntese, utilizando clorofila.</li>
                <li><strong>Parede Celular:</strong> Composta principalmente por celulose, conferindo rigidez.</li>
                <li><strong>Reserva Energética:</strong> Principalmente amido.</li>
                <li><strong>Alternância de Gerações:</strong> Ciclo de vida com fases gametofítica (n) e esporofítica (2n).</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Grupos Principais:</h3>
              <ul>
                <li><strong>Briófitas:</strong> Plantas avasculares (ex: musgos, hepáticas).</li>
                <li><strong>Pteridófitas:</strong> Plantas vasculares sem sementes (ex: samambaias, avencas).</li>
                <li><strong>Gimnospermas:</strong> Plantas vasculares com sementes nuas (ex: pinheiros, araucárias).</li>
                <li><strong>Angiospermas:</strong> Plantas vasculares com flores e sementes protegidas por frutos (maioria das plantas).</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Importância Vital:</h3>
                <p>As plantas são a base da vida, produzindo oxigênio, alimento, abrigo, medicamentos e regulando o clima. Estudar o Reino Plantae é entender os fundamentos dos ecossistemas e da nossa própria existência.</p>
            </div>
          </div>
          <div className="dica-vestibular">
            <h3>Dica para o vestibular:</h3>
            <p>Para o Reino Plantae, foque nas características distintivas de cada grupo (Briófitas, Pteridófitas, Gimnospermas e Angiospermas), seus ciclos reprodutivos (especialmente a alternância de gerações) e as novidades evolutivas de cada um (vasos condutores, sementes, flores, frutos).</p>
          </div>
        </div>

        {plantaeData.map((item) => ( 
          <section
            key={item.id}
            id={item.id}
            className={`revolucao-box ${itemAtivo === item.id ? 'active' : ''} ${progresso[item.id] ? 'completed' : ''}`}
          >
            <div className="revolucao-header" onClick={() => toggleItemAtivo(item.id)}>
              <h2>{item.titulo}</h2>
              <div className="expand-icon">{itemAtivo === item.id ? '−' : '+'}</div>
            </div>

            {itemAtivo === item.id && (
              <div className="revolucao-content">
                <div className="revolucao-media">
                  <img src={item.imagem} alt={item.titulo} className="revolucao-img" />
                  {progresso[item.id] && <div className="completed-badge">Concluído</div>}
                </div>

                <div className="revolucao-info">
                  <div className="tabs">
                    <button
                      className={`tab-button ${activeTab[item.id] === 'aba1' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'aba1')}
                    >
                      {item.aba1Titulo}
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'aba2' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'aba2')}
                    >
                      {item.aba2Titulo}
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'aba3' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'aba3')}
                    >
                      {item.aba3Titulo}
                    </button>
                  </div>

                  {/* Conteúdo da Aba 1 */}
                  <div className={`tab-content ${activeTab[item.id] === 'aba1' ? 'active' : ''}`}>
                    <h3>{item.aba1Titulo}</h3>
                    <p
                      className={`revolucao-descricao ${grifos[`${item.id}-aba1`] ? 'grifado' : ''}`}
                      onClick={() => grifarTexto(item.id, 'aba1')}
                    >
                      {item.aba1Conteudo}
                    </p>
                  </div>

                  <div className={`tab-content ${activeTab[item.id] === 'aba2' ? 'active' : ''}`}>
                    <h3>{item.aba2Titulo}</h3>
                    <ul className="revolucao-lista">
                      {Array.isArray(item.aba2Conteudo) ? item.aba2Conteudo.map((conteudoItem, index) => (
                        <li
                          key={index}
                          className={grifos[`${item.id}-aba2-${index}`] ? 'grifado' : ''}
                          onClick={() => grifarTexto(item.id, 'aba2', index)}
                        >
                          {conteudoItem}
                        </li>
                      )) : <p className={grifos[`${item.id}-aba2`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba2')}>{item.aba2Conteudo}</p> }
                    </ul>
                  </div>

                  <div className={`tab-content ${activeTab[item.id] === 'aba3' ? 'active' : ''}`}>
                    <h3>{item.aba3Titulo}</h3>
                     <ul className="revolucao-lista">
                      {Array.isArray(item.aba3Conteudo) ? item.aba3Conteudo.map((conteudoItem, index) => (
                        <li
                          key={index}
                          className={grifos[`${item.id}-aba3-${index}`] ? 'grifado' : ''}
                          onClick={() => grifarTexto(item.id, 'aba3', index)}
                        >
                          {conteudoItem}
                        </li>
                      )) : <p className={grifos[`${item.id}-aba3`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba3')}>{item.aba3Conteudo}</p> }
                    </ul>
                  </div>
                  
                  <div className="dica-box">
                    <h4>Atenção!</h4>
                    <p>Este grupo de plantas é frequentemente cobrado em provas, especialmente suas características distintivas e novidades evolutivas.</p>
                  </div>

                  <div className="revolucao-actions">
                    <button
                      className={`btn-concluir ${progresso[item.id] ? 'concluido' : ''}`}
                      onClick={() => marcarComoConcluido(item.id)}
                      disabled={progresso[item.id]}
                    >
                      {progresso[item.id] ? "Conteúdo Concluído" : "Marcar como Concluído"}
                    </button>
                    {progresso[item.id] && (
                      <button
                        className="btn-remover-concluido"
                        onClick={() => marcarComoNaoConcluido(item.id)}
                      >Remover Conclusão
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-arrow-up"></i>
        </button>
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

export default Revolucoes; 