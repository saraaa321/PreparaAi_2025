import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Estados.css"; 

const estadosData = [
  {
    id: "estados-fisicos",
    titulo: "🌡️ Estados Físicos da Matéria",
    descricao:
      "A matéria pode existir em diferentes estados físicos, dependendo da temperatura e pressão. Esses estados são definidos pela organização e movimento das partículas que compõem a substância.",
    causas: [
      "**Sólido**: As partículas estão muito próximas e organizadas em um padrão fixo, com pouca liberdade de movimento. Os sólidos possuem forma e volume definidos. Exemplos: ferro, ouro, gelo.",
      "**Líquido**: As partículas estão próximas, mas sem arranjo fixo, permitindo que o líquido flua e se molde ao recipiente. Os líquidos possuem volume definido, mas forma variável. Exemplos: água, mercúrio.",
      "**Gasoso**: As partículas estão afastadas, em movimento rápido e aleatório, com volume e forma indefinidos. Os gases podem ser comprimidos facilmente. Exemplos: oxigênio, cloro.",
      "**Plasma**: Um estado da matéria em que os átomos estão ionizados, ou seja, possuem elétrons livres. É encontrado em estrelas e lâmpadas fluorescentes.",
    ],
    consequencias: [
      "Mudanças de estado físico ocorrem devido à variação de temperatura ou pressão, como fusão (sólido para líquido), vaporização (líquido para gás) e sublimação (sólido para gás).",
      "Os estados físicos influenciam diretamente as propriedades e aplicações das substâncias. Por exemplo, o gelo (sólido) é usado para resfriamento, enquanto o vapor d'água (gasoso) é usado em turbinas.",
      "A compreensão dos estados físicos é essencial para a química, física e engenharia, pois afeta processos industriais, como destilação e compressão de gases.",
    ],
    imagem: "https://www.coladaweb.com/wp-content/uploads/2014/12/20200709-estados-fisicos-materia.png",
  },
  {
    id: "exemplo-cloro",
    titulo: "🧪 Exemplo: O Cloro",
    descricao:
      "O cloro é um elemento químico da família dos halogênios. Ele é um gás amarelo-esverdeado à temperatura ambiente, altamente tóxico e usado em tratamentos de água e desinfetantes. Sua fórmula molecular é **Cl₂**, indicando que ele forma moléculas diatômicas.",
    causas: [
      "O cloro é encontrado na natureza principalmente em compostos, como o cloreto de sódio (NaCl), presente na água do mar.",
      "É obtido industrialmente por eletrólise de soluções de cloreto de sódio.",
      "Possui alta reatividade química, formando compostos com diversos elementos, como cloretos e hipocloritos.",
    ],
    consequencias: [
      "O cloro é amplamente utilizado no tratamento de água potável e piscinas, devido à sua capacidade de eliminar microrganismos.",
      "É usado na produção de plásticos, como o PVC (policloreto de vinila).",
      "Apesar de suas aplicações, o cloro é tóxico e deve ser manuseado com cuidado, pois pode causar irritação respiratória e danos à saúde.",
    ],
    imagem: "https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/cloro-dados.jpg",
  },
  {
    id: "propriedades-elementos",
    titulo: "🔍 Propriedades Físicas e Químicas dos Elementos",
    descricao:
      "Os elementos químicos possuem propriedades físicas e químicas que determinam seu comportamento e aplicações. Essas propriedades variam de acordo com a posição do elemento na tabela periódica.",
    causas: [
      "**Ponto de fusão e ebulição**: Temperaturas em que o elemento muda de estado físico. Por exemplo, o ponto de fusão do ferro é 1538°C, enquanto o do oxigênio é -218°C.",
      "**Densidade**: Massa por unidade de volume. Elementos como o ouro possuem alta densidade, enquanto o hidrogênio tem densidade muito baixa.",
      "**Reatividade química**: Capacidade de um elemento reagir com outros. Por exemplo, os metais alcalinos reagem vigorosamente com água, enquanto os gases nobres são quimicamente inertes.",
      "**Condutividade térmica e elétrica**: Metais como cobre e prata são excelentes condutores, enquanto não metais, como enxofre, são isolantes.",
    ],
    consequencias: [
      "As propriedades físicas e químicas determinam as aplicações dos elementos. Por exemplo, o alumínio é usado em estruturas leves devido à sua baixa densidade e resistência à corrosão.",
      "A reatividade química é crucial para processos industriais, como a produção de ácidos, bases e combustíveis.",
      "A condutividade elétrica dos metais é essencial para a fabricação de fios e circuitos elétricos.",
    ],
    imagem: "https://storage.estuda.com.br/resumos/398430_a82ec11eecb1d91021baae18bd3c5ef7_scan_pic00047.jpg",
  },
  {
    id: "simbolos-quimicos",
    titulo: "🔤 Símbolos Químicos",
    descricao:
      "Os símbolos químicos são abreviações internacionais usadas para representar os elementos químicos. Eles são formados por uma ou duas letras, derivadas do nome do elemento em latim ou inglês.",
    causas: [
      "A primeira letra do símbolo químico é sempre maiúscula, enquanto a segunda (se existir) é minúscula.",
      "Exemplos de símbolos químicos:\n" +
      "- **H**: Hidrogênio\n" +
      "- **O**: Oxigênio\n" +
      "- **Na**: Sódio (do latim *natrium*)\n" +
      "- **Cl**: Cloro",
      "Os símbolos químicos são padronizados pela IUPAC (União Internacional de Química Pura e Aplicada) para garantir consistência global.",
    ],
    consequencias: [
      "Os símbolos químicos facilitam a comunicação científica, permitindo que químicos de diferentes países compreendam fórmulas e equações.",
      "Eles são usados em tabelas periódicas, equações químicas e descrições de compostos.",
      "A padronização dos símbolos é essencial para evitar ambiguidades e erros na ciência e na indústria.",
    ],
    imagem: "https://img.freepik.com/vetores-premium/20-tabela-preiodica-dos-elementos-icon-pack-design_1142-25399.jpg?semt=ais_hybrid&w=740",
  },
];

