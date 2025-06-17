import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Ondas.css"; 

const ondasOpticaData = [
  {
    id: "movimento-harmonico-simples",
    titulo: "➰ Movimento Harmônico Simples (MHS)",
    descricao:
      "O Movimento Harmônico Simples (MHS) é um tipo de movimento oscilatório no qual a força restauradora é diretamente proporcional ao deslocamento e atua na direção oposta ao deslocamento. É o movimento idealizado de um pêndulo simples ou de um sistema massa-mola sem atrito. O MHS é fundamental para entender fenômenos ondulatórios.",
    causas: [
      "Força Restauradora Elástica: Ex: Uma mola que obedece à Lei de Hooke (F = -kx).",
      "Força Restauradora Gravitacional: Ex: Um pêndulo simples em pequenas amplitudes (aproximação para MHS).",
      "Conservação de Energia: A energia mecânica total (cinética + potencial) se conserva durante o MHS ideal.",
    ],
    consequencias: [
      "Período (T): Tempo para uma oscilação completa. Depende da massa e da constante elástica (mola) ou do comprimento e gravidade (pêndulo).",
      "Frequência (f): Número de oscilações por unidade de tempo (f = 1/T).",
      "Amplitude (A): Deslocamento máximo da posição de equilíbrio.",
      "Equações de Posição, Velocidade e Aceleração Senoidais.",
      "Energia: A energia cinética é máxima na posição de equilíbrio e zero nos extremos, o contrário para a energia potencial.",
    ],
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/07/equacoes-mhs.jpg",
  },
  {
    id: "ondas",
    titulo: "🌊 Ondas: Conceitos Fundamentais",
    descricao:
      "Ondas são perturbações que se propagam no espaço, transportando energia sem transportar matéria. Elas podem ser classificadas de diversas formas, como mecânicas ou eletromagnéticas, e longitudinais ou transversais.",
    causas: [
      "Propagação de Energia: Ondas transferem energia de um ponto a outro.",
      "Natureza da Perturbação: Vibração de partículas do meio (mecânicas) ou oscilação de campos elétricos e magnéticos (eletromagnéticas).",
      "Meio de Propagação: Necessidade de um meio material (ondas mecânicas) ou não (ondas eletromagnéticas).",
    ],
    consequencias: [
      "Tipos de Ondas:",
      "- Mecânicas: Precisam de um meio material para se propagar (ex: som, ondas em cordas, ondas na água).",
      "- Eletromagnéticas: Não precisam de um meio material, podem se propagar no vácuo (ex: luz visível, ondas de rádio, raios X).",
      "Classificação pela Direção de Vibração:",
      "- Transversais: A vibração é perpendicular à direção de propagação (ex: luz, ondas em cordas).",
      "- Longitudinais: A vibração é paralela à direção de propagação (ex: som).",
      "Características: Amplitude, comprimento de onda (lambda), frequência (f), período (T), velocidade de propagação (v = lambda . f).",
    ],
    imagem: "https://static.todamateria.com.br/upload/on/da/ondaseletromagneticas-cke.jpg",
  },
  {
    id: "fenomenos-ondulatorios",
    titulo: "💫 Fenômenos Ondulatórios",
    descricao:
      "As ondas interagem com o meio e entre si de diversas formas, originando fenômenos como reflexão, refração, difração, interferência e polarização. O estudo desses fenômenos é crucial para entender o comportamento da luz e do som.",
    causas: [
      "Interação com Obstáculos ou Meios Diferentes: As ondas encontram barreiras ou mudam de meio de propagação.",
      "Superposição de Ondas: Duas ou mais ondas se encontram em um mesmo ponto.",
      "Propriedades Específicas da Onda: Ex: Orientação da vibração para polarização.",
    ],
    consequencias: [
      "Reflexão: A onda retorna ao meio original após incidir sobre uma superfície.",
      "Refração: A onda muda de velocidade e direção ao passar de um meio para outro.",
      "Difração: A onda contorna obstáculos ou se espalha ao passar por aberturas.",
      "Interferência: Superposição de duas ou mais ondas, resultando em padrões de intensidade (construtiva ou destrutiva).",
      "Polarização: Restrição da direção de vibração das ondas transversais a um único plano (exclusivo para ondas transversais, como a luz).",
      "Ressonância: Aumento da amplitude de vibração quando a frequência de uma força externa se iguala à frequência natural de um sistema.",
    ],
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/09/fenomenos-ondulatorios.jpg",
  },
  {
    id: "introducao-optica",
    titulo: "💡 Introdução à Óptica",
    descricao:
      "A Óptica é o ramo da física que estuda a luz e os fenômenos relacionados à sua propagação, interação com a matéria e detecção. A luz é uma onda eletromagnética, e seu estudo se divide em Óptica Geométrica (estudo da luz como raios) e Óptica Física (estudo da natureza ondulatória da luz).",
    causas: [
      "Luz como Onda Eletromagnética: Oscilação de campos elétricos e magnéticos que se propaga no vácuo e em meios materiais.",
      "Interação Luz-Matéria: Absorção, reflexão, refração e transmissão da luz ao interagir com diferentes substâncias.",
      "Percepção Visual: O olho humano e outros detectores convertem a luz em sinais interpretáveis.",
    ],
    consequencias: [
      "Fontes de Luz: Próprias (emitem luz) ou iluminadas (refletem luz).",
      "Meios Ópticos: Transparentes (permitem passagem clara), translúcidos (permitem passagem difusa) e opacos (não permitem passagem).",
      "Princípios da Óptica Geométrica:",
      "- Propagação Retilínea: A luz se propaga em linha reta em meios homogêneos.",
      "- Independência dos Raios de Luz: Raios de luz se cruzam sem alterar suas trajetórias.",
      "- Reversibilidade dos Raios de Luz: O caminho da luz em uma trajetória pode ser percorrido no sentido inverso.",
      "Espectro Eletromagnético: Gama completa de ondas eletromagnéticas, incluindo luz visível, infravermelho, ultravioleta, etc.",
    ],
    imagem: "https://storage.googleapis.com/novo-blog-wordpress/2023/06/d4b2647d-sistema-rgb.png",
  },
  {
    id: "espelhos-lentes",
    titulo: "🪞 Espelhos e Lentes",
    descricao:
      "Espelhos e lentes são dispositivos ópticos que formam imagens por reflexão e refração da luz, respectivamente. São fundamentais para a construção de instrumentos ópticos como telescópios, microscópios e óculos.",
    causas: [
      "Reflexão Especular: Superfícies polidas (espelhos) que refletem a luz de forma regular.",
      "Refração da Luz: Mudança de direção da luz ao passar por um meio transparente curvo (lentes).",
      "Geometria das Superfícies: Formato curvo (esférico, parabólico) de espelhos e lentes que determinam as propriedades da imagem.",
    ],
    consequencias: [
      "Espelhos Planos: Formam imagens virtuais, diretas e de mesmo tamanho que o objeto.",
      "Espelhos Esféricos (Côncavos e Convexos):",
      "- Côncavos: Podem formar imagens reais ou virtuais, dependendo da posição do objeto.",
      "- Convexos: Sempre formam imagens virtuais, diretas e menores que o objeto.",
      "Lentes Esféricas (Convergentes e Divergentes):",
      "- Convergentes: Concentram raios de luz paralelos; podem formar imagens reais ou virtuais.",
      "- Divergentes: Espalham raios de luz paralelos; sempre formam imagens virtuais, diretas e menores.",
      "Equações de Gauss e Aumento Linear: Usadas para calcular a posição e o tamanho das imagens.",
      "Aplicações: Óculos, lentes de contato, câmeras fotográficas, projetores, telescópios, microscópios.",
    ],
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/06/tipos-de-lentes.jpg",
  },
];

