import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Anatomia.css";

const anatomiaData = [
  {
    id: "conceito-leitura",
    titulo: "📖 O que é Leitura?",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdjqarvfj1s5qxhqy9shgbd%2F1749581373_img_2.webp?st=2025-06-10T17%3A44%3A29Z&se=2025-06-16T18%3A44%3A29Z&sks=b&skt=2025-06-10T17%3A44%3A29Z&ske=2025-06-16T18%3A44%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ucXo%2F1wBzYbbff5JPv02qCugQQjkpHMXinei7k5lRiQ%3D&az=oaivgprodscus",
    aba1Titulo: "Definição",
    aba1Conteudo:
      "Leitura é o processo de decodificação e compreensão de signos, símbolos ou palavras, permitindo ao leitor atribuir sentido ao que está escrito. Vai muito além de simplesmente juntar letras: envolve interpretar, analisar, relacionar informações e construir significados a partir do texto e do contexto. A leitura pode ser silenciosa ou em voz alta, individual ou coletiva, e abrange desde textos literários até imagens, gráficos, mapas e outros tipos de linguagem.",
    aba2Titulo: "Importância da Leitura",
    aba2Conteudo: [
      "Desenvolve o pensamento crítico e a capacidade de argumentação.",
      "Amplia o vocabulário e melhora a escrita.",
      "Favorece a aprendizagem em todas as áreas do conhecimento.",
      "Estimula a criatividade, a imaginação e a empatia.",
      "Permite acesso à informação, cultura e cidadania.",
      "Ajuda na resolução de problemas e na tomada de decisões.",
      "É fundamental para o sucesso em provas, vestibulares e no mercado de trabalho.",
    ],
    aba3Titulo: "Tipos de Leitura",
    aba3Conteudo: [
      "Leitura literal: Busca compreender o sentido explícito do texto, identificando informações diretamente apresentadas.",
      "Leitura inferencial: Exige que o leitor deduza informações implícitas, lendo nas entrelinhas e interpretando intenções do autor.",
      "Leitura crítica: Analisa, avalia e questiona o texto, considerando argumentos, pontos de vista e possíveis manipulações.",
      "Leitura seletiva: Foca em partes específicas do texto, buscando informações pontuais.",
      "Leitura exploratória: Realizada para ter uma visão geral do texto, identificando tema, estrutura e principais ideias.",
    ],
  },
  {
    id: "interpretacao-textual",
    titulo: "🧠 Interpretação de Texto",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdjxxrkeyst4ae0aa5x2gps%2F1749581586_img_3.webp?st=2025-06-10T17%3A50%3A26Z&se=2025-06-16T18%3A50%3A26Z&sks=b&skt=2025-06-10T17%3A50%3A26Z&ske=2025-06-16T18%3A50%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6aeYv1uNgw8vmL5jTvUn7rwzQ%2FoY0NmwyEubp0nVsL4%3D&az=oaivgprodscus",
    aba1Titulo: "O que é Interpretação?",
    aba1Conteudo:
      "Interpretar um texto é compreender seu significado global, identificar intenções do autor, relações entre ideias, inferências, pressupostos e até mesmo o contexto histórico, social e cultural em que foi produzido. A interpretação exige que o leitor vá além da leitura superficial, relacionando informações, reconhecendo ironias, ambiguidades, figuras de linguagem e diferentes pontos de vista.",
    aba2Titulo: "Estratégias de Interpretação",
    aba2Conteudo: [
      "Ler o texto atentamente, mais de uma vez, se necessário.",
      "Identificar o gênero textual, o tema central e a finalidade do texto.",
      "Observar o título, subtítulos, imagens e outros elementos paratextuais.",
      "Destacar palavras-chave, conectivos e expressões que indicam relações de causa, consequência, oposição, comparação, etc.",
      "Fazer perguntas sobre o texto: Quem? O quê? Quando? Onde? Por quê? Como?",
      "Relacionar o texto com conhecimentos prévios e com outros textos (intertextualidade).",
      "Analisar o contexto de produção e o público-alvo.",
      "Reconhecer recursos linguísticos, como ironia, metáfora, ambiguidade, polissemia.",
    ],
    aba3Titulo: "Erros Comuns e Dicas",
    aba3Conteudo: [
      "Não se prender apenas à primeira impressão: releia e questione.",
      "Evite interpretações baseadas apenas em opiniões pessoais, sem respaldo no texto.",
      "Cuidado com pegadinhas em provas: leia todas as alternativas e volte ao texto sempre que necessário.",
      "Atenção a palavras de sentido duplo, ironias e figuras de linguagem.",
      "Pratique com diferentes tipos de textos: literários, jornalísticos, científicos, publicitários, etc.",
      "Leia enunciados de questões com atenção, identificando exatamente o que está sendo pedido.",
    ],
  },
  {
    id: "estrategias-leitura",
    titulo: "🔎 Estratégias de Leitura",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdk4cytfkm8ancbre405yh7%2F1749581821_img_3.webp?st=2025-06-10T17%3A51%3A05Z&se=2025-06-16T18%3A51%3A05Z&sks=b&skt=2025-06-10T17%3A51%3A05Z&ske=2025-06-16T18%3A51%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=F0%2FhNqEcNwQET7FLkC64zq4GydepkOdDrUDEhveuBw0%3D&az=oaivgprodscus",
    aba1Titulo: "Antes da Leitura",
    aba1Conteudo:
      "Antes de iniciar a leitura, é importante preparar-se para compreender melhor o texto. Observe o título, subtítulos, imagens, gráficos e qualquer elemento visual. Ative seus conhecimentos prévios sobre o tema e estabeleça um objetivo: você vai ler para estudar, se informar, se divertir ou resolver uma questão? Antecipar o conteúdo e formular hipóteses sobre o texto facilita a compreensão.",
    aba2Titulo: "Durante a Leitura",
    aba2Conteudo: [
      "Leia com atenção, marcando palavras desconhecidas e buscando seu significado.",
      "Faça anotações, grife ideias principais e conecte informações.",
      "Identifique a estrutura do texto: introdução, desenvolvimento e conclusão.",
      "Observe a progressão das ideias e a relação entre os parágrafos.",
      "Questione o texto: concorda ou discorda? O que o autor quis dizer?",
      "Procure exemplos, argumentos e dados que sustentam as ideias.",
      "Releia trechos confusos e busque esclarecimentos em outras fontes, se necessário.",
    ],
    aba3Titulo: "Depois da Leitura",
    aba3Conteudo: [
      "Faça um resumo ou esquema das ideias principais.",
      "Reflita sobre o que aprendeu e como pode aplicar esse conhecimento.",
      "Compartilhe e discuta o texto com colegas ou professores.",
      "Responda a perguntas sobre o texto, pratique questões de interpretação.",
      "Relacione o texto com outros conteúdos estudados.",
      "Avalie se atingiu o objetivo inicial da leitura.",
    ],
  },
  
  {
    id: "compreensao-interpretacao",
    titulo: "💡 Compreensão x Interpretação",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxhva18pewabd1hr5eekaajx%2F1749724580_img_0.webp?st=2025-06-12T09%3A21%3A59Z&se=2025-06-18T10%3A21%3A59Z&sks=b&skt=2025-06-12T09%3A21%3A59Z&ske=2025-06-18T10%3A21%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=v9EqsWHEBWmgdbsb54gBpVbfcDQJighBOJZVLt7waog%3D&az=oaivgprodscus",
    aba1Titulo: "Diferença Conceitual",
    aba1Conteudo:
      "Compreensão textual refere-se à capacidade de captar as informações explícitas do texto, ou seja, aquilo que está claramente dito. Já a interpretação envolve ir além do que está escrito, buscando sentidos implícitos, intenções do autor, relações com outros textos e contextos. Em provas, questões de compreensão costumam pedir informações diretas, enquanto as de interpretação exigem análise, inferência e reflexão.",
    aba2Titulo: "Exemplos Práticos",
    aba2Conteudo: [
      "Compreensão: 'Segundo o texto, onde nasceu o personagem principal?' (resposta direta).",
      "Interpretação: 'O que o autor quis sugerir ao afirmar que o personagem estava “preso em suas próprias escolhas”?' (resposta exige análise).",
      "Compreensão: 'Qual é o tema central do texto?'",
      "Interpretação: 'Qual a crítica social presente no texto?'",
    ],
    aba3Titulo: "Dicas para Provas",
    aba3Conteudo: [
      "Leia atentamente o enunciado da questão para saber se pede compreensão ou interpretação.",
      "Volte ao texto sempre que necessário para encontrar informações.",
      "Não responda apenas com base em opiniões pessoais: fundamente sua resposta no texto.",
      "Pratique com diferentes tipos de questões e textos.",
      "Desenvolva o hábito de ler criticamente, questionando e relacionando ideias.",
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
          <span className="titulo-animado">Leitura e Interpretação de Textos</span>
          <div className="subtitulo-principal">Desenvolva sua compreensão e análise textual com o Gabarita Mente!</div>
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
          <h2 className="resumo-titulo">Resumo de Leitura e Interpretação</h2>
          <p className="resumo-descricao">
            Leitura e interpretação de textos são habilidades essenciais para o sucesso acadêmico, profissional e pessoal. Ler não é apenas decodificar palavras, mas compreender, analisar, inferir e refletir sobre ideias, argumentos e contextos. A interpretação exige atenção ao gênero textual, à finalidade, ao público-alvo, ao contexto de produção e aos recursos linguísticos utilizados pelo autor. Praticar diferentes tipos de leitura e estratégias interpretativas amplia o repertório cultural, desenvolve o senso crítico e prepara para desafios como vestibulares, ENEM e situações do cotidiano.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Por que estudar leitura e interpretação?</h3>
              <ul>
                <li><strong>Compreensão global:</strong> Entender o sentido geral do texto e captar informações explícitas e implícitas.</li>
                <li><strong>Desenvolvimento do pensamento crítico:</strong> Analisar argumentos, identificar manipulações e construir opiniões fundamentadas.</li>
                <li><strong>Melhora da escrita:</strong> Ler bem é o primeiro passo para escrever bem, pois amplia o vocabulário e mostra diferentes estruturas textuais.</li>
                <li><strong>Desempenho em provas:</strong> A maioria das questões de vestibulares e concursos exige interpretação precisa de textos variados.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Principais desafios:</h3>
              <ul>
                <li><strong>Inferência:</strong> Ler nas entrelinhas, deduzir informações não ditas diretamente.</li>
                <li><strong>Identificação de gêneros:</strong> Reconhecer a estrutura e a finalidade de cada tipo de texto.</li>
                <li><strong>Reconhecimento de recursos linguísticos:</strong> Figuras de linguagem, ironia, ambiguidade, coesão e coerência.</li>
                <li><strong>Relacionamento com o contexto:</strong> Entender o texto em seu tempo, espaço e intenção comunicativa.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Dica para provas:</h3>
              <p>Leia sempre o texto com atenção, destaque palavras-chave, questione o que está sendo dito e relacione com seus conhecimentos prévios. Pratique com textos literários, jornalísticos, científicos e publicitários para ampliar sua visão e repertório.</p>
            </div>
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
                    <p>Este conteúdo é frequentemente cobrado em provas, especialmente suas estratégias e conceitos fundamentais.</p>
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