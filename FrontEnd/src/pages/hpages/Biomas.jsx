import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Css/Biomas.css";
import "../Geografia.jsx";

const biomasData = [
  {
    id: "biomas-brasileiros",
    titulo: "🌿 Biomas Brasileiros",
    imagem: "https://static.todamateria.com.br/upload/bi/om/biomasbrasileiros-cke.jpg",
    aba1Titulo: "Definição de Bioma",
    aba1Conteudo:
      "Bioma é uma grande unidade de ocupação territorial, caracterizada por clima, vegetação, fauna e outros aspectos naturais semelhantes. No Brasil, os principais biomas são: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal.",
    aba2Titulo: "Principais Biomas",
    aba2Conteudo: [
      "Amazônia: maior floresta tropical do mundo, rica em biodiversidade.",
      "Cerrado: savana brasileira com vegetação adaptada ao fogo.",
      "Caatinga: vegetação xerófila adaptada ao clima semiárido.",
      "Mata Atlântica: floresta tropical altamente devastada.",
      "Pampa: vegetação campestre predominante no sul do país.",
      "Pantanal: maior área alagada do mundo, com rica fauna.",
    ],
    aba3Titulo: "Importância dos Biomas",
    aba3Conteudo: [
      "Manutenção da biodiversidade.",
      "Regulação do clima e dos ciclos hidrológicos.",
      "Fonte de recursos naturais e serviços ecossistêmicos.",
      "Cultura e modos de vida tradicionais associados.",
    ],
  },
  {
    id: "dominios-morfoclimaticos",
    titulo: "🌎 Domínios Morfoclimáticos",
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/11/mapa-mostrando-os-seis-dominios-morfoclimaticos-do-brasil.png",
    aba1Titulo: "Conceito",
    aba1Conteudo:
      "Domínios morfoclimáticos são grandes espaços geográficos brasileiros caracterizados pela interação entre relevo, clima, vegetação e solos. Esse conceito foi desenvolvido por Aziz Ab'Saber.",
    aba2Titulo: "Principais Domínios",
    aba2Conteudo: [
      "Domínio Amazônico: floresta equatorial úmida e planícies fluviais.",
      "Domínio do Cerrado: clima tropical e solos ácidos.",
      "Domínio dos Mares de Morros: relevo ondulado e Mata Atlântica.",
      "Domínio das Caatingas: clima semiárido e vegetação xerófita.",
      "Domínio das Araucárias: relevo planáltico e clima subtropical.",
      "Domínio das Pradarias: campos do sul com clima subtropical.",
    ],
    aba3Titulo: "Relevância do Conceito",
    aba3Conteudo: [
      "Compreender as interações entre elementos naturais.",
      "Auxiliar na gestão territorial e ambiental.",
      "Base para estudos de impacto ambiental e conservação.",
    ],
  },
  {
    id: "impactos-ambientais",
    titulo: "⚠️ Impactos Ambientais nos Biomas",
    imagem: "https://s4.static.brasilescola.uol.com.br/be/2020/09/queimadas.jpg",
    aba1Titulo: "Ameaças",
    aba1Conteudo:
      "Os biomas brasileiros sofrem com diversas ameaças como desmatamento, queimadas, expansão agropecuária, mineração e urbanização desordenada.",
    aba2Titulo: "Consequências",
    aba2Conteudo: [
      "Perda de biodiversidade.",
      "Desequilíbrios nos ciclos naturais.",
      "Mudanças climáticas regionais e globais.",
      "Impactos nas populações tradicionais.",
    ],
    aba3Titulo: "Medidas de Preservação",
    aba3Conteudo: [
      "Criação e manutenção de Unidades de Conservação.",
      "Educação ambiental.",
      "Adoção de práticas agroecológicas.",
      "Fortalecimento das políticas públicas de proteção ambiental.",
    ],
  },
  {
    id: "curiosidades-biomas",
    titulo: "🌟 Curiosidades sobre os Biomas",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgO_Elz0ZWBVhBas82EWbXtzbsdEli6zT2Dg&s",
    aba1Titulo: "Curiosidades Notáveis",
    aba1Conteudo:
      "O Brasil é o país com a maior biodiversidade do planeta, abrigando cerca de 20% das espécies de flora e fauna do mundo. A Floresta Amazônica, sozinha, possui mais de 40 mil espécies de plantas.",
    aba2Titulo: "Biomas em Extinção",
    aba2Conteudo: [
      "A Mata Atlântica perdeu cerca de 90% de sua cobertura original.",
      "O Cerrado perde anualmente cerca de 1% de sua vegetação nativa.",
    ],
    aba3Titulo: "Ações Inspiradoras",
    aba3Conteudo: [
      "Projetos de reflorestamento na Mata Atlântica.",
      "Iniciativas comunitárias de proteção ao Pantanal.",
      "Campanhas de conscientização para preservar a Amazônia.",
    ],
  }
];

function Biomas() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_biomas");
    if (saved) {
      setProgresso(JSON.parse(saved));
    }
    const savedGrifos = localStorage.getItem("grifos_biomas");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    biomasData.forEach(item => {
      initialActiveTabs[item.id] = 'aba1';
    });
    setActiveTab(initialActiveTabs);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    atualizarProgressoGeral();
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = biomasData.length;
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
    localStorage.setItem("progresso_biomas", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_biomas", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_biomas", JSON.stringify(novosGrifos));
  };

  const toggleItemAtivo = (id) => {
    setItemAtivo(itemAtivo === id ? null : id);
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
    navigate('/Geografia');
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
          <span className="titulo-animado">Biomas e Domínios Morfoclimáticos</span>
          <div className="subtitulo-principal">Explore a diversidade ambiental do Brasil com o Gabarita Mente!</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {biomasData.map(item => (
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

        {biomasData.map((item) => (
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

export default Biomas;
