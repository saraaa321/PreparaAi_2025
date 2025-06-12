import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Css/Anatomia.css";
import "../Biologia.jsx";

const anatomiaData = [
  {
    id: "sistema-cardiovascular",
    titulo: "❤️ Sistema Cardiovascular",
    imagem: "https://static.preparaenem.com/conteudo_legenda/dd496cb7197808c48ac87cb7cadcd628.jpg",
    aba1Titulo: "Componentes",
    aba1Conteudo:
      "O sistema cardiovascular é formado pelo coração e pelos vasos sanguíneos (artérias, veias e capilares). O coração funciona como uma bomba que impulsiona o sangue através dos vasos, garantindo o transporte de oxigênio, nutrientes, hormônios e outras substâncias para todas as células do corpo, além de remover resíduos metabólicos.",
    aba2Titulo: "Funções e Circulação",
    aba2Conteudo: [
      "Transporte de oxigênio dos pulmões para os tecidos e dióxido de carbono dos tecidos para os pulmões.",
      "Distribuição de nutrientes absorvidos no sistema digestório.",
      "Transporte de hormônios das glândulas endócrinas para os órgãos-alvo.",
      "Remoção de excretas metabólicas para os órgãos excretores (rins, fígado).",
      "Regulação da temperatura corporal e defesa do organismo (transporte de células imunes).",
      "Pequena Circulação (Pulmonar): Sangue venoso vai do coração aos pulmões e retorna arterial ao coração.",
      "Grande Circulação (Sistêmica): Sangue arterial vai do coração para o corpo e retorna venoso ao coração.",
    ],
    aba3Titulo: "Coração e Vasos",
    aba3Conteudo: [
      "Coração: Órgão muscular oco com quatro cavidades (2 átrios e 2 ventrículos).",
      "Artérias: Levam sangue do coração para os tecidos (geralmente sangue arterial, rico em O₂).",
      "Veias: Levam sangue dos tecidos para o coração (geralmente sangue venoso, rico em CO₂).",
      "Capilares: Vasos microscópicos onde ocorrem as trocas gasosas e de substâncias entre o sangue e as células.",
    ],
  },
  {
    id: "sistema-respiratorio",
    titulo: "🌬️ Sistema Respiratório",
    imagem: "https://thumbs.dreamstime.com/b/ejemplo-d-del-sistema-respiratorio-70480978.jpg",
    aba1Titulo: "Estruturas",
    aba1Conteudo:
      "O sistema respiratório é responsável pelas trocas gasosas entre o organismo e o ambiente. É composto pelas vias aéreas superiores (fossas nasais, faringe, laringe) e inferiores (traqueia, brônquios, bronquíolos) e pelos pulmões, onde se encontram os alvéolos pulmonares – local efetivo das trocas gasosas (hematose).",
    aba2Titulo: "Mecânica e Trocas",
    aba2Conteudo: [
      "Inspiração: Contração do diafragma e músculos intercostais, aumentando o volume da caixa torácica e diminuindo a pressão interna, permitindo a entrada do ar.",
      "Expiração: Relaxamento do diafragma e músculos intercostais, diminuindo o volume da caixa torácica e aumentando a pressão interna, forçando a saída do ar.",
      "Hematose: Troca de gases (O₂ e CO₂) que ocorre nos alvéolos pulmonares por difusão.",
      "O oxigênio do ar alveolar passa para o sangue dos capilares, e o dióxido de carbono do sangue passa para o ar alveolar.",
    ],
    aba3Titulo: "Funções e Importância",
    aba3Conteudo: [
      "Fornecer oxigênio para as células realizarem a respiração celular.",
      "Eliminar o dióxido de carbono, produto residual do metabolismo celular.",
      "Participar da regulação do pH sanguíneo.",
      "Auxiliar na fonação (produção da voz) através da laringe.",
      "Filtrar, aquecer e umedecer o ar inspirado.",
    ],
  },
  {
    id: "sistema-nervoso",
    titulo: "🧠 Sistema Nervoso",
    imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-sistema-nervoso-periferico-constituido-por-nervos-ganglios-58077123599bc.jpg",
    aba1Titulo: "Divisão Principal",
    aba1Conteudo:
      "O sistema nervoso é responsável por captar, processar e gerar respostas aos estímulos do ambiente interno e externo. Divide-se em Sistema Nervoso Central (SNC), composto pelo encéfalo (cérebro, cerebelo, tronco encefálico) e medula espinhal, e Sistema Nervoso Periférico (SNP), formado por nervos e gânglios nervosos.",
    aba2Titulo: "Células e Sinapses",
    aba2Conteudo: [
      "Neurônios: Células especializadas na condução de impulsos nervosos. Possuem corpo celular, dendritos (recepção de estímulos) e axônio (transmissão do impulso).",
      "Células da Glia (Neuroglia): Dão suporte, nutrição e proteção aos neurônios (astrócitos, oligodendrócitos, micróglia, etc.).",
      "Sinapse: Região de comunicação entre dois neurônios ou entre um neurônio e uma célula efetora (músculo, glândula). A transmissão pode ser química (neurotransmissores) ou elétrica.",
    ],
    aba3Titulo: "Funções e SNP Autônomo",
    aba3Conteudo: [
      "Funções do SNC: Processamento de informações, tomada de decisões, controle de movimentos voluntários, emoções, memória, aprendizado.",
      "Funções do SNP: Condução de informações sensoriais ao SNC e de comandos motores do SNC aos músculos e glândulas.",
      "Sistema Nervoso Autônomo (SNA): Parte do SNP que controla funções involuntárias (batimentos cardíacos, digestão, respiração). Divide-se em Simpático (alerta, luta ou fuga) e Parassimpático (repouso, digestão).",
    ],
  },
  {
    id: "sistema-digestorio",
    titulo: "🍎 Sistema Digestório",
    imagem: "https://image.tuasaude.com/media/article/rq/dh/sistema-digestorio_53662.jpg?width=686&height=487",
    aba1Titulo: "Órgãos e Estrutura",
    aba1Conteudo:
      "O sistema digestório é responsável pela ingestão, digestão e absorção dos alimentos, além da eliminação dos resíduos não digeridos. É composto pelo tubo digestório (boca, faringe, esôfago, estômago, intestino delgado, intestino grosso, reto e ânus) e por glândulas anexas (glândulas salivares, fígado, pâncreas).",
    aba2Titulo: "Processos Digestivos",
    aba2Conteudo: [
      "Digestão Mecânica: Trituração e mistura dos alimentos (mastigação, movimentos peristálticos).",
      "Digestão Química: Quebra dos alimentos em moléculas menores por ação de enzimas digestivas.",
      "Boca: Início da digestão de carboidratos (amilase salivar).",
      "Estômago: Digestão de proteínas (pepsina em meio ácido).",
      "Intestino Delgado: Principal local de digestão (ação de enzimas do pâncreas e da parede intestinal) e absorção de nutrientes.",
      "Fígado: Produz a bile (emulsificação de gorduras).",
      "Pâncreas: Produz enzimas digestivas e bicarbonato (neutraliza acidez).",
    ],
    aba3Titulo: "Absorção e Excreção",
    aba3Conteudo: [
      "Absorção: Passagem dos nutrientes digeridos (aminoácidos, glicose, ácidos graxos, vitaminas, minerais) do intestino delgado para a corrente sanguínea e linfática.",
      "Vilosidades e Microvilosidades: Dobras na parede do intestino delgado que aumentam a superfície de contato para absorção.",
      "Intestino Grosso: Absorção de água e eletrólitos, formação das fezes.",
      "Eliminação: As fezes são eliminadas do corpo através do reto e ânus.",
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
    navigate('/Biologia');
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
          <span className="titulo-animado">Explorando a Anatomia Humana</span>
          <div className="subtitulo-principal">Descubra os sistemas do corpo humano com o Gabarita Mente!</div>
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
          <h2 className="resumo-titulo">Resumo de Anatomia Humana</h2>
          <p className="resumo-descricao">
          Anatomia humana é o campo da biologia responsável por estudar a forma e a estrutura do organismo humano, bem como as suas partes. O nome anatomia origina-se do grego ana, que significa parte, e tomia, que significa cortar, ou seja, é a parte da biologia que se preocupa com o isolamento de estruturas e seu estudo. A anatomia utiliza, principalmente, a técnica conhecida como dissecação, que se baseia na execução de cortes que permitem uma melhor visualização das estruturas do organismo. Essa prática é muito realizada nos cursos da área da saúde, tais como medicina, odontologia e fisioterapia.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Principais Níveis de Organização:</h3>
              <ul>
                <li><strong>Células:</strong> Unidades básicas da vida.</li>
                <li><strong>Tecidos:</strong> Grupos de células semelhantes que realizam funções específicas (epitelial, conjuntivo, muscular, nervoso).</li>
                <li><strong>Órgãos:</strong> Estruturas formadas por diferentes tecidos que trabalham juntos.</li>
                <li><strong>Sistemas:</strong> Grupos de órgãos que cooperam para realizar funções vitais (cardiovascular, respiratório, nervoso, etc.).</li>
                <li><strong>Organismo:</strong> O ser humano como um todo, resultado da integração de todos os sistemas.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Sistemas Abordados:</h3>
              <ul>
                <li><strong>Sistema Cardiovascular:</strong> Coração, vasos sanguíneos e transporte.</li>
                <li><strong>Sistema Respiratório:</strong> Pulmões, vias aéreas e trocas gasosas.</li>
                <li><strong>Sistema Nervoso:</strong> Cérebro, medula, nervos e controle do corpo.</li>
                <li><strong>Sistema Digestório:</strong> Órgãos da digestão e absorção de nutrientes.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Importância do Estudo:</h3>
              <p>O conhecimento da anatomia permite entender o funcionamento normal do corpo, identificar alterações patológicas, e é a base para diagnóstico e tratamento de doenças. É essencial para profissionais de saúde e para quem busca um maior entendimento sobre si mesmo.</p>
            </div>
          </div>
          <div className="dica-vestibular">
            <h3>Dica para o vestibular:</h3>
            <p>Para Anatomia, foque nas funções principais de cada sistema e na interligação entre eles. Entenda a localização dos principais órgãos e como suas estruturas se relacionam com suas funções. Questões sobre fisiologia associada à anatomia são comuns.</p>
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
                    <p>Este sistema é frequentemente cobrado em provas, especialmente suas funções e os principais órgãos envolvidos.</p>
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