import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/ReinoPlantae.css";

const producaoData = [
  {
    id: "conceito-producao-textual",
    titulo: "📝 O que é Produção Textual?",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxhw8572e4pt3pw64c8rz0a2%2F1749725573_img_0.webp?st=2025-06-12T09%3A23%3A14Z&se=2025-06-18T10%3A23%3A14Z&sks=b&skt=2025-06-12T09%3A23%3A14Z&ske=2025-06-18T10%3A23%3A14Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=c549KJ2JWWwsQ4eVIFYPQwJTQ1MvPnNEcK1QJT5EM9M%3D&az=oaivgprodscus",
    aba1Titulo: "Definição",
    aba1Conteudo:
      "Produção textual é o processo de criação de textos escritos, considerando a intenção comunicativa, o público-alvo, o gênero textual e o contexto de produção. Envolve planejar, redigir, revisar e reescrever, buscando clareza, coesão, coerência e adequação à proposta. A produção textual pode ser literária, jornalística, acadêmica, publicitária, entre outras.",
    aba2Titulo: "Etapas da Produção",
    aba2Conteudo: [
      "Planejamento: Definir o objetivo do texto, o público e o gênero textual.",
      "Organização das ideias: Fazer um roteiro, mapa mental ou tópicos.",
      "Redação: Escrever o texto, desenvolvendo introdução, desenvolvimento e conclusão.",
      "Revisão: Corrigir erros gramaticais, de pontuação, ortografia e aprimorar a clareza.",
      "Reescrita: Reorganizar trechos, melhorar argumentos e ajustar a linguagem.",
    ],
    aba3Titulo: "Dicas Gerais",
    aba3Conteudo: [
      "Leia atentamente a proposta antes de começar.",
      "Evite clichês e repetições desnecessárias.",
      "Use conectivos para garantir coesão entre as ideias.",
      "Adapte o vocabulário ao gênero e ao público.",
      "Revise sempre antes de entregar o texto final.",
    ],
  },
  {
    id: "tipos-textuais",
    titulo: "📚 Tipos Textuais",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxhwgxmcf96tz7k5rq9p7m7e%2F1749725890_img_0.webp?st=2025-06-12T09%3A21%3A59Z&se=2025-06-18T10%3A21%3A59Z&sks=b&skt=2025-06-12T09%3A21%3A59Z&ske=2025-06-18T10%3A21%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Xvtxc5AMmrrFd%2Bh9QDg4hMGK%2BR%2Brnwv5R5nWVU7%2BqI8%3D&az=oaivgprodscus",
    aba1Titulo: "Tipos Principais",
    aba1Conteudo:
      "Os tipos textuais são categorias baseadas na estrutura e na finalidade do texto. Os principais são: narrativo, descritivo, dissertativo, injuntivo e expositivo. Cada tipo exige uma abordagem diferente na produção.",
    aba2Titulo: "Características",
    aba2Conteudo: [
      "Narrativo: Conta uma história, com personagens, tempo, espaço e enredo.",
      "Descritivo: Apresenta características de pessoas, lugares, objetos ou situações.",
      "Dissertativo: Expõe ideias, opiniões e argumentos sobre determinado tema.",
      "Injuntivo: Instrui, orienta ou aconselha o leitor a realizar uma ação.",
      "Expositivo: Explica ou informa sobre determinado assunto de forma clara e objetiva.",
    ],
    aba3Titulo: "Como Identificar",
    aba3Conteudo: [
      "Observe a estrutura: presença de personagens, tempo, espaço (narrativo); detalhes e adjetivos (descritivo); defesa de opinião (dissertativo).",
      "Analise a finalidade: informar, convencer, entreter, instruir.",
      "Verifique o uso de verbos, conectivos e a progressão das ideias.",
    ],
  },
  {
    id: "redacao-enem",
    titulo: "🎯 Redação do ENEM",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxhwvphgezbry9d18wpwrs79%2F1749726216_img_2.webp?st=2025-06-12T09%3A24%3A05Z&se=2025-06-18T10%3A24%3A05Z&sks=b&skt=2025-06-12T09%3A24%3A05Z&ske=2025-06-18T10%3A24%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=NDGFO56XXzzccA8o6SYIh2BiyK40cLErMe5ZNtqdArY%3D&az=oaivgprodscus",
    aba1Titulo: "Estrutura Exigida",
    aba1Conteudo:
      "A redação do ENEM exige um texto dissertativo-argumentativo, com introdução, desenvolvimento e conclusão. O tema é de ordem social, científica, cultural ou política, e o candidato deve apresentar uma proposta de intervenção para o problema abordado.",
    aba2Titulo: "Competências Avaliadas",
    aba2Conteudo: [
      "Domínio da norma padrão da língua escrita.",
      "Compreensão da proposta e aplicação dos conceitos das áreas de conhecimento.",
      "Seleção, organização e interpretação de informações, fatos, opiniões e argumentos.",
      "Demonstração de conhecimento dos mecanismos linguísticos necessários à construção da argumentação.",
      "Elaboração de proposta de intervenção para o problema abordado, respeitando os direitos humanos.",
    ],
    aba3Titulo: "Dicas para Redação Nota 1000",
    aba3Conteudo: [
      "Leia e interprete atentamente a coletânea de textos motivadores.",
      "Planeje sua redação antes de começar a escrever.",
      "Apresente uma tese clara na introdução.",
      "Desenvolva argumentos consistentes e bem fundamentados.",
      "Conclua com uma proposta de intervenção detalhada, viável e respeitosa.",
      "Revise o texto, corrigindo erros gramaticais e de estrutura.",
    ],
  },
  {
    id: "coesao-coerencia",
    titulo: "🔗 Coesão e Coerência",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxhx1h5rez3t6xga0yrmjxkr%2F1749726417_img_0.webp?st=2025-06-12T09%3A22%3A05Z&se=2025-06-18T10%3A22%3A05Z&sks=b&skt=2025-06-12T09%3A22%3A05Z&ske=2025-06-18T10%3A22%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=%2Bs%2F1rAVcZEOgP%2F9bE2UTKMhcQw6A%2FmMrfKzh15x5z0o%3D&az=oaivgprodscus",
    aba1Titulo: "O que é Coesão?",
    aba1Conteudo:
      "Coesão textual é a ligação entre as partes do texto, garantindo que as frases e parágrafos estejam conectados de forma lógica e fluida. É obtida por meio de conectivos, pronomes, elipses e outros mecanismos linguísticos.",
    aba2Titulo: "O que é Coerência?",
    aba2Conteudo: [
      "Coerência é a relação lógica e semântica entre as ideias do texto.",
      "Um texto coerente apresenta sentido global, sem contradições ou informações desconexas.",
      "A coerência depende da clareza, da progressão temática e da relevância das informações.",
    ],
    aba3Titulo: "Como Garantir",
    aba3Conteudo: [
      "Use conectivos adequados para ligar frases e parágrafos.",
      "Evite mudanças bruscas de assunto.",
      "Mantenha o foco no tema proposto.",
      "Revise o texto para eliminar ambiguidades e repetições.",
    ],
  },
  {
    id: "revisao-e-reescrita",
    titulo: "🔄 Revisão e Reescrita",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxhxcyxjezysxn8s86g8a0zh%2F1749726779_img_1.webp?st=2025-06-12T10%3A07%3A48Z&se=2025-06-18T11%3A07%3A48Z&sks=b&skt=2025-06-12T10%3A07%3A48Z&ske=2025-06-18T11%3A07%3A48Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=XHZhMCesTVVTMZ4pXLLJZL1GjNdjmQmhA4jQNuH%2FqPA%3D&az=oaivgprodscus",
    aba1Titulo: "Importância da Revisão",
    aba1Conteudo:
      "Revisar e reescrever são etapas fundamentais da produção textual. A revisão permite identificar e corrigir erros gramaticais, de pontuação, ortografia, além de aprimorar a clareza, a coesão e a coerência do texto.",
    aba2Titulo: "O que Observar",
    aba2Conteudo: [
      "Ortografia, acentuação e pontuação.",
      "Concordância verbal e nominal.",
      "Repetições e redundâncias.",
      "Clareza e objetividade das ideias.",
      "Adequação ao gênero e à proposta.",
    ],
    aba3Titulo: "Dicas de Reescrita",
    aba3Conteudo: [
      "Leia o texto em voz alta para perceber falhas de coesão.",
      "Peça para outra pessoa ler e dar sugestões.",
      "Reescreva trechos confusos ou pouco claros.",
      "Aprimore argumentos e exemplos.",
      "Não tenha medo de cortar ou reorganizar partes do texto.",
    ],
  },
];

