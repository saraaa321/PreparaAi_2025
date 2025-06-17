import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Atomo.css";
import "../Quimica.jsx";

const atomosData = [
  {
    id: "estrutura-dos-atomos",
    titulo: "⚛️ Estrutura dos Átomos",
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2024/09/estrutura-atomica.jpg",
    aba1Titulo: "O que é um Átomo?",
    aba1Conteudo:
      "O átomo é a menor unidade da matéria que conserva as propriedades de um elemento químico. Ele é composto por três partículas fundamentais:\n\n" +
      "- **Prótons**: Partículas com carga positiva (+1) que ficam concentradas no núcleo do átomo. O número de prótons determina qual é o elemento químico. Por exemplo, o hidrogênio tem 1 próton, enquanto o carbono tem 6.\n" +
      "- **Nêutrons**: Partículas sem carga elétrica (neutras) também localizadas no núcleo. Eles ajudam a manter o núcleo estável e influenciam a massa do átomo.\n" +
      "- **Elétrons**: Partículas com carga negativa (-1) que orbitam o núcleo em camadas chamadas eletrosferas ou níveis de energia. O número de elétrons em um átomo neutro é igual ao número de prótons, mantendo o átomo eletricamente neutro.\n\n" +
      "Essas partículas fundamentais são responsáveis pelas propriedades químicas e físicas dos elementos.",
    aba2Titulo: "Número Atômico e Massa",
    aba2Conteudo: [
      "**Número Atômico (Z)**: Indica a quantidade de prótons no núcleo do átomo. Este número é único para cada elemento químico e determina suas propriedades químicas. Por exemplo:\n" +
      "- Hidrogênio (H): Z = 1\n" +
      "- Oxigênio (O): Z = 8\n" +
      "- Ferro (Fe): Z = 26\n\n" +
      "**Número de Massa (A)**: Representa a soma do número de prótons e nêutrons no núcleo do átomo. A fórmula é:\n" +
      "A = número de prótons + número de nêutrons\n\n" +
      "Os elétrons têm uma massa muito pequena (cerca de 1/1836 da massa de um próton) e, por isso, não são considerados no cálculo da massa do átomo.",
      "**Representação do Átomo**: Um átomo pode ser representado por:\n" +
      "```\n" +
      "   Z\n" +
      "  A X\n" +
      "```\n" +
      "Onde:\n" +
      "- **X** é o símbolo químico do elemento.\n" +
      "- **Z** é o número atômico (prótons).\n" +
      "- **A** é o número de massa (prótons + nêutrons).",
    ],
    aba3Titulo: "Isótopos, Isóbaros e Isótonos",
    aba3Conteudo: [
      "**Isótopos**: Átomos do mesmo elemento (mesmo número atômico Z), mas com números diferentes de massa (A), devido a diferentes quantidades de nêutrons. Por exemplo:\n" +
      "- Carbono-12 (6 prótons e 6 nêutrons).\n" +
      "- Carbono-14 (6 prótons e 8 nêutrons).\n" +
      "Os isótopos podem ser estáveis ou radioativos, sendo usados em datação e medicina.",
      "**Isóbaros**: Átomos de elementos diferentes que possuem o mesmo número de massa (A), mas diferentes números atômicos (Z). Por exemplo:\n" +
      "- Carbono-14 (Z = 6, A = 14).\n" +
      "- Nitrogênio-14 (Z = 7, A = 14).",
      "**Isótonos**: Átomos de elementos diferentes que possuem o mesmo número de nêutrons, mas diferentes Z e A. Por exemplo:\n" +
      "- Carbono-13 (6 prótons e 7 nêutrons).\n" +
      "- Nitrogênio-14 (7 prótons e 7 nêutrons).",
    ],
  },
  {
    id: "tabela-periodica",
    titulo: "📋 Tabela Periódica",
    imagem: "https://www.coladaweb.com/wp-content/uploads/2014/12/20220418-tabela-periodica-1.png",
    aba1Titulo: "Organização",
    aba1Conteudo:
      "A tabela periódica é uma ferramenta essencial para a química, criada por Dmitri Mendeleev. Ela organiza os elementos em ordem crescente de número atômico (Z) e agrupa elementos com propriedades semelhantes em colunas chamadas **grupos**. As linhas horizontais são chamadas de **períodos** e indicam o número de camadas eletrônicas dos átomos.\n\n" +
      "Por exemplo:\n" +
      "- O **Grupo 1** contém os metais alcalinos, como o sódio (Na) e o potássio (K).\n" +
      "- O **Período 2** contém elementos como o lítio (Li) e o carbono (C), que possuem duas camadas eletrônicas.",
    aba2Titulo: "Grupos e Períodos",
    aba2Conteudo: [
      "**Grupos**: Elementos em uma mesma coluna possuem propriedades químicas semelhantes devido à mesma quantidade de elétrons na camada de valência. Exemplos:\n" +
      "- Metais alcalinos (Grupo 1): Muito reativos, como o sódio (Na).\n" +
      "- Gases nobres (Grupo 18): Estáveis e pouco reativos, como o hélio (He).",
      "**Períodos**: Elementos em uma mesma linha possuem o mesmo número de camadas eletrônicas. Exemplos:\n" +
      "- Período 1: Hidrogênio (H) e hélio (He), com uma camada eletrônica.\n" +
      "- Período 3: Sódio (Na) e cloro (Cl), com três camadas eletrônicas.",
    ],
    aba3Titulo: "Importância da Tabela Periódica",
    aba3Conteudo: [
      "A tabela periódica permite prever propriedades químicas e físicas dos elementos com base em sua posição. Por exemplo:\n" +
      "- Elementos do mesmo grupo tendem a formar compostos semelhantes.\n" +
      "- A reatividade dos metais alcalinos aumenta ao descer no grupo.",
      "Ela também facilita o estudo das reações químicas e a identificação de elementos em compostos desconhecidos. Além disso, a tabela periódica é usada para entender tendências como:\n" +
      "- Energia de ionização.\n" +
      "- Raio atômico.\n" +
      "- Eletronegatividade.",
    ],
  },
];

