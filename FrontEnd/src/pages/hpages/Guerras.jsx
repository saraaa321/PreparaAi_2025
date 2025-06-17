import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Guerras.css";

const guerrasData = [
  {
    id: "primeira-guerra",
    titulo: "🌍 Primeira Guerra Mundial (1914–1918)",
    descricao:
      "A Primeira Guerra Mundial foi um conflito de escala global que envolveu as principais potências europeias e se espalhou por vários continentes. Foi marcada por trincheiras, novas tecnologias bélicas e destruição em massa. A guerra resultou na queda de impérios e preparou o cenário para conflitos futuros. O que a tornou tão marcante e devastadora foram suas características inéditas. A guerra foi predominantemente definida pela guerra de trincheiras, um sistema defensivo brutal que levava a impasses sangrentos e avanços mínimos, resultando em milhões de baixas. A adoção de novas tecnologias bélicas intensificou essa carnificina; aviões, tanques, submarinos, gás mostarda e metralhadoras foram usados em larga escala pela primeira vez, transformando radicalmente a natureza do combate e a capacidade de destruição em massa.",
    causas: [
      "Nacionalismo exacerbado e disputas territoriais.",
      "Imperialismo e corrida armamentista entre potências.",
      "Alianças militares rígidas (Tríplice Entente e Tríplice Aliança).",
      "Assassinato do arquiduque Francisco Ferdinando da Áustria.",
      "Desequilíbrios econômicos e rivalidades históricas.",
    ],
    consequencias: [
      "Queda de impérios (Austro-Húngaro, Otomano, Russo e Alemão).",
      "Tratado de Versalhes impôs severas punições à Alemanha.",
      "Criação da Liga das Nações.",
      "Revoluções sociais, como a Revolução Russa.",
      "Cenário propício ao surgimento de regimes totalitários.",
    ],
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuIMqDK3oc5yhIwkoLqYdkScR4bGYeiAPOA&s",
  },
  {
    id: "segunda-guerra",
    titulo: "⚔️ Segunda Guerra Mundial (1939–1945)",
    descricao:
      "A Segunda Guerra Mundial foi o maior e mais letal conflito da história da humanidade, com mais de 70 milhões de mortos. Ocorreu em todos os continentes e teve como eixo central a expansão do nazismo, do fascismo e a resposta dos Aliados. Terminou com o uso de armas nucleares pelos Estados Unidos no Japão. Diferente de conflitos anteriores, sua abrangência foi verdadeiramente global, com operações militares e impactos em todos os continentes. Houve batalhas na Europa, na Ásia (especialmente no Pacífico), na África, e até mesmo submarinos agindo nas Américas. Esse caráter mundial foi impulsionado pelas ambições expansionistas das Potências do Eixo.",
    causas: [
      "Revanchismo alemão pós-Tratado de Versalhes.",
      "Ascensão do nazismo e do fascismo na Europa.",
      "Política expansionista de Hitler e Mussolini.",
      "Fracasso da Liga das Nações.",
      "Invasão da Polônia pela Alemanha em 1939.",
    ],
    consequencias: [
      "Derrota da Alemanha, Itália e Japão.",
      "Criação da ONU em 1945.",
      "Divisão da Alemanha e início da Guerra Fria.",
      "Descolonização da África e da Ásia.",
      "Condenação de crimes de guerra no Tribunal de Nuremberg.",
    ],
    imagem: "https://upload.wikimedia.org/wikipedia/commons/1/10/Bundesarchiv_Bild_183-S33882%2C_Adolf_Hitler_retouched.jpg",
  },
  {
    id: "guerra-fria",
    titulo: "🧊 Guerra Fria (1947–1991)",
    descricao:
      "A Guerra Fria foi um conflito ideológico, político e econômico entre Estados Unidos (capitalismo) e União Soviética (socialismo). Apesar de não envolver confronto direto entre as superpotências, o período foi marcado por disputas armamentistas, corrida espacial, espionagem e guerras indiretas. A espionagem e a contra-espionagem foram práticas onipresentes, com agências como a CIA e a KGB operando globalmente para obter informações e desestabilizar o inimigo. Mais visíveis e devastadoras foram as guerras indiretas (ou guerras por procuração), onde as superpotências apoiavam militar, financeira e ideologicamente lados opostos em conflitos regionais ao redor do mundo. Exemplos notáveis incluem as Guerras da Coreia e do Vietnã, além de intervenções e golpes na América Latina, África e Oriente Médio. ",
    causas: [
      "Divisão ideológica pós-Segunda Guerra.",
      "Disputa por influência global entre EUA e URSS.",
      "Corrida armamentista e ameaça nuclear.",
      "Criação de blocos militares (OTAN e Pacto de Varsóvia).",
      "Propaganda e espionagem como armas principais.",
    ],
    consequencias: [
      "Corrida espacial (homem na Lua em 1969).",
      "Guerra da Coreia, Vietnã e conflitos na América Latina e África.",
      "Queda do Muro de Berlim (1989).",
      "Dissolução da URSS (1991).",
      "Fim da bipolaridade e hegemonia dos EUA.",
    ],
    imagem: "https://cdn.awsli.com.br/478/478284/produto/327869969/guerra-fria_capa-para-loja-yaxvaly076.jpg",
  },
  {
    id: "ucrania-russia",
    titulo: "💥 Rússia x Ucrânia (2021 – Presente)",
    descricao:
      "O conflito entre Rússia e Ucrânia é uma complexa e prolongada disputa que se intensificou dramaticamente com a invasão russa em larga escala em fevereiro de 2022, marcando uma escalada de tensões que já existiam desde 2014, com a anexação da Crimeia pela Rússia e o apoio a separatistas nas regiões de Donbass (Donetsk e Luhansk). As causas do conflito são multifacetadas, incluindo a aproximação da Ucrânia com o Ocidente, especialmente a União Europeia e a OTAN, o que a Rússia vê como uma ameaça à sua segurança e esfera de influência histórica. A Rússia também reivindica laços culturais e históricos com a Ucrânia e alega a necessidade de desmilitarizar e desnazificar o país.",
    causas: [
  "Expansão da OTAN para o leste, vista pela Rússia como uma ameaça à sua segurança.",
  "Interesses geopolíticos da Rússia na Ucrânia, considerada parte de sua esfera de influência histórica e estratégica.",
  "Questões de identidade e soberania ucraniana, com a busca do país por maior integração com a Europa e o Ocidente.",
  "Anexação da Crimeia pela Rússia em 2014 e o apoio a movimentos separatistas no leste da Ucrânia (Donbass).",
  "Desinformação e propaganda de ambos os lados, alimentando narrativas conflitantes e nacionalismos.",
    ],
    consequencias: [
    "Crise humanitária massiva com milhões de refugiados e deslocados internos na Ucrânia.",
    "Sanções econômicas abrangentes impostas à Rússia por países ocidentais, impactando a economia global.",
    "Aumento dos preços de energia e alimentos em nível mundial devido à interrupção de cadeias de suprimentos.",
    "Reorganização das alianças militares e políticas internacionais, com fortalecimento da OTAN e apoio global à Ucrânia.",
    "Destruição generalizada de infraestrutura e cidades ucranianas, exigindo esforços de reconstrução maciços.",
    ],
    imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/10/ucrania-bandeira-e1669824290812.jpg?w=1200&h=1200&crop=1",
  },
  {
    id: "israel-palestina",
    titulo: "🕊️ Conflito Israel-Palestina (Séc. XX – Presente)",
    descricao:
    "O conflito entre Israel e Palestina é uma das disputas mais antigas e complexas do mundo, com raízes históricas profundas. Após a Primeira Guerra Mundial, o Reino Unido assumiu o controle da Palestina, uma região habitada por uma maioria árabe e uma minoria judaica. Nas décadas seguintes, entre 1920 e 1940, a população judaica na Palestina cresceu consideravelmente, muitos buscando refúgio da perseguição na Europa." +
    " Em 1947, a ONU votou pela partilha da Palestina em estados judeu e árabe, um plano que não foi aceito por nenhuma nação árabe. A Declaração de Independência de Israel em 14 de maio de 1948 foi seguida por ataques de cinco nações árabes, marcando o início da primeira guerra árabe-israelense." +
    "Mais recentemente, em maio de 2024, 143 dos 193 membros da Assembleia Geral da ONU votaram a favor da candidatura palestina para filiação plena à organização. Estima-se que existam aproximadamente 5,9 milhões de palestinos registrados como refugiados pela ONU. Internacionalmente, a solução de dois estados, que propõe a criação de um Estado palestino independente na Cisjordânia e na Faixa de Gaza, é vista como um caminho para a paz duradoura.",
        causas: [
      "Disputas territoriais e soberania sobre Jerusalém, Cisjordânia e Gaza.",
      "Questões religiosas e históricas sobre a Terra Santa, com reivindicações de ambos os lados.",
      "Conflitos de identidade nacional e o direito à autodeterminação para ambos os povos.",
      "Construção de assentamentos israelenses em territórios palestinos ocupados.",
      "Ações militares e ataques de ambos os lados, incluindo terrorismo e operações de segurança.",
      "O status dos refugiados palestinos e o direito de retorno.",
    ],
    consequencias: [
      "Altos índices de violência e um grande número de vítimas, tanto civis quanto militares.",
      "Crises humanitárias recorrentes e deslocamento de populações, especialmente em Gaza.",
      "Impacto significativo nas relações internacionais e na geopolítica do Oriente Médio.",
      "Bloqueio de Gaza e restrições severas de movimento para os palestinos.",
      "Tentativas frustradas de acordos de paz e falta de uma solução duradoura.",
      "Polarização e debates intensos em nível global.",
    ],
    imagem: 
      "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/52fd/live/74c44720-92aa-11ee-8df3-1d2983d8814f.png.webp",    
  }
];