function ProducaoTextual() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_producao_textual");
    if (saved) {
      setProgresso(JSON.parse(saved));
    }
    const savedGrifos = localStorage.getItem("grifos_producao_textual");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }
    const initialActiveTabs = {};
    producaoData.forEach(item => {
      initialActiveTabs[item.id] = 'aba1';
    });
    setActiveTab(initialActiveTabs);

    atualizarProgressoGeral();
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = producaoData.length;
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
    localStorage.setItem("progresso_producao_textual", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_producao_textual", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_producao_textual", JSON.stringify(novosGrifos));
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

  // Botão voltar agora sempre retorna para o Home
  const voltar = () => {
    navigate("/Portugues");
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
          <span className="titulo-animado">Produção Textual: Teoria e Prática</span>
          <div className="subtitulo-principal">
            Domine a arte de escrever textos claros, argumentativos e adequados a cada situação!
          </div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {producaoData.map(item => (
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
          <h2 className="resumo-titulo">Resumo Completo de Produção Textual</h2>
          <p className="resumo-descricao">
            Produção textual é a habilidade de planejar, escrever, revisar e reescrever textos de diferentes gêneros e para variados públicos. Envolve o domínio da norma padrão, a escolha adequada do gênero textual, a organização lógica das ideias, o uso de estratégias argumentativas e a atenção à coesão e coerência. Saber produzir textos é fundamental para o sucesso em vestibulares, ENEM, concursos e para a comunicação eficiente no mundo acadêmico, profissional e social. O processo inclui etapas como planejamento, redação, revisão e reescrita, além do respeito à proposta e ao leitor. Praticar a produção textual amplia o repertório, desenvolve o pensamento crítico e aprimora a capacidade de expressão.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Por que dominar produção textual?</h3>
              <ul>
                <li><strong>Expressão clara:</strong> Comunicar ideias, sentimentos e argumentos de forma eficiente.</li>
                <li><strong>Desempenho em provas:</strong> Redações e questões discursivas são decisivas em vestibulares e concursos.</li>
                <li><strong>Versatilidade:</strong> Saber adaptar o texto ao gênero, ao público e ao objetivo comunicativo.</li>
                <li><strong>Desenvolvimento do pensamento:</strong> Organizar, analisar e defender pontos de vista.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Desafios comuns:</h3>
              <ul>
                <li><strong>Falta de planejamento:</strong> Escrever sem organizar ideias pode comprometer a clareza.</li>
                <li><strong>Problemas de coesão e coerência:</strong> Textos desconexos ou sem lógica dificultam a compreensão.</li>
                <li><strong>Desatenção à proposta:</strong> Fugir do tema ou do gênero solicitado prejudica a nota.</li>
                <li><strong>Erros gramaticais:</strong> Comprometem a credibilidade e a compreensão do texto.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Dicas essenciais:</h3>
              <p>
                Leia atentamente a proposta, planeje antes de escrever, revise o texto, pratique diferentes gêneros e temas e busque sempre ampliar seu repertório sociocultural. A prática constante é o melhor caminho para aprimorar a produção textual!
              </p>
            </div>
          </div>
        </div>

        {producaoData.map((item) => (
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
                    <p>Este conteúdo é frequentemente cobrado em provas, especialmente suas etapas, tipos textuais e competências avaliadas.</p>
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

export default ProducaoTextual;