import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Geologia.css";
import "../Geografia.jsx";

const geologiaData = [
  {
    id: "minerais",
    titulo: "💎 Minerais",
    imagem: "https://static.todamateria.com.br/upload/mi/ne/minerais-og.jpg",
    aba1Titulo: "O que são Minerais?",
    aba1Conteudo:
      "Minerais são substâncias sólidas, naturais, inorgânicas, com composição química definida e estrutura cristalina ordenada. São formados por processos geológicos e constituem os blocos fundamentais das rochas.",
    aba2Titulo: "Principais Propriedades",
    aba2Conteudo: [
      "Dureza: resistência ao risco (Escala de Mohs).",
      "Clivagem: tendência a se quebrar em superfícies planas.",
      "Fratura: padrão irregular de quebra.",
      "Brilho: forma como reflete a luz (vítreo, metálico, etc).",
      "Cor e Traço: aparência externa e cor do pó mineral.",
    ],
    aba3Titulo: "Exemplos Comuns",
    aba3Conteudo: [
      "Quartzo: dureza elevada, usado em relógios e vidro.",
      "Feldspato: abundante, compõe muitas rochas.",
      "Mica: clivagem perfeita em lâminas finas.",
      "Calcita: reage com ácido, principal componente do calcário.",
    ],
  },
  {
    id: "rochas",
    titulo: "🪨 Rochas",
    imagem: "https://static.todamateria.com.br/upload/ro/ch/rochas-sedimentares-og.jpg",
    aba1Titulo: "Classificação das Rochas",
    aba1Conteudo:
      "As rochas são agregados naturais de minerais. Podem ser classificadas em três grandes grupos conforme sua origem: ígneas, sedimentares e metamórficas.",
    aba2Titulo: "Tipos de Rochas",
    aba2Conteudo: [
      "Ígneas: formadas pelo resfriamento do magma (ex.: granito, basalto).",
      "Sedimentares: formadas pela compactação de sedimentos (ex.: arenito, calcário).",
      "Metamórficas: formadas pela transformação de rochas preexistentes devido a pressão e temperatura (ex.: mármore, gnaisse).",
    ],
    aba3Titulo: "Importância",
    aba3Conteudo: [
      "Fonte de recursos naturais (minérios, combustíveis fósseis).",
      "Registro da história geológica da Terra.",
      "Base para o relevo e solos.",
    ],
  },
  {
    id: "tectonica",
    titulo: "🌍 Tectônica de Placas",
    imagem: "https://media.istockphoto.com/id/1672277124/pt/vetorial/map-of-the-principal-tectonic-plates-16-major-pieces-of-the-earth.jpg?s=612x612&w=0&k=20&c=6XE8eFOrq2KaCZYq39l_9lbJBdc66bOLvlBkbzf9ylA=",
    aba1Titulo: "O que é?",
    aba1Conteudo:
      "A Tectônica de Placas é a teoria que explica a movimentação das grandes placas que formam a litosfera terrestre, resultando em fenômenos como terremotos, vulcões e formação de montanhas.",
    aba2Titulo: "Principais Movimentos",
    aba2Conteudo: [
      "Divergente: placas se afastam, formando dorsais oceânicas.",
      "Convergente: placas colidem, gerando montanhas ou zonas de subducção.",
      "Transformante: placas deslizam lateralmente uma em relação à outra, causando falhas (ex.: Falha de San Andreas).",
    ],
    aba3Titulo: "Consequências",
    aba3Conteudo: [
      "Formação de cadeias montanhosas.",
      "Atividade vulcânica e sísmica.",
      "Deriva continental.",
    ],
  },
  {
    id: "erosao",
    titulo: "💨 Erosão e Intemperismo",
    imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/7705946792e694cbba6e02fd916f9f02.jpg",
    aba1Titulo: "Diferenças Fundamentais",
    aba1Conteudo:
      "Intemperismo refere-se à decomposição e alteração das rochas in situ, enquanto erosão envolve o transporte e a remoção dos materiais alterados por agentes externos.",
    aba2Titulo: "Agentes de Intemperismo",
    aba2Conteudo: [
      "Físico: quebra de rochas sem alteração química (variação térmica, gelo).",
      "Químico: alteração da composição das rochas (oxidação, hidrólise).",
      "Biológico: ação de organismos (raízes de plantas, líquens).",
    ],
    aba3Titulo: "Agentes de Erosão",
    aba3Conteudo: [
      "Água: rios, chuvas, mares.",
      "Vento: importante em áreas áridas.",
      "Gelo: geleiras transportam grandes volumes de sedimentos.",
      "Gravidade: movimentos de massa como deslizamentos.",
    ],
  },
];

function Geologia() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_geologia");
    if (saved) {
      setProgresso(JSON.parse(saved));
    }

    const savedGrifos = localStorage.getItem("grifos_geologia");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    geologiaData.forEach(item => {
      initialActiveTabs[item.id] = 'aba1';
    });
    setActiveTab(initialActiveTabs);

    atualizarProgressoGeral();
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = geologiaData.length;
    const concluidos = Object.values(progresso).filter(v => v).length;
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
    localStorage.setItem("progresso_geologia", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_geologia", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado.', 'info');
  };

  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_geologia", JSON.stringify(novosGrifos));
  };

  const toggleItemAtivo = (id) => {
    setItemAtivo(itemAtivo === id ? null : id);
  };

  const handleSobreNos = () => navegate ("/SobreNos");
  const handleLogout = () => alert("Você saiu com sucesso.");
  const handleTabClick = (itemId, tabName) => setActiveTab(prev => ({ ...prev, [itemId]: tabName }));
  const voltar = () => navigate('/Geografia');

  return (
    <div className="geologia-wrapper">
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
          <span className="titulo-animado">Geologia</span>
          <div className="subtitulo-principal">Conheça os principais conceitos geológicos com o Gabarita Mente!</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {geologiaData.map(item => (
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

        {geologiaData.map((item) => (
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
                    {['aba1', 'aba2', 'aba3'].map(tab => (
                      <button
                        key={tab}
                        className={`tab-button ${activeTab[item.id] === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(item.id, tab)}
                      >
                        {item[`${tab}Titulo`]}
                      </button>
                    ))}
                  </div>

                  {['aba1', 'aba2', 'aba3'].map(tab => (
                    <div key={tab} className={`tab-content ${activeTab[item.id] === tab ? 'active' : ''}`}>
                      <h3>{item[`${tab}Titulo`]}</h3>
                      {Array.isArray(item[`${tab}Conteudo`]) ? (
                        <ul className="revolucao-lista">
                          {item[`${tab}Conteudo`].map((conteudoItem, index) => (
                            <li
                              key={index}
                              className={grifos[`${item.id}-${tab}-${index}`] ? 'grifado' : ''}
                              onClick={() => grifarTexto(item.id, tab, index)}
                            >
                              {conteudoItem}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p
                          className={`revolucao-descricao ${grifos[`${item.id}-${tab}`] ? 'grifado' : ''}`}
                          onClick={() => grifarTexto(item.id, tab)}
                        >
                          {item[`${tab}Conteudo`]}
                        </p>
                      )}
                    </div>
                  ))}

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
                      >
                        Remover Conclusão
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}

export default Geologia;
