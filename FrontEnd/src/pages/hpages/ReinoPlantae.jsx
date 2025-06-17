import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import "../css/ReinoPlantae.css"; 
import "../Biologia.jsx"; 

const plantaeData = [
  {
    id: "caracteristicas-gerais-plantae",
    titulo: "🌳 Características Gerais do Reino Plantae",
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/11/estrutura-vegetal.jpg", 
    aba1Titulo: "Definição e Célula",
    aba1Conteudo:
      "O Reino Plantae, também conhecido como Reino Vegetal, agrupa organismos eucariontes, pluricelulares e autótrofos fotossintetizantes. Suas células possuem parede celular composta primariamente por celulose, vacúolos bem desenvolvidos e plastos, como os cloroplastos (responsáveis pela fotossíntese). As plantas armazenam energia na forma de amido e são fundamentais para a maioria dos ecossistemas terrestres.",
    aba2Titulo: "Organização e Tecidos",
    aba2Conteudo: [
      "Corpo geralmente organizado em raiz, caule e folhas (em plantas mais complexas).",
      "Presença de tecidos verdadeiros, como meristemas (crescimento), parênquimas (preenchimento, reserva, fotossíntese), tecidos de sustentação (colênquima e esclerênquima) e tecidos de condução (xilema e floema).",
      "Cutícula cerosa recobrindo partes aéreas para evitar a perda excessiva de água.",
      "Estômatos presentes nas folhas para trocas gasosas e controle da transpiração.",
    ],
    aba3Titulo: "Ciclo de Vida e Importância",
    aba3Conteudo: [
      "Apresentam ciclo de vida com alternância de gerações (haplodiplobionte), com uma fase gametofítica (n, produz gametas) e uma fase esporofítica (2n, produz esporos).",
      "São a base da maioria das cadeias alimentares terrestres (produtores).",
      "Produzem oxigênio (O₂) essencial para a respiração da maioria dos seres vivos.",
      "Participam ativamente dos ciclos biogeoquímicos (água, carbono).",
    ],
  },
  {
    id: "briofitas",
    titulo: "🌱 Briófitas (Musgos, Hepáticas)",
    imagem: "https://cdn.bncamazonas.com.br/wp-content/uploads/2024/08/Musgo_natureza-scaled-e1724186614457.jpg", 
    aba1Titulo: "Características Principais",
    aba1Conteudo:
      "As briófitas são plantas de pequeno porte, avasculares (sem vasos condutores de seiva), que habitam preferencialmente locais úmidos e sombreados. Incluem os musgos, hepáticas e antóceros. A ausência de vasos condutores limita seu tamanho e as torna dependentes da água para o transporte de substâncias e para a reprodução.",
    aba2Titulo: "Estrutura e Reprodução",
    aba2Conteudo: [
      "Corpo simples, geralmente com estruturas chamadas rizoides (fixação), cauloides (sustentação) e filoides (fotossíntese).",
      "A fase dominante do ciclo de vida é o gametófito (n), a planta verde que vemos.",
      "O esporófito (2n) é dependente do gametófito para nutrição.",
      "A reprodução sexuada depende da água para que os gametas masculinos (anterozoides) nadem até o gameta feminino (oosfera).",
      "Produzem esporos para dispersão.",
    ],
    aba3Titulo: "Importância e Exemplos",
    aba3Conteudo: [
      "São plantas pioneiras, capazes de colonizar ambientes rochosos e iniciar a formação do solo.",
      "Atuam como indicadores de umidade e qualidade do ar.",
      "Retêm água no solo, ajudando a prevenir a erosão.",
      "Exemplos comuns: musgos (Polytrichum, Sphagnum), hepáticas (Marchantia).",
    ],
  },
  {
    id: "pteridofitas",
    titulo: "🌿 Pteridófitas (Samambaias, Avencas)",
    imagem: "https://sto-blog.s3.amazonaws.com/images/2018/08/16/maidenhair-fern-2222805_960_720.jpg", 
    aba1Titulo: "Características Principais",
    aba1Conteudo:
      "As pteridófitas foram as primeiras plantas a desenvolverem vasos condutores (xilema e floema), sendo consideradas as primeiras plantas vasculares (traqueófitas). Este grupo inclui samambaias, avencas, licopódios e cavalinhas. Apesar de serem vasculares, ainda não possuem sementes, flores ou frutos, e dependem da água para a reprodução.",
    aba2Titulo: "Estrutura e Reprodução",
    aba2Conteudo: [
      "Possuem raiz, caule (geralmente subterrâneo, do tipo rizoma) e folhas bem desenvolvidas (frondes), frequentemente com báculos (folhas jovens enroladas).",
      "A fase dominante do ciclo de vida é o esporófito (2n), a planta que usualmente vemos.",
      "O gametófito (protalo) é pequeno, independente e de vida curta.",
      "Os esporos são produzidos em estruturas chamadas esporângios, agrupados em soros na face inferior das folhas.",
      "A reprodução sexuada também depende da água para o deslocamento dos gametas masculinos.",
    ],
    aba3Titulo: "Importância e Exemplos",
    aba3Conteudo: [
      "Amplamente utilizadas como plantas ornamentais.",
      "Algumas espécies são comestíveis ou usadas na medicina popular.",
      "Pteridófitas ancestrais formaram grandes florestas que deram origem a depósitos de carvão mineral.",
      "Exemplos: samambaia-açu (Dicksonia sellowiana), avenca (Adiantum), cavalinha (Equisetum).",
    ],
  },
  {
    id: "gimnospermas",
    titulo: "🌲 Gimnospermas (Pinheiros, Araucárias)",
    imagem: "https://media.istockphoto.com/id/1203536779/pt/foto/silhouette-of-a-pine-araucaria-at-sunset.jpg?s=612x612&w=0&k=20&c=Lc26lxqIA5pifibC3fadP-CHtIucwsYJreY3bReb8lk=",
    aba1Titulo: "Características Principais",
    aba1Conteudo:
      "As gimnospermas são plantas vasculares que produzem sementes, mas estas são 'nuas', ou seja, não são protegidas por frutos. O nome 'gimnosperma' significa 'semente nua'. Este grupo é bem adaptado a climas temperados e frios, e inclui pinheiros, araucárias, ciprestes, sequoias e cicas. A principal novidade evolutiva é a semente, que protege o embrião e facilita a dispersão.",
    aba2Titulo: "Estrutura e Reprodução",
    aba2Conteudo: [
      "Geralmente são árvores de grande porte ou arbustos.",
      "Possuem raiz, caule lenhoso e folhas geralmente aciculares (em forma de agulha) ou escamiformes, muitas vezes perenes.",
      "Estruturas reprodutivas chamadas estróbilos ou cones (pinhas). Há cones masculinos (menores, produzem grãos de pólen) e femininos (maiores, contêm os óvulos).",
      "A polinização ocorre principalmente pelo vento (anemofilia).",
      "Não necessitam de água para a fecundação, pois o grão de pólen leva o gameta masculino até o óvulo.",
    ],
    aba3Titulo: "Importância e Exemplos",
    aba3Conteudo: [
      "Fornecem madeira para construção civil, fabricação de móveis e produção de celulose (papel).",
      "Produção de resinas, terebintina e outros produtos químicos.",
      "Muitas são usadas como plantas ornamentais (ex: pinheiros de Natal).",
      "Sementes como o pinhão (da Araucaria angustifolia) são comestíveis.",
      "Exemplos: Pinheiro-do-paraná (Araucaria angustifolia), pinheiros (Pinus sp.), ciprestes (Cupressus sp.), sequoias (Sequoiadendron giganteum).",
    ],
  },
  {
    id: "angiospermas",
    titulo: "🌸 Angiospermas (Plantas com Flores e Frutos)",
    imagem: "https://thumbs.dreamstime.com/b/girassol-97215694.jpg", 
    aba1Titulo: "Características Principais",
    aba1Conteudo:
      "As angiospermas são o grupo de plantas mais diversificado e dominante no planeta atualmente. São plantas vasculares que apresentam como principais novidades evolutivas as flores e os frutos. A flor é o órgão reprodutivo, e o fruto protege a semente e auxilia na sua dispersão. O nome 'angiosperma' significa 'semente na urna' (referindo-se à semente dentro do fruto).",
    aba2Titulo: "Estrutura da Flor, Polinização e Fruto",
    aba2Conteudo: [
      "A flor típica possui sépalas (cálice), pétalas (corola), estames (parte masculina, produz pólen) e carpelo/pistilo (parte feminina, contém o ovário com óvulos).",
      "A polinização (transferência do pólen) pode ser realizada por diversos agentes, como vento, água, insetos, aves e morcegos.",
      "Ocorrem dupla fecundação: um gameta masculino fecunda a oosfera (formando o zigoto -> embrião) e outro fecunda os núcleos polares (formando o endosperma, tecido nutritivo).",
      "Após a fecundação, o ovário desenvolve-se no fruto e os óvulos nas sementes.",
    ],
    aba3Titulo: "Classificação e Importância",
    aba3Conteudo: [
      "Dividem-se tradicionalmente em dois grandes grupos: Monocotiledôneas (ex: gramíneas, palmeiras, lírios) e Eudicotiledôneas (ex: feijão, roseira, ipê).",
      "São a principal fonte de alimento para humanos e muitos animais (grãos, frutas, verduras, legumes).",
      "Fornecem matéria-prima para diversas indústrias (madeira, fibras, óleos, medicamentos).",
      "Possuem grande importância ecológica, ornamental e cultural.",
      "Exemplos: Roseira, laranjeira, milho, feijoeiro, orquídea, capim.",
    ],
  },
  {
    id: "fisiologia-vegetal",
    titulo: "☀️ Fisiologia Vegetal Essencial",
    imagem: "https://i.pinimg.com/564x/9f/5d/f8/9f5df81a4c4784a5b6d9017f49fdfec5.jpg", 
    aba1Titulo: "Fotossíntese",
    aba1Conteudo:
      "É o processo pelo qual as plantas (e outros organismos clorofilados) convertem energia luminosa em energia química, armazenada na forma de compostos orgânicos (glicose). Utiliza dióxido de carbono (CO₂) e água (H₂O) na presença de luz e clorofila, liberando oxigênio (O₂) como subproduto. Equação geral: 6CO₂ + 6H₂O + Luz → C₆H₁₂O₆ + 6O₂. Ocorre nos cloroplastos.",
    aba2Titulo: "Respiração e Transpiração",
    aba2Conteudo: [
      "Respiração Celular: As plantas respiram continuamente, dia e noite. Nesse processo, a glicose produzida na fotossíntese é quebrada para liberar energia (ATP) para as atividades metabólicas. Consome oxigênio e libera dióxido de carbono. Ocorre nas mitocôndrias.",
      "Transpiração: É a perda de água na forma de vapor pelas plantas, principalmente através dos estômatos nas folhas. É crucial para o transporte de água e nutrientes das raízes para as folhas e para o resfriamento da planta.",
    ],
    aba3Titulo: "Hormônios e Nutrição",
    aba3Conteudo: [
      "Hormônios Vegetais (Fitormônios): Substâncias que regulam o crescimento e desenvolvimento das plantas, como auxinas (crescimento de caule e raiz), giberelinas (germinação, floração), citocininas (divisão celular), etileno (amadurecimento de frutos) e ácido abscísico (dormência, fechamento estomático).",
      "Nutrição Mineral: As plantas absorvem água e nutrientes minerais do solo através das raízes, essenciais para seu metabolismo e crescimento (ex: Nitrogênio, Fósforo, Potássio).",
    ],
  },
];

