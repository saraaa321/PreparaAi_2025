import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Fundamentos.css";
import "../Fisica.jsx";

const anatomiaData = [
  {
    id: "conceito-fisica",
    titulo: "📘 O que é Física?",
    imagem: "https://estuda.com/wp-content/uploads/2025/01/fisica-enem-1024x592.jpg",
    aba1Titulo: "Conceito",
    aba1Conteudo:
      "A Física é uma ciência natural que estuda os fenômenos da natureza e suas causas. Ela busca compreender o funcionamento do universo por meio de leis e princípios que podem ser expressos matematicamente.",
    aba2Titulo: "Importância",
    aba2Conteudo: [
      "Ajuda a entender o mundo físico ao nosso redor.",
      "Base para a tecnologia moderna e engenharia.",
      "Fundamental para avanços em outras ciências, como Química e Biologia.",
    ],
    aba3Titulo: "Ramos da Física",
    aba3Conteudo: [
      "Mecânica: estuda movimentos e forças.",
      "Termodinâmica: calor, temperatura e energia térmica.",
      "Óptica: luz e fenômenos visuais.",
      "Eletromagnetismo: campos elétricos e magnéticos.",
      "Física Moderna: teoria da relatividade e mecânica quântica.",
    ],
  },
  {
    id: "grandezas-fisicas",
    titulo: "📏 Grandezas Físicas",
    imagem: "https://www.mozescola.com/wp-content/uploads/2025/04/Unidades-de-Cinematica.png",
    aba1Titulo: "Definição",
    aba1Conteudo:
      "Grandezas físicas são propriedades que podem ser medidas, como tempo, massa, temperatura, velocidade. Elas são essenciais para descrever os fenômenos físicos com precisão.",
    aba2Titulo: "Tipos",
    aba2Conteudo: [
      "Escalares: possuem apenas valor (ex: massa, tempo).",
      "Vetoriais: possuem valor, direção e sentido (ex: força, aceleração).",
    ],
    aba3Titulo: "Exemplos",
    aba3Conteudo: [
      "Comprimento (m)",
      "Tempo (s)",
      "Massa (kg)",
      "Temperatura (K)",
      "Velocidade (m/s)",
      "Força (N)",
    ],
  },
  {
    id: "unidades-medida",
    titulo: "⚙️ Unidades de Medida (SI)",
    imagem: "https://clubes.obmep.org.br/blog/wp-content/uploads/2017/12/probleminha.png",
    aba1Titulo: "Sistema Internacional (SI)",
    aba1Conteudo:
      "O Sistema Internacional de Unidades (SI) é o sistema padrão adotado na ciência para garantir uniformidade nas medições ao redor do mundo.",
    aba2Titulo: "Unidades Fundamentais",
    aba2Conteudo: [
      "Metro (m): comprimento",
      "Quilograma (kg): massa",
      "Segundo (s): tempo",
      "Ampère (A): corrente elétrica",
      "Kelvin (K): temperatura",
      "Mol (mol): quantidade de substância",
      "Candela (cd): intensidade luminosa",
    ],
    aba3Titulo: "Unidades Derivadas",
    aba3Conteudo: [
      "Velocidade: m/s",
      "Aceleração: m/s²",
      "Força: N (kg·m/s²)",
      "Energia: J (N·m)",
      "Pressão: Pa (N/m²)",
    ],
  },
  {
    id: "principio-inercia",
    titulo: "🌀 Princípio da Inércia",
    imagem: "https://ccnn2esovillavicar.wordpress.com/wp-content/uploads/2015/01/principio-de-inercia.jpg?w=640",
    aba1Titulo: "Lei da Inércia",
    aba1Conteudo:
      "Todo corpo tende a permanecer em repouso ou em movimento retilíneo uniforme, a menos que uma força externa atue sobre ele. Esse é o primeiro dos três princípios formulados por Isaac Newton.",
    aba2Titulo: "Exemplos no Cotidiano",
    aba2Conteudo: [
      "Um carro freia bruscamente e os passageiros são lançados para frente.",
      "Um livro parado sobre a mesa continua imóvel até alguém empurrá-lo.",
    ],
    aba3Titulo: "Implicações",
    aba3Conteudo: [
      "É necessário aplicar força para alterar o estado de movimento de um corpo.",
      "Está diretamente relacionado à massa: quanto maior a massa, maior a inércia.",
    ],
  },
];