function Atomo() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_atomos");
    if (saved) {
      const savedProgresso = JSON.parse(saved);
      setProgresso(savedProgresso);
    }

    const savedGrifos = localStorage.getItem("grifos_atomos");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    atomosData.forEach(item => {
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
    const total = atomosData.length;
    const concluidos = Object.values(progresso).filter(value => value === true).length;
    const calculatedProgress = total > 0 ? Math.round((concluidos / total) * 100) : 0;
    setProgressoTotal(calculatedProgress);
  };

  const marcarComoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: true };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_atomos", JSON.stringify(novoProgresso));
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_atomos", JSON.stringify(novoProgresso));
  };

  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_atomos", JSON.stringify(novosGrifos));
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

  const voltar = () => {
    navigate('/Home');
  };

  return (
    <div className="revolucoes-wrapper">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn" onClick={() => alert("Página 'Sobre Nós' em construção.")}>Sobre Nós</button>
          <button className="btn sair" onClick={() => alert("Você saiu com sucesso.")}>Sair</button>
        </div>
      </header>

      <main className="content">
        <div className="top-content">
          <button className="back-button" onClick={voltar}>
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
          </button>
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">Explorando os Átomos e a Tabela Periódica</span>
          <div className="subtitulo-principal">Descubra os fundamentos da química com o Gabarita Mente!</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {atomosData.map(item => (
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

        {atomosData.map((item) => (
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
                      onClick={() => setActiveTab(prev => ({ ...prev, [item.id]: 'aba1' }))}
                    >
                      {item.aba1Titulo}
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'aba2' ? 'active' : ''}`}
                      onClick={() => setActiveTab(prev => ({ ...prev, [item.id]: 'aba2' }))}
                    >
                      {item.aba2Titulo}
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'aba3' ? 'active' : ''}`}
                      onClick={() => setActiveTab(prev => ({ ...prev, [item.id]: 'aba3' }))}
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
                      {item.aba2Conteudo.map((conteudoItem, index) => (
                        <li
                          key={index}
                          className={grifos[`${item.id}-aba2-${index}`] ? 'grifado' : ''}
                          onClick={() => grifarTexto(item.id, 'aba2', index)}
                        >
                          {conteudoItem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`tab-content ${activeTab[item.id] === 'aba3' ? 'active' : ''}`}>
                    <h3>{item.aba3Titulo}</h3>
                    <ul className="revolucao-lista">
                      {item.aba3Conteudo.map((conteudoItem, index) => (
                        <li
                          key={index}
                          className={grifos[`${item.id}-aba3-${index}`] ? 'grifado' : ''}
                          onClick={() => grifarTexto(item.id, 'aba3', index)}
                        >
                          {conteudoItem}
                        </li>
                      ))}
                    </ul>
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

export default Atomo;