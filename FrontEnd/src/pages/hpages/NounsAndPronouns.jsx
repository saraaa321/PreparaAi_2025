// --- INÍCIO DO CÓDIGO PARA NounsAndPronouns.jsx ---
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/ReinoPlantae.css"; // Reutilizando o CSS
import "../Ingles.jsx";

const nounsData = [
  {
    id: "irregular-plurals",
    titulo: "👦 Plurais Irregulares",
    imagem: "https://7esl.com/wp-content/uploads/2018/03/Irregular-Plural-Nouns.jpg",
    aba1Titulo: "Além do 'S'",
    aba1Conteudo:
      "Enquanto a maioria dos substantivos em inglês forma o plural adicionando '-s' ou '-es', existem vários substantivos importantes com formas de plural irregulares. Essas formas não seguem um padrão e precisam ser memorizadas. Elas são remanescentes do inglês antigo ou de palavras emprestadas de outras línguas.",
    aba2Titulo: "Exemplos Fundamentais",
    aba2Conteudo: [
      "Man -> Men (Homem -> Homens)",
      "Woman -> Women (Mulher -> Mulheres)",
      "Child -> Children (Criança -> Crianças)",
      "Person -> People (Pessoa -> Pessoas)",
      "Foot -> Feet (Pé -> Pés)",
      "Tooth -> Teeth (Dente -> Dentes)",
      "Mouse -> Mice (Rato -> Ratos)",
    ],
    aba3Titulo: "Foco na Questão",
    aba3Conteudo: [
      "A pergunta 'Qual é o plural de 'child'?' é um exemplo clássico de plural irregular.",
      "A resposta correta é 'Children'.",
      "É comum que estudantes iniciantes cometam o erro de adicionar 's' ('childs'), mas essa forma não existe.",
      "Entender esses casos especiais é um sinal de maior domínio do vocabulário em inglês.",
    ],
  },
  {
    id: "subjects-and-pronouns",
    titulo: "👤 Sujeito e Pronomes",
    imagem: "https://www.woodwardenglish.com/wp-content/uploads/2021/01/subject-pronouns-object-pronouns-english.jpg",
    aba1Titulo: "Identificando o Sujeito",
    aba1Conteudo:
      "O sujeito de uma frase é a pessoa, lugar, coisa ou ideia que realiza a ação do verbo ou sobre a qual algo é dito. Identificar o sujeito é o primeiro passo para entender a estrutura de uma oração em inglês. Geralmente, o sujeito vem antes do verbo em frases afirmativas.",
    aba2Titulo: "Pronomes Sujeito",
    aba2Conteudo: [
      "Pronomes sujeito (Subject Pronouns) substituem o substantivo que atua como sujeito para evitar repetição.",
      "Os pronomes sujeito são: I, you, he, she, it, we, they.",
      "Exemplo 1: 'She loves to read books.' - O sujeito é 'She' (Ela).",
      "Exemplo 2: 'When I go to bed?' - O sujeito é 'I' (Eu).",
      "Mesmo em perguntas, o pronome sujeito mantém sua função de quem realiza a ação.",
    ],
    aba3Titulo: "Análise das Questões",
    aba3Conteudo: [
      "Na frase 'She loves to read books', a pergunta é 'Qual é o sujeito?'.",
      "A ação 'loves' (ama) é praticada por 'She' (Ela). Portanto, 'She' é o sujeito.",
      "Na pergunta 'When I go to bed?', a ação 'go' (ir) é praticada por 'I' (Eu).",
      "Entender a função de cada palavra é fundamental para a gramática e a interpretação de texto.",
    ],
  },
];