function Guerras() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [guerraAtiva, setGuerraAtiva] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_guerras");
    if (saved) setProgresso(JSON.parse(saved));

    const initialActiveTabs = {};
    guerrasData.forEach(guerra => {
      initialActiveTabs[guerra.id] = 'conceito';
    });
    setActiveTab(initialActiveTabs);

    atualizarProgressoGeral();
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);

  const atualizarProgressoGeral = () => {
    const total = guerrasData.length;
    const concluidos = Object.values(progresso).filter(v => v === true).length;
    const percent = Math.round((concluidos / total) * 100);
    setProgressoTotal(percent);
    localStorage.setItem("progresso", percent.toString());
  };

  const marcarComoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: true };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_guerras", JSON.stringify(novoProgresso));
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_guerras", JSON.stringify(novoProgresso));
  };

  const toggleGuerraAtiva = (id) => {
    setGuerraAtiva(guerraAtiva === id ? null : id);
  };

  const handleTabClick = (guerraId, tab) => {
    setActiveTab(prev => ({ ...prev, [guerraId]: tab }));
  };

  const voltar = () => {
    navigate('/Historia');
  };

  return (
    <div className="revolucoes-wrapper">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn" onClick={() => navegate ("/SobreNos}>Sobre Nós</button>
          <button className="btn sair" onClick={() => alert("Você saiu com sucesso.")}>Sair</button>
        </div>
      </header>

      <main className="contentg">
        <div className="top-content">
          <button className="back-button" onClick={voltar}>
          <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
          </button>
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">Guerras do Mundo</span>
          <div className="subtitulo-principal">Entenda os maiores conflitos da história</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {guerrasData.map(guerra => (
              <button
                key={guerra.id}
                className={`nav-button ${guerraAtiva === guerra.id ? 'active' : ''} ${progresso[guerra.id] ? 'completed' : ''}`}
                onClick={() => toggleGuerraAtiva(guerra.id)}
              >
                {guerra.titulo.split(' ')[0]}
                {progresso[guerra.id] && <span className="check-icon">✓</span>}
              </button>
            ))}
          </div>
        </div>

        {guerrasData.map(guerra => (
          <section
            key={guerra.id}
            id={guerra.id}
            className={`revolucao-box ${guerraAtiva === guerra.id ? 'active' : ''} ${progresso[guerra.id] ? 'completed' : ''}`}
          >
            <div className="revolucao-header" onClick={() => toggleGuerraAtiva(guerra.id)}>
              <h2>{guerra.titulo}</h2>
              <div className="expand-icon">{guerraAtiva === guerra.id ? '−' : '+'}</div>
            </div>

            {guerraAtiva === guerra.id && (
              <div className="revolucao-content">
                <div className="revolucao-media">
                  <img src={guerra.imagem} alt={guerra.titulo} className="revolucao-img" />
                  {progresso[guerra.id] && <div className="completed-badge">Concluído</div>}
                </div>
                <div className="revolucao-info">
                  <div className="tabs">
                    <button
                      className={`tab-button ${activeTab[guerra.id] === 'conceito' ? 'active' : ''}`}
                      onClick={() => handleTabClick(guerra.id, 'conceito')}
                    >
                      Conceito
                    </button>
                    <button
                      className={`tab-button ${activeTab[guerra.id] === 'causas' ? 'active' : ''}`}
                      onClick={() => handleTabClick(guerra.id, 'causas')}
                    >
                      Causas
                    </button>
                    <button
                      className={`tab-button ${activeTab[guerra.id] === 'consequencias' ? 'active' : ''}`}
                      onClick={() => handleTabClick(guerra.id, 'consequencias')}
                    >
                      Consequências
                    </button>
                  </div>

                  <div className={`tab-content ${activeTab[guerra.id] === 'conceito' ? 'active' : ''}`}>
                    <p className="revolucao-descricao">{guerra.descricao}</p>
                  </div>

                  <div className={`tab-content ${activeTab[guerra.id] === 'causas' ? 'active' : ''}`}>
                    <ul className="revolucao-lista">
                      {guerra.causas.map((causa, index) => (
                        <li key={index}>{causa}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={`tab-content ${activeTab[guerra.id] === 'consequencias' ? 'active' : ''}`}>
                    <ul className="revolucao-lista">
                      {guerra.consequencias.map((conseq, index) => (
                        <li key={index}>{conseq}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="revolucao-actions">
                    <button
                      className={`btn-concluir ${progresso[guerra.id] ? 'concluido' : ''}`}
                      onClick={() => marcarComoConcluido(guerra.id)}
                      disabled={progresso[guerra.id]}
                    >
                      {progresso[guerra.id] ? "Conteúdo Concluído" : "Marcar como Concluído"}
                    </button>
                    {progresso[guerra.id] && (
                      <button
                        className="btn-remover-concluido"
                        onClick={() => marcarComoNaoConcluido(guerra.id)}
                      >Remover como Concluído</button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
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

export default Guerras;


