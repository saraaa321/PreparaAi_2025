// --- INÍCIO DO CÓDIGO PARA AdjectivesAndComparatives.jsx ---
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Css/Celulas.css"; // Reutilizando o CSS

const adjectivesData = [
  {
    id: "comparatives",
    titulo: "📏 Adjetivos Comparativos",
    descricao:
      "Adjetivos comparativos são usados para comparar as diferenças entre dois objetos. Em inglês, a forma do comparativo depende do número de sílabas do adjetivo. Essa estrutura é fundamental para expressar relações de tamanho, qualidade, idade, etc.",
    causas: [ // Estrutura/Regras
      "Adjetivos Curtos (1 sílaba): Adiciona-se '-er'. Ex: tall -> taller, old -> older, fast -> faster.",
      "Adjetivos terminados em '-y': Troca-se o 'y' por '-ier'. Ex: happy -> happier, easy -> easier.",
      "Adjetivos Longos (2 ou mais sílabas): Usa-se a palavra 'more' antes do adjetivo. Ex: beautiful -> more beautiful, expensive -> more expensive.",
      "Irregulares: Existem formas irregulares. Ex: good -> better, bad -> worse, far -> further/farther.",
      "A palavra 'than' (do que) é usada para introduzir o segundo termo da comparação. Ex: 'She is taller than her sister.'",
    ],
    consequencias: [ // Aplicação/Exemplos
      "Foco na Questão: 'Qual palavra falta na frase 'She is ___ than her sister'?'",
      "O adjetivo é 'tall' (alto), que é um adjetivo curto de uma sílaba.",
      "A regra para adjetivos curtos é adicionar '-er'.",
      "Portanto, a forma correta é 'taller'.",
      "A frase completa é: 'She is taller than her sister.' (Ela é mais alta do que a irmã dela).",
      "Entender essa regra evita o erro comum de usar 'more' com adjetivos curtos (ex: 'more tall' está incorreto).",
    ],
    imagem: "https://i.pinimg.com/originals/de/28/1d/de281ddc3a91e57a3e7e2269a919f20c.png",
  },
  {
    id: "synonyms",
    titulo: "🤝 Sinônimos (Synonyms)",
    descricao:
      "Sinônimos são palavras que têm o mesmo significado ou um significado muito semelhante a outra palavra. Usar sinônimos enriquece o vocabulário, evita a repetição e permite expressar ideias de maneiras diferentes e mais precisas. Conhecer sinônimos é uma habilidade chave para interpretação de texto e para a escrita.",
    causas: [ // Exemplos
      "Happy (feliz) -> Glad, joyful, cheerful.",
      "Big (grande) -> Large, huge, enormous.",
      "Start (começar) -> Begin, commence.",
      "Look (olhar) -> See, watch, gaze.",
      "Scared (assustado) -> Afraid, frightened.",
      "Foco na Questão: 'Qual é um sinônimo para 'maybe'?'",
      "A resposta correta é 'Perhaps'. Ambas as palavras significam 'talvez' ou 'pode ser'.",
    ],
    consequencias: [ // Importância e Contexto
      "Contexto é Rei: Embora sinônimos sejam semelhantes, eles podem ter nuances de significado ou ser mais apropriados em contextos formais ou informais.",
      "Exemplo: 'Maybe' é mais comum na fala cotidiana, enquanto 'perhaps' pode soar um pouco mais formal.",
      "Ampliar o vocabulário de sinônimos melhora a fluidez na comunicação.",
      "Muitas questões de vestibular e testes de proficiência avaliam o conhecimento de vocabulário através de sinônimos.",
      "Ler bastante é uma das melhores maneiras de aprender sinônimos em seu contexto natural.",
    ],
    imagem: "https://i.ytimg.com/vi/YEX943aN5bM/maxresdefault.jpg",
  },
];

function AdjectivesAndComparatives() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_adjectives");
    if (saved) setProgresso(JSON.parse(saved));

    const initialActiveTabs = {};
    adjectivesData.forEach(item => {
      initialActiveTabs[item.id] = 'conceito';
    });
    setActiveTab(initialActiveTabs);
    atualizarProgressoGeral();
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = adjectivesData.length;
    if (total === 0) {
      setProgressoTotal(0);
      return;
    }
    const concluidos = Object.values(progresso).filter(v => v === true).length;
    const percent = Math.round((concluidos / total) * 100);
    setProgressoTotal(percent);
  };

  const marcarComoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: true };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_adjectives", JSON.stringify(novoProgresso));
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_adjectives", JSON.stringify(novoProgresso));
  };

  const toggleItemAtivo = (id) => {
    setItemAtivo(itemAtivo === id ? null : id);
  };

  const handleTabClick = (itemId, tab) => {
    setActiveTab(prev => ({ ...prev, [itemId]: tab }));
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
        <div className="top-content"><button className="back-button" onClick={voltar}>Voltar</button></div>
        <h1 className="titulo-principal">
          <span className="titulo-animado">Inglês: Adjetivos e Vocabulário</span>
          <div className="subtitulo-principal">Descreva o mundo e enriqueça seu vocabulário</div>
        </h1>
        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>
        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {adjectivesData.map(item => (
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
        {adjectivesData.map((item) => (
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
                    <button className={`tab-button ${activeTab[item.id] === 'conceito' ? 'active' : ''}`} onClick={() => handleTabClick(item.id, 'conceito')}>Definição</button>
                    <button className={`tab-button ${activeTab[item.id] === 'causas' ? 'active' : ''}`} onClick={() => handleTabClick(item.id, 'causas')}>Exemplos / Regras</button>
                    <button className={`tab-button ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`} onClick={() => handleTabClick(item.id, 'consequencias')}>Aplicação</button>
                  </div>
                  <div className={`tab-content ${activeTab[item.id] === 'conceito' ? 'active' : ''}`}><p className="revolucao-descricao">{item.descricao}</p></div>
                  <div className={`tab-content ${activeTab[item.id] === 'causas' ? 'active' : ''}`}><ul className="revolucao-lista">{item.causas.map((detalhe, index) => (<li key={index}>{detalhe}</li>))}</ul></div>
                  <div className={`tab-content ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`}><ul className="revolucao-lista">{item.consequencias.map((detalhe, index) => (<li key={index}>{detalhe}</li>))}</ul></div>
                  <div className="revolucao-actions">
                    <button className={`btn-concluir ${progresso[item.id] ? 'concluido' : ''}`} onClick={() => marcarComoConcluido(item.id)} disabled={progresso[item.id]}>{progresso[item.id] ? "Conteúdo Concluído" : "Marcar como Concluído"}</button>
                    {progresso[item.id] && (<button className="btn-remover-concluido" onClick={() => marcarComoNaoConcluido(item.id)}>Remover Conclusão</button>)}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
      <footer className="footer">
        <div className="footer-content"><ul><li><span onClick={voltar}>Página Inicial</span></li></ul></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Gabarita Mente - Todos os direitos reservados</p></div>
      </footer>
    </div>
  );
}

export default AdjectivesAndComparatives;
// --- FIM DO CÓDIGO PARA AdjectivesAndComparatives.jsx ---