function Anatomia() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_anatomia");
    if (saved) {
      const savedProgresso = JSON.parse(saved);
      setProgresso(savedProgresso);
    }

    const savedGrifos = localStorage.getItem("grifos_anatomia");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    anatomiaData.forEach(item => {
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
    const total = anatomiaData.length;
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
    localStorage.setItem("progresso_anatomia", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_anatomia", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_anatomia", JSON.stringify(novosGrifos));
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
    alert("Página 'Sobre Nós' em construção.");
  };

  const handleLogout = () => {
    alert("Você saiu com sucesso.");
  };

  const handleTabClick = (itemId, tabName) => {
    setActiveTab(prev => ({ ...prev, [itemId]: tabName }));
  };

  const voltar = () => {
    navigate('/Portugues');
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
          <span className="titulo-animado">Explorando os Fundamentos da Física</span>
          <div className="subtitulo-principal">Descubra os principáis fundamentos da Física que caem em vestibular com o Gabarita Mente!</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {anatomiaData.map(item => (
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
          <h2 className="resumo-titulo">Resumo de Física</h2>
          <p className="resumo-descricao">
  A Física é uma ciência natural que estuda os fenômenos do universo, buscando compreender as leis que regem a matéria, a energia e suas interações. Seu nome tem origem no grego <em>physis</em>, que significa “natureza”. A Física utiliza observações, experimentos e modelos matemáticos para descrever o comportamento do mundo físico, sendo fundamental para o avanço da tecnologia e para o entendimento de outras ciências, como Química, Biologia e Astronomia.
</p>
<div className="resumo-topics">
  <div className="resumo-topic">
    <h3>Principais Ramos da Física:</h3>
    <ul>
      <li><strong>Mecânica:</strong> Estuda os movimentos e as forças que os causam.</li>
      <li><strong>Termodinâmica:</strong> Analisa o calor, a temperatura e a energia térmica.</li>
      <li><strong>Óptica:</strong> Estuda os fenômenos da luz e da visão.</li>
      <li><strong>Eletromagnetismo:</strong> Investiga os campos elétricos e magnéticos e suas interações.</li>
      <li><strong>Física Moderna:</strong> Trata de temas como relatividade, quântica e estrutura atômica.</li>
    </ul>
  </div>
  <div className="resumo-topic">
    <h3>Conceitos Fundamentais:</h3>
    <ul>
      <li><strong>Grandezas Físicas:</strong> Propriedades que podem ser medidas, como massa, tempo e temperatura.</li>
      <li><strong>Unidades de Medida (SI):</strong> Sistema Internacional de unidades padronizadas (metro, segundo, quilograma, etc.).</li>
      <li><strong>Leis de Newton:</strong> Três princípios fundamentais sobre o movimento dos corpos.</li>
      <li><strong>Energia:</strong> Capacidade de realizar trabalho, podendo ser cinética, potencial, térmica, etc.</li>
      <li><strong>Força:</strong> Interação que pode alterar o estado de movimento de um corpo.</li>
    </ul>
  </div>
  <div className="resumo-topic">
    <h3>Importância do Estudo:</h3>
    <p>O conhecimento da Física é essencial para o desenvolvimento científico, criação de tecnologias e compreensão dos fenômenos naturais. Além disso, estimula o raciocínio lógico e é base para carreiras em engenharia, física médica, astronomia, entre outras.</p>
  </div>
          </div>
          <div className="dica-vestibular">
            <h3>Dica para o vestibular:</h3>
            <p>Foque nos conceitos básicos como movimento, força, energia e leis de Newton. Compreenda bem os gráficos de velocidade e aceleração, e pratique bastante resolução de problemas numéricos.</p>
          </div>
        </div>

        {anatomiaData.map((item) => (
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
                      )) : <p className={grifos[`${item.id}-aba2`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba2')}>{item.aba2Conteudo}</p>}
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
                      )) : <p className={grifos[`${item.id}-aba3`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba3')}>{item.aba3Conteudo}</p>}
                    </ul>
                  </div>

                  <div className="dica-box">
                    <h4>Atenção!</h4>
                    <p>Este sistema é frequentemente cobrado em provas, especialmente suas funções e os principais órgãos envolvidos.</p>
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

export default Anatomia; 