function NounsAndPronouns() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_nouns_pronouns");
    if (saved) setProgresso(JSON.parse(saved));

    const savedGrifos = localStorage.getItem("grifos_nouns_pronouns");
    if (savedGrifos) setGrifos(JSON.parse(savedGrifos));

    const initialActiveTabs = {};
    nounsData.forEach(item => {
      initialActiveTabs[item.id] = 'aba1';
    });
    setActiveTab(initialActiveTabs);
    atualizarProgressoGeral();
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = nounsData.length;
    const concluidos = Object.values(progresso).filter(value => value).length;
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
        setTimeout(() => notification.remove(), 500);
      }, 2000);
    }, 100);
  };

  const marcarComoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: true };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_nouns_pronouns", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_nouns_pronouns", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_nouns_pronouns", JSON.stringify(novosGrifos));
  };

  const toggleItemAtivo = (id) => {
    setItemAtivo(itemAtivo === id ? null : id);
  };

  const handleTabClick = (itemId, tabName) => {
    setActiveTab(prev => ({ ...prev, [itemId]: tabName }));
  };

  const voltar = () => navigate('/Ingles');

  return (
    <div className="revolucoes-wrapper">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn">Sobre Nós</button>
          <button className="btn sair">Sair</button>
        </div>
      </header>
      <main className="content">
        <div className="top-content">
          <button className="back-button" onClick={voltar}>
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
          </button>
        </div>
        <h1 className="titulo-principal">
          <span className="titulo-animado">Inglês: Substantivos e Pronomes</span>
          <div className="subtitulo-principal">Construa a base da sua gramática com o Gabarita Mente!</div>
        </h1>
        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>
        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {nounsData.map(item => (
              <button
                key={item.id}
                className={`nav-button ${itemAtivo === item.id ? 'active' : ''} ${progresso[item.id] ? 'completed' : ''}`}
                onClick={() => toggleItemAtivo(item.id)}
              >
                {item.titulo.split(' ')[1]}
                {progresso[item.id] && <span className="check-icon">✓</span>}
              </button>
            ))}
          </div>
        </div>
        <div className="resumo-card">
          <h2 className="resumo-titulo">Resumo de Substantivos e Pronomes</h2>
          <p className="resumo-descricao">
            Substantivos (nouns) nomeiam pessoas, lugares e coisas, enquanto pronomes (pronouns) os substituem para evitar repetição. Entender como eles funcionam, incluindo suas formas de plural e seu papel como sujeito da frase, é essencial para formar orações corretas e claras em inglês. Nesta seção, abordamos os plurais irregulares e a identificação do sujeito.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Pontos-Chave:</h3>
              <ul>
                <li><strong>Plurais Irregulares:</strong> Formas que não seguem a regra do '-s' (ex: child - children).</li>
                <li><strong>Sujeito:</strong> Quem ou o que realiza a ação do verbo.</li>
                <li><strong>Pronomes Sujeito:</strong> Substituem o nome do sujeito (I, you, he, she, it, we, they).</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Dica para o vestibular:</h3>
              <p>Questões de gramática frequentemente pedem para identificar o sujeito de uma frase ou o referente de um pronome. Pratique a leitura identificando esses elementos para melhorar sua interpretação de texto.</p>
            </div>
          </div>
        </div>
        {nounsData.map((item) => (
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
                <div className="revolucao-media"><img src={item.imagem} alt={item.titulo} className="revolucao-img" />{progresso[item.id] && <div className="completed-badge">Concluído</div>}</div>
                <div className="revolucao-info">
                  <div className="tabs">
                    <button className={`tab-button ${activeTab[item.id] === 'aba1' ? 'active' : ''}`} onClick={() => handleTabClick(item.id, 'aba1')}>{item.aba1Titulo}</button>
                    <button className={`tab-button ${activeTab[item.id] === 'aba2' ? 'active' : ''}`} onClick={() => handleTabClick(item.id, 'aba2')}>{item.aba2Titulo}</button>
                    <button className={`tab-button ${activeTab[item.id] === 'aba3' ? 'active' : ''}`} onClick={() => handleTabClick(item.id, 'aba3')}>{item.aba3Titulo}</button>
                  </div>
                  <div className={`tab-content ${activeTab[item.id] === 'aba1' ? 'active' : ''}`}>
                    <h3>{item.aba1Titulo}</h3>
                    <p className={`revolucao-descricao ${grifos[`${item.id}-aba1`] ? 'grifado' : ''}`} onClick={() => grifarTexto(item.id, 'aba1')}>{item.aba1Conteudo}</p>
                  </div>
                  <div className={`tab-content ${activeTab[item.id] === 'aba2' ? 'active' : ''}`}>
                    <h3>{item.aba2Titulo}</h3>
                    <ul className="revolucao-lista">{Array.isArray(item.aba2Conteudo) ? item.aba2Conteudo.map((conteudoItem, index) => (<li key={index} className={grifos[`${item.id}-aba2-${index}`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba2', index)}>{conteudoItem}</li>)) : <p className={grifos[`${item.id}-aba2`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba2')}>{item.aba2Conteudo}</p>}</ul>
                  </div>
                  <div className={`tab-content ${activeTab[item.id] === 'aba3' ? 'active' : ''}`}>
                    <h3>{item.aba3Titulo}</h3>
                    <ul className="revolucao-lista">{Array.isArray(item.aba3Conteudo) ? item.aba3Conteudo.map((conteudoItem, index) => (<li key={index} className={grifos[`${item.id}-aba3-${index}`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba3', index)}>{conteudoItem}</li>)) : <p className={grifos[`${item.id}-aba3`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba3')}>{item.aba3Conteudo}</p>}</ul>
                  </div>
                  <div className="revolucao-actions">
                    <button className={`btn-concluir ${progresso[item.id] ? 'concluido' : ''}`} onClick={() => marcarComoConcluido(item.id)} disabled={progresso[item.id]}>{progresso[item.id] ? "Conteúdo Concluído" : "Marcar como Concluído"}</button>
                    {progresso[item.id] && (<button className="btn-remover-concluido" onClick={() => marcarComoNaoConcluido(item.id)}>Remover Conclusão</button>)}
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
        <div className="footer-content"><ul><li><span onClick={voltar}>Página Inicial</span></li></ul></div>
        <div className="footer-bottom"><p>© 2025 Gabarita Mente - Todos os direitos reservados</p></div>
      </footer>
    </div>
  );
}

export default NounsAndPronouns;
// --- FIM DO CÓDIGO PARA NounsAndPronouns.jsx ---