export { estadosData };

function Celulas() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null); 
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_celulas");
    if (saved) setProgresso(JSON.parse(saved));

    const initialActiveTabs = {};
    celulasData.forEach(item => {
      initialActiveTabs[item.id] = 'conceito'; 
    });
    setActiveTab(initialActiveTabs);

  }, []); 

 useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso, celulasData]); 

  const atualizarProgressoGeral = () => {
    const total = celulasData.length;
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
    localStorage.setItem("progresso_celulas", JSON.stringify(novoProgresso));
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_celulas", JSON.stringify(novoProgresso));
  };

  const toggleItemAtivo = (id) => {
    setItemAtivo(itemAtivo === id ? null : id);
  };

  const handleTabClick = (itemId, tab) => {
    setActiveTab(prev => ({ ...prev, [itemId]: tab }));
  };

  const voltar = () => {
    navigate('/');
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
          <button className="back-button" onClick={voltar}>Voltar</button>
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">O Mundo das Células</span>
          <div className="subtitulo-principal">Explore os fundamentos da Biologia Celular</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {celulasData.map(item => (
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

        {celulasData.map((item) => ( 
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
                      className={`tab-button ${activeTab[item.id] === 'conceito' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'conceito')}
                    >
                      Definição 
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'causas' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'causas')}
                    >
                      Estruturas 
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'consequencias')}
                    >
                      Funções 
                    </button>
                  </div>

                  <div className={`tab-content ${activeTab[item.id] === 'conceito' ? 'active' : ''}`}>
                    <p className="revolucao-descricao">{item.descricao}</p>
                  </div>

                  <div className={`tab-content ${activeTab[item.id] === 'causas' ? 'active' : ''}`}>
                    <ul className="revolucao-lista">
                      {item.causas.map((detalhe, index) => ( 
                        <li key={index}>{detalhe}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={`tab-content ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`}>
                    <ul className="revolucao-lista">
                      {item.consequencias.map((detalhe, index) => ( 
                        <li key={index}>{detalhe}</li>
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
                      >Remover Conclusão</button> 
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
          <p>&copy; {new Date().getFullYear()} Gabarita Mente - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Celulas; 