function Revolucoes() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null); 
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_reino_plantae");
    if (saved) {
      const savedProgresso = JSON.parse(saved);
      setProgresso(savedProgresso);
    }

    const savedGrifos = localStorage.getItem("grifos_reino_plantae");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    plantaeData.forEach(item => { 
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
    const total = plantaeData.length; 
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
    localStorage.setItem("progresso_reino_plantae", JSON.stringify(novoProgresso)); 
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_reino_plantae", JSON.stringify(novoProgresso)); 
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  // Ajuste na função grifarTexto para as novas chaves de aba
  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_reino_plantae", JSON.stringify(novosGrifos)); 
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
          <span className="titulo-animado">Explorando o Reino Plantae</span>
          <div className="subtitulo-principal">Descubra o mundo das plantas com o Gabarita Mente!</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {plantaeData.map(item => ( 
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
          <h2 className="resumo-titulo">Resumo do Reino Plantae</h2>
          <p className="resumo-descricao">
            O Reino Plantae, ou Reino Vegetal, engloba uma vasta diversidade de organismos, desde pequenos musgos até árvores imponentes. São seres eucariontes, pluricelulares e, em sua maioria, autótrofos fotossintetizantes, ou seja, produzem seu próprio alimento utilizando a luz solar. As plantas são cruciais para a vida na Terra, responsáveis pela produção de oxigênio, servindo como base para inúmeras cadeias alimentares e fornecendo recursos essenciais para os seres humanos.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Principais Características:</h3>
              <ul>
                <li><strong>Eucariontes e Pluricelulares:</strong> Células com núcleo definido e organização multicelular.</li>
                <li><strong>Autótrofos Fotossintetizantes:</strong> Produzem seu alimento via fotossíntese, utilizando clorofila.</li>
                <li><strong>Parede Celular:</strong> Composta principalmente por celulose, conferindo rigidez.</li>
                <li><strong>Reserva Energética:</strong> Principalmente amido.</li>
                <li><strong>Alternância de Gerações:</strong> Ciclo de vida com fases gametofítica (n) e esporofítica (2n).</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Grupos Principais:</h3>
              <ul>
                <li><strong>Briófitas:</strong> Plantas avasculares (ex: musgos, hepáticas).</li>
                <li><strong>Pteridófitas:</strong> Plantas vasculares sem sementes (ex: samambaias, avencas).</li>
                <li><strong>Gimnospermas:</strong> Plantas vasculares com sementes nuas (ex: pinheiros, araucárias).</li>
                <li><strong>Angiospermas:</strong> Plantas vasculares com flores e sementes protegidas por frutos (maioria das plantas).</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Importância Vital:</h3>
                <p>As plantas são a base da vida, produzindo oxigênio, alimento, abrigo, medicamentos e regulando o clima. Estudar o Reino Plantae é entender os fundamentos dos ecossistemas e da nossa própria existência.</p>
            </div>
          </div>
          <div className="dica-vestibular">
            <h3>Dica para o vestibular:</h3>
            <p>Para o Reino Plantae, foque nas características distintivas de cada grupo (Briófitas, Pteridófitas, Gimnospermas e Angiospermas), seus ciclos reprodutivos (especialmente a alternância de gerações) e as novidades evolutivas de cada um (vasos condutores, sementes, flores, frutos).</p>
          </div>
        </div>

        {plantaeData.map((item) => ( 
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

                  {/* Conteúdo da Aba 1 */}
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
                      )) : <p className={grifos[`${item.id}-aba2`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba2')}>{item.aba2Conteudo}</p> }
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
                      )) : <p className={grifos[`${item.id}-aba3`] ? 'grifado' : ''} onClick={() => grifarTexto(item.id, 'aba3')}>{item.aba3Conteudo}</p> }
                    </ul>
                  </div>
                  
                  <div className="dica-box">
                    <h4>Atenção!</h4>
                    <p>Este grupo de plantas é frequentemente cobrado em provas, especialmente suas características distintivas e novidades evolutivas.</p>
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

export default Revolucoes; 