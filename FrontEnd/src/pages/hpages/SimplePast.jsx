// --- INÍCIO DO CÓDIGO PARA SimplePast.jsx ---
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Anatomia.css"; // Reutilizando o CSS, como solicitado
import "../Ingles.jsx";
// PASSO 1: Importe as imagens locais que você vai usar
// OBS: Certifique-se que estes arquivos existem na sua pasta /src/assets
import regularVerbsImg from "../../assets/regular-verbs.jpg";
import irregularVerbsImg from "../../assets/irregular-verbs.jpg";
import verbToBeImg from "../../assets/verb-to-be.jpg";
const simplePastData = [
  {
    id: "regular-verbs",
    titulo: "✅ Verbos Regulares no Passado",
    imagem: "https://www.englishexperts.com.br/wp-content/uploads/2021/08/verbos-regulares-em-ingles.jpeg",
    aba1Titulo: "A Regra Geral",
    aba1Conteudo:
      "A principal regra para formar o Simple Past (Passado Simples) de verbos regulares em inglês é adicionar '-ed' ao final do verbo. Esta regra se aplica à maioria dos verbos e é usada para descrever ações que começaram e terminaram em um momento específico no passado. Por exemplo, 'work' (trabalhar) se torna 'worked' (trabalhou/trabalhava).",
    aba2Titulo: "Exemplos e Variações",
    aba2Conteudo: [
      "Regra Geral (+ed): talk -> talked, watch -> watched, play -> played.",
      "Verbos terminados em 'e' (+d): love -> loved, dance -> danced, arrive -> arrived.",
      "Verbos CVC (Consoante-Vogal-Consoante): Se a sílaba tônica for a última, dobra-se a consoante final e adiciona-se '-ed'. Ex: stop -> stopped, plan -> planned.",
      "Verbos terminados em 'y': Se precedido por consoante, troca-se o 'y' por 'ied'. Ex: study -> studied, cry -> cried. Se precedido por vogal, apenas adiciona-se '-ed'. Ex: play -> played.",
    ],
    aba3Titulo: "Uso em Frases",
    aba3Conteudo: [
      "I worked a lot yesterday. (Eu trabalhei muito ontem.)",
      "She studied English for the test. (Ela estudou inglês para a prova.)",
      "They planned a big party. (Eles planejaram uma grande festa.)",
      "He arrived late for the meeting. (Ele chegou atrasado para a reunião.)",
    ],
  },
  {
    id: "irregular-verbs",
    titulo: "🔄 Verbos Irregulares no Passado",
    imagem: "https://www.esl-lab.com/wp-content/uploads/2020/11/irregular-verbs.jpg",
    aba1Titulo: "O que são?",
    aba1Conteudo:
      "Verbos irregulares não seguem a regra do '-ed'. Eles possuem formas próprias para o Simple Past e para o Past Participle que precisam ser memorizadas. Eles são muito comuns na língua inglesa, incluindo alguns dos verbos mais usados como 'go', 'have', 'do' e 'be'.",
    aba2Titulo: "Exemplos Comuns",
    aba2Conteudo: [
      "Go -> Went (Ir -> Fui/Foi/Fomos): 'They went to the beach.'",
      "Have -> Had (Ter -> Tive/Tinha): 'She had a great idea.'",
      "Do -> Did (Fazer -> Fiz/Fez): 'He did his homework.'",
      "See -> Saw (Ver -> Vi/Viu): 'I saw that movie last year.'",
      "Come -> Came (Vir -> Vim/Veio): 'She came to my house.'",
      "Get -> Got (Obter/Pegar -> Obtive/Peguei): 'We got the tickets.'",
    ],
    aba3Titulo: "Importância",
    aba3Conteudo: [
      "Dominar os verbos irregulares é essencial para a fluência em inglês.",
      "Não há uma regra lógica para sua formação, o que exige estudo e prática constante.",
      "Muitos testes e exames de proficiência focam em verbos irregulares devido à sua natureza.",
      "Pergunta-Chave: 'Qual é o passado simples do verbo 'go'?' Resposta: 'Went'.",
      "Pergunta-Chave: 'A forma correta do verbo 'to have' no passado para a segunda pessoa do singular é:' Resposta: 'Had'. (A forma 'had' é a mesma para todas as pessoas).",
    ],
  },
  {
    id: "verb-to-be",
    titulo: "🗣️ Verbo 'To Be' no Passado (Was/Were)",
    imagem: "https://i.ytimg.com/vi/WbKSB9vA-bQ/maxresdefault.jpg",
    aba1Titulo: "Formas e Usos",
    aba1Conteudo:
      "O verbo 'to be' (ser/estar) é um verbo irregular especial. No Simple Past, ele tem duas formas: 'was' e 'were'. A escolha entre elas depende do sujeito da frase. É usado para descrever estados, condições, identidades ou localizações no passado.",
    aba2Titulo: "Conjugação",
    aba2Conteudo: [
      "I was (Eu era/estava)",
      "You were (Você era/estava)",
      "He/She/It was (Ele/Ela era/estava)",
      "We were (Nós éramos/estávamos)",
      "You were (Vocês eram/estavam)",
      "They were (Eles/Elas eram/estavam)",
      "Pergunta-Chave: 'Qual é a forma correta do verbo 'to be' no passado para a primeira pessoa do singular?' Resposta: 'Was'.",
    ],
    aba3Titulo: "Negativa e Interrogativa",
    aba3Conteudo: [
      "Negativa: Adiciona-se 'not' após 'was' ou 'were'. (was not -> wasn't; were not -> weren't). Ex: 'She wasn't at home.'",
      "Interrogativa: Inverte-se a posição do verbo com o sujeito. Ex: 'Were you tired?'",
      "Diferente de outros verbos no passado, 'to be' não usa o auxiliar 'did'.",
      "Exemplos: 'I was a student.' (Eu era um estudante.) / 'They were friends.' (Eles eram amigos.)",
    ],
  },
];

