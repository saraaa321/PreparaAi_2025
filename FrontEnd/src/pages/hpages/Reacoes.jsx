import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import "../css/Reacoes.css"; 
import "../Quimica.jsx"; 

const plantaeData = [
  {
    id: "reacao-neutralizacao",
    titulo: "⚗️ Reação de Neutralização",
    imagem: "hhttps://blogdoenem.com.br/wp-content/uploads/2015/05/rea%C3%A7%C3%A3o-de-neutraliza%C3%A7%C3%A3o-fonte-saber-enem-1.jpg",
    aba1Titulo: "O que é?",
    aba1Conteudo:
      "A reação de neutralização ocorre quando um ácido reage com uma base, formando água e um sal. Esse tipo de reação é amplamente utilizado no cotidiano e em processos industriais, como na produção de medicamentos e no tratamento de água.",
    aba2Titulo: "Exemplo Prático",
    aba2Conteudo: [
      "Um exemplo clássico é a reação entre ácido clorídrico (HCl) e hidróxido de sódio (NaOH):",
      "HCl + NaOH → NaCl + H₂O",
      "Aqui, o ácido clorídrico reage com a base hidróxido de sódio para formar cloreto de sódio (sal de cozinha) e água.",
    ],
    aba3Titulo: "Importância",
    aba3Conteudo: [
      "Neutralização é usada no tratamento de efluentes industriais para ajustar o pH.",
      "É essencial na fabricação de antiácidos, que neutralizam o excesso de ácido no estômago.",
      "Também é aplicada na agricultura para corrigir a acidez do solo.",
    ],
  },
  {
    id: "reacao-redox",
    titulo: "🔋 Reação de Oxidação-Redução (Redox)",
    imagem: "https://static.todamateria.com.br/upload/ox/ir/oxirreducao-cke.jpg",
    aba1Titulo: "O que é?",
    aba1Conteudo:
      "As reações redox envolvem a transferência de elétrons entre substâncias. Elas são fundamentais em processos biológicos e industriais.",
    aba2Titulo: "Conceitos Básicos",
    aba2Conteudo: [
      "**Oxidação:** Perda de elétrons por uma substância.",
      "**Redução:** Ganho de elétrons por uma substância.",
      "Esses processos ocorrem simultaneamente, pois os elétrons perdidos por uma substância são ganhos por outra.",
    ],
    aba3Titulo: "Exemplo e Aplicações",
    aba3Conteudo: [
      "Exemplo: Na formação de ferrugem, o ferro (Fe) perde elétrons (oxida) e o oxigênio (O₂) ganha elétrons (reduz).",
      "Reações redox são essenciais na respiração celular, onde a glicose é oxidada para liberar energia.",
      "Também são usadas em baterias, como as de íon-lítio, e na produção de energia elétrica.",
    ],
  },
  {
    id: "reacao-combustao",
    titulo: "🔥 Reação de Combustão",
    imagem: "https://static.manualdaquimica.com/2024/10/exemplo-de-reacao-de-combustao.jpg",
    aba1Titulo: "O que é?",
    aba1Conteudo:
      "A combustão é uma reação química rápida entre uma substância (geralmente um combustível orgânico) e o oxigênio, liberando energia em forma de calor e luz.",
    aba2Titulo: "Exemplo Prático",
    aba2Conteudo: [
      "Um exemplo comum é a combustão do metano (CH₄):",
      "CH₄ + 2O₂ → CO₂ + 2H₂O + energia",
      "Aqui, o metano reage com oxigênio para formar dióxido de carbono, água e liberar energia.",
    ],
    aba3Titulo: "Importância",
    aba3Conteudo: [
      "A combustão é a base do funcionamento de motores de combustão interna, como os de carros e aviões.",
      "É usada para gerar energia elétrica em usinas termelétricas.",
      "Também é essencial em processos industriais, como a queima de combustíveis fósseis para aquecimento.",
    ],
  },
  {
    id: "reacao-precipitacao",
    titulo: "💧 Reação de Precipitação",
    imagem: "https://slideplayer.com.br/slide/3136082/11/images/5/Rea%C3%A7%C3%A3o+de+Precipita%C3%A7%C3%A3o.jpg",
    aba1Titulo: "O que é?",
    aba1Conteudo:
      "A reação de precipitação ocorre quando dois sais em solução aquosa reagem, formando um produto insolúvel chamado precipitado, que se separa da solução.",
    aba2Titulo: "Exemplo Prático",
    aba2Conteudo: [
      "Ao misturar soluções de nitrato de prata (AgNO₃) e cloreto de sódio (NaCl), forma-se cloreto de prata (AgCl), um sólido branco insolúvel:",
      "AgNO₃ + NaCl → AgCl↓ + NaNO₃",
      "O símbolo '↓' indica que o cloreto de prata é o precipitado.",
    ],
    aba3Titulo: "Aplicações",
    aba3Conteudo: [
      "Reações de precipitação são usadas na purificação de água, removendo íons indesejados.",
      "São aplicadas na análise qualitativa para identificar a presença de certos íons em uma solução.",
      "Também são usadas na fabricação de pigmentos e na indústria farmacêutica.",
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