function OndasOptica() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_ondas_optica"); 
    if (saved) setProgresso(JSON.parse(saved));

    const initialActiveTabs = {};
    ondasOpticaData.forEach(item => {
      initialActiveTabs[item.id] = 'conceito';
    });
    setActiveTab(initialActiveTabs);

  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso, ondasOpticaData]); 

  const atualizarProgressoGeral = () => {
    const total = ondasOpticaData.length; 
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
    localStorage.setItem("progresso_ondas_optica", JSON.stringify(novoProgresso)); 
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_ondas_optica", JSON.stringify(novoProgresso)); 
  };

  const toggleItemAtivo = (id) => {
    setItemAtivo(itemAtivo === id ? null : id);
  };

  const handleTabClick = (itemId, tab) => {
    setActiveTab(prev => ({ ...prev, [itemId]: tab }));
  };

  const voltar = () => {
    navigate('/Fisica');
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

      <main className="content">
        <div className="top-content">
          <button className="back-button" onClick={voltar}>
          ]<i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
          </button>
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">Ondulatória e Óptica</span>
          <div className="subtitulo-principal">Desvende os segredos da luz e do som</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {ondasOpticaData.map(item => ( 
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
  <h2 className="resumo-titulo">Resumo de Ondulatória</h2>
  <p className="resumo-descricao">
    Ondulatória é a área da física que estuda as ondas — perturbações que se propagam no espaço e transportam energia sem transporte de matéria. As ondas podem ser mecânicas, como o som, ou eletromagnéticas, como a luz. O estudo de suas propriedades e comportamentos é essencial para compreender fenômenos naturais e tecnológicos.
  </p>
  <div className="resumo-topics">
    <div className="resumo-topic">
      <h3>Principais Conceitos:</h3>
      <ul>
        <li><strong>Frequência (f):</strong> Número de oscilações por segundo (Hz).</li>
        <li><strong>Período (T):</strong> Tempo para uma oscilação completa (s).</li>
        <li><strong>Amplitude:</strong> Altura máxima da onda em relação ao ponto de equilíbrio.</li>
        <li><strong>Velocidade (v):</strong> Rapidez com que a onda se propaga: v = λ·f.</li>
        <li><strong>Comprimento de onda (λ):</strong> Distância entre dois picos consecutivos da onda.</li>
      </ul>
    </div>
    <div className="resumo-topic">
      <h3>Tipos de Ondas:</h3>
      <ul>
        <li><strong>Ondas Mecânicas:</strong> Necessitam de meio material (ex: som, ondas em corda).</li>
        <li><strong>Ondas Eletromagnéticas:</strong> Não precisam de meio material (ex: luz, micro-ondas).</li>
        <li><strong>Transversais:</strong> A vibração é perpendicular à propagação (ex: luz).</li>
        <li><strong>Longitudinais:</strong> A vibração é paralela à propagação (ex: som).</li>
      </ul>
    </div>
    <div className="resumo-topic">
      <h3>Fenômenos Ondulatórios:</h3>
      <ul>
        <li><strong>Reflexão:</strong> A onda retorna ao encontrar um obstáculo.</li>
        <li><strong>Refração:</strong> Mudança de direção da onda ao mudar de meio.</li>
        <li><strong>Difração:</strong> A onda contorna obstáculos ou atravessa fendas.</li>
        <li><strong>Interferência:</strong> Superposição de ondas (construtiva ou destrutiva).</li>
        <li><strong>Efeito Doppler:</strong> Alteração da frequência percebida por causa do movimento da fonte ou do observador.</li>
      </ul>
    </div>
  </div>
  <div className="dica-vestibular">
    <h3>Dica para o vestibular:</h3>
    <p>Em Ondulatória, saiba identificar os tipos de onda, suas equações e os fenômenos associados. Questões frequentes envolvem o uso da fórmula v = λ·f e interpretação de gráficos. Estude também o comportamento do som e da luz em diferentes meios.</p>
  </div>
</div>


        {ondasOpticaData.map((item) => ( 
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
                      Aspectos
                    </button> 
                    <button
                      className={`tab-button ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'consequencias')}
                    >
                      Implicações
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

export default OndasOptica; 