function SimplePast() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_simple_past");
    if (saved) {
      const savedProgresso = JSON.parse(saved);
      setProgresso(savedProgresso);
    }

    const savedGrifos = localStorage.getItem("grifos_simple_past");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    simplePastData.forEach(item => {
      initialActiveTabs[item.id] = 'aba1';
    });
    setActiveTab(initialActiveTabs);
    atualizarProgressoGeral();
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = simplePastData.length;
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
    localStorage.setItem("progresso_simple_past", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_simple_past", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_simple_past", JSON.stringify(novosGrifos));
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
          <span className="titulo-animado">Inglês: O Simple Past</span>
          <div className="subtitulo-principal">Domine o tempo verbal para falar sobre o passado com o Gabarita Mente!</div>
        </h1>
        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>
        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {simplePastData.map(item => (
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
          <h2 className="resumo-titulo">Resumo do Simple Past</h2>
          <p className="resumo-descricao">
            O Simple Past (Passado Simples) é um dos tempos verbais mais fundamentais do inglês. Ele é usado para descrever ações, eventos ou estados que começaram e terminaram em um ponto específico do passado. Dominá-lo é crucial para contar histórias, descrever experiências e comunicar-se de forma eficaz. Nesta seção, exploramos as regras para verbos regulares, as formas dos verbos irregulares mais comuns e o caso especial do verbo 'to be'.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Pontos-Chave:</h3>
              <ul>
                <li><strong>Verbos Regulares:</strong> A maioria dos verbos, adiciona-se "-ed".</li>
                <li><strong>Verbos Irregulares:</strong> Possuem formas únicas que devem ser memorizadas (ex: go - went).</li>
                <li><strong>Verbo 'To Be':</strong> Usa as formas 'was' e 'were' dependendo do sujeito.</li>
                <li><strong>Estrutura Negativa/Interrogativa:</strong> Geralmente utiliza o verbo auxiliar 'did'.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Dica para o vestibular:</h3>
              <p>Questões de vestibular frequentemente testam o conhecimento sobre verbos irregulares. Crie uma lista dos mais comuns e pratique-os em frases. Preste atenção também no uso correto de 'was' e 'were'.</p>
            </div>
          </div>
        </div>
        {simplePastData.map((item) => (
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
                    <ul className="revolucao-lista">
                      {item.aba2Conteudo.map((conteudoItem, index) => (<li key={index} className={grifos[`${item.id}-aba2-${index}`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba2', index)}>{conteudoItem}</li>))}
                    </ul>
                  </div>
                  <div className={`tab-content ${activeTab[item.id] === 'aba3' ? 'active' : ''}`}>
                    <h3>{item.aba3Titulo}</h3>
                    <ul className="revolucao-lista">
                      {item.aba3Conteudo.map((conteudoItem, index) => (<li key={index} className={grifos[`${item.id}-aba3-${index}`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba3', index)}>{conteudoItem}</li>))}
                    </ul>
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
        <div className="footer-content">
          <ul><li><span onClick={voltar}>Página Inicial</span></li></ul>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Gabarita Mente - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default SimplePast;
// --- FIM DO CÓDIGO PARA SimplePast.jsx ---