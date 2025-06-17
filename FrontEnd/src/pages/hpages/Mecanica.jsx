import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import "../css/Mecanica.css"; 
import "../Fisica.jsx"; 

const newtonData = [
  {
    id: "primeira-lei-newton",
    titulo: "📚 Primeira Lei de Newton (Lei da Inércia)",
    imagem: "https://s1.static.brasilescola.uol.com.br/be/2020/02/inercia.jpg", 
    aba1Titulo: "Conceito e Significado",
    aba1Conteudo:
      "A Primeira Lei de Newton, também conhecida como Lei da Inércia, afirma que um corpo em repouso tende a permanecer em repouso e um corpo em movimento tende a permanecer em movimento com velocidade constante e em linha reta, a menos que uma força externa atue sobre ele. Essencialmente, é a resistência de um corpo a mudar seu estado de movimento.",
    aba2Titulo: "Exemplos Cotidianos",
    aba2Conteudo: [
      "Ao frear bruscamente um carro, os passageiros são jogados para frente, tendendo a manter seu movimento original.",
      "Um objeto em repouso sobre uma mesa permanece em repouso, a menos que seja empurrado ou puxado.",
      "A dificuldade em iniciar o movimento de um objeto pesado, ou pará-lo quando em movimento.",
      "A sensação de ser 'colado' ao assento em um avião durante a decolagem.",
    ],
    aba3Titulo: "Inércia e Referenciais",
    aba3Conteudo: [
      "A inércia é uma propriedade intrínseca da matéria, proporcional à massa do objeto.",
      "A lei da inércia é válida em referenciais inerciais, ou seja, aqueles que estão em repouso ou se movendo com velocidade constante (sem aceleração).",
      "É o conceito fundamental para entender por que os objetos persistem em seu estado de movimento até que uma força atue.",
    ],
  },
  {
    id: "segunda-lei-newton",
    titulo: "💪 Segunda Lei de Newton (Princípio Fundamental da Dinâmica)",
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/02/forca-massa-e-aceleracao.jpg", 
    aba1Titulo: "Fórmula e Aplicação",
    aba1Conteudo:
      "A Segunda Lei de Newton estabelece a relação entre força, massa e aceleração. Ela é expressa pela fórmula da imagem ao lado, onde F é a força resultante aplicada a um corpo, m é a sua massa e a é a aceleração adquirida por ele. Isso significa que a aceleração de um objeto é diretamente proporcional à força resultante que age sobre ele e inversamente proporcional à sua massa.",
    aba2Titulo: "Vetores e Direção",
    aba2Conteudo: [
      "Tanto a força quanto a aceleração são grandezas vetoriais, possuindo módulo, direção e sentido.",
      "A aceleração sempre terá a mesma direção e sentido da força resultante.",
      "Se múltiplas forças atuam sobre um objeto, a força 'F' na fórmula é a força resultante (soma vetorial de todas as forças).",
      "Um objeto de maior massa requer uma força maior para produzir a mesma aceleração que um objeto de menor massa.",
    ],
    aba3Titulo: "Importância e Exemplos",
    aba3Conteudo: [
      "É a lei mais central da mecânica clássica, permitindo calcular o movimento de objetos sob a influência de forças.",
      "Permite prever o comportamento de sistemas mecânicos, desde a órbita de planetas até o movimento de um carro.",
      "Exemplos: A força necessária para empurrar um carrinho de supermercado vazio versus um cheio; a aceleração de uma bola de futebol após ser chutada.",
    ],
  },
  {
    id: "terceira-lei-newton",
    titulo: "🤝 Terceira Lei de Newton (Lei da Ação e Reação)",
    imagem: "https://s3.static.brasilescola.uol.com.br/be/2020/02/canhao-terceira-lei-de-newton.jpg", 
    aba1Titulo: "Interação e Pares de Forças",
    aba1Conteudo:
      "A Terceira Lei de Newton, ou Lei da Ação e Reação, afirma que para toda ação há uma reação igual e oposta. Isso significa que, quando um corpo exerce uma força sobre outro (ação), o segundo corpo exerce uma força de mesma intensidade e direção, mas em sentido contrário, sobre o primeiro (reação). As forças de ação e reação sempre atuam em pares e em corpos diferentes.",
    aba2Titulo: "Características dos Pares",
    aba2Conteudo: [
      "As forças de ação e reação nunca se cancelam porque atuam em corpos distintos.",
      "Elas têm a mesma natureza (ambas são de contato, ambas são gravitacionais, etc.).",
      "São simultâneas, ou seja, ocorrem ao mesmo tempo.",
      "Independentemente da massa dos corpos envolvidos, a intensidade das forças é sempre a mesma.",
    ],
    aba3Titulo: "Exemplos Práticos",
    aba3Conteudo: [
      "Ao empurrar uma parede (ação), a parede te empurra de volta com a mesma força (reação).",
      "Um foguete é impulsionado para cima pela expulsão de gases para baixo.",
      "Ao caminhar, você empurra o chão para trás (ação) e o chão te empurra para frente (reação).",
      "Um nadador empurra a água para trás (ação) e a água o empurra para frente (reação).",
    ],
  },
  {
    id: "gravitacao-universal",
    titulo: "🌌 Lei da Gravitação Universal",
    imagem: "https://slideplayer.com.br/slide/1268317/3/images/7/Lei+da+Gravita%C3%A7%C3%A3o+Universal.jpg", 
    aba1Titulo: "Atração entre Massas",
    aba1Conteudo:
      "Além das suas três leis do movimento, Newton formulou a Lei da Gravitação Universal, que descreve a atração entre quaisquer dois corpos que possuem massa. A lei afirma que a força de atração gravitacional entre dois objetos é diretamente proporcional ao produto de suas massas e inversamente proporcional ao quadrado da distância entre seus centros. A fórmula é a que está na imagem, onde G é a constante gravitacional universal.",
    aba2Titulo: "Constante Gravitacional e Campo",
    aba2Conteudo: [
      "A constante G é um valor muito pequeno, o que explica por que a força gravitacional é perceptível apenas em corpos de massa muito grande (como planetas).",
      "A gravidade cria um campo gravitacional ao redor de massas, que influencia o movimento de outros objetos dentro desse campo.",
      "É uma força de longo alcance, ou seja, atua mesmo a grandes distâncias.",
    ],
    aba3Titulo: "Implicações Astronômicas",
    aba3Conteudo: [
      "Esta lei foi fundamental para explicar o movimento dos planetas ao redor do Sol e das luas ao redor dos planetas, unificando a física terrestre e a celeste.",
      "Previu a existência de planetas ainda não observados na época.",
      "É a base para entender fenômenos como as marés e o peso dos objetos.",
      "Junto com as leis do movimento, forma a espinha dorsal da mecânica celeste.",
    ],
  },
  {
    id: "aplicacoes-leis-newton",
    titulo: "⚙️ Aplicações das Leis de Newton",
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxhvdqhze3xrrc4cg2ey60ne%2F1749724692_img_2.webp?st=2025-06-12T09%3A23%3A22Z&se=2025-06-18T10%3A23%3A22Z&sks=b&skt=2025-06-12T09%3A23%3A22Z&ske=2025-06-18T10%3A23%3A22Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=jsrqQblMd0nsTjR2ZOFBdAiZ8VSRppt1qEUn3SbzuGU%3D&az=oaivgprodscus", 
    aba1Titulo: "Engenharia e Tecnologia",
    aba1Conteudo:
      "As Leis de Newton são a base para grande parte da engenharia e da tecnologia modernas. Elas são essenciais no design e na análise de estruturas, máquinas, veículos e sistemas de transporte. Sem uma compreensão sólida dessas leis, seria impossível construir pontes seguras, projetar aviões eficientes ou desenvolver sistemas de freio eficazes.",
    aba2Titulo: "Esportes e Vida Cotidiana",
    aba2Conteudo: [
      "No esporte, entender as leis de Newton ajuda a otimizar o desempenho. Por exemplo, a força aplicada em uma bola, a aceleração de um corredor, ou a reação do solo ao saltar.",
      "No dia a dia, vemos suas aplicações ao andar de bicicleta, empurrar um carrinho de compras, ou até mesmo ao abrir uma porta (momento de força).",
      "Freios de carros, cintos de segurança e airbags são projetados com base nos princípios da inércia e da ação e reação.",
    ],
    aba3Titulo: "Exploração Espacial e Astronomia",
    aba3Conteudo: [
      "As leis de Newton são cruciais para calcular as trajetórias de foguetes e naves espaciais, permitindo viagens interplanetárias e o lançamento de satélites.",
      "A Lei da Gravitação Universal é usada para prever e entender as órbitas de corpos celestes, desde asteroides até galáxias.",
      "São a fundação para a mecânica celeste, que estuda o movimento de objetos no espaço.",
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
    const saved = localStorage.getItem("progresso_leis_newton");
    if (saved) {
      const savedProgresso = JSON.parse(saved);
      setProgresso(savedProgresso);
    }

    const savedGrifos = localStorage.getItem("grifos_leis_newton");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }

    const initialActiveTabs = {};
    newtonData.forEach(item => { 
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
    const total = newtonData.length; 
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
    localStorage.setItem("progresso_leis_newton", JSON.stringify(novoProgresso)); 
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_leis_newton", JSON.stringify(novoProgresso)); 
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };

  // Ajuste na função grifarTexto para as novas chaves de aba
  const grifarTexto = (id, abaKey, index) => {
    const grifoKey = `${id}-${abaKey}${index !== undefined ? '-' + index : ''}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_leis_newton", JSON.stringify(novosGrifos)); 
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
    navegate ("/SobreNos");
  };

  const handleLogout = () => {
    alert("Você saiu com sucesso.");
  };

  const handleTabClick = (itemId, tabName) => { 
    setActiveTab(prev => ({ ...prev, [itemId]: tabName }));
  };

  const voltar = () => {
    navigate('/Fisica');
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
          <span className="titulo-animado">Mecânica Clássica: Leis de Newton</span>
          <div className="subtitulo-principal">Desvende os princípios fundamentais do movimento com o Gabarita Mente!</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {newtonData.map(item => ( 
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
          <h2 className="resumo-titulo">Resumo das Leis de Newton</h2>
          <p className="resumo-descricao">
            As Leis de Newton são a base da mecânica clássica, um ramo da física que descreve o movimento dos objetos. Formuladas por Isaac Newton, essas três leis fundamentais, juntamente com a Lei da Gravitação Universal, explicam como as forças afetam o movimento de corpos e são aplicáveis desde o movimento de uma maçã caindo até a órbita de planetas.
          </p>
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>Principais Leis:</h3>
              <ul>
                <li><strong>Primeira Lei (Inércia):</strong> Um corpo permanece em seu estado de repouso ou de movimento retilíneo uniforme, a menos que seja compelido a mudar esse estado por forças impressas nele.</li>
                <li><strong>Segunda Lei ($F = m \\cdot a$):</strong> A força resultante que atua sobre um corpo é igual ao produto de sua massa pela aceleração que ele adquire.</li>
                <li><strong>Terceira Lei (Ação e Reação):</strong> Para toda ação, há uma reação igual e oposta. As forças de ação e reação atuam em corpos diferentes.</li>
                <li><strong>Lei da Gravitação Universal:</strong> Dois corpos quaisquer se atraem com uma força diretamente proporcional ao produto de suas massas e inversamente proporcional ao quadrado da distância entre seus centros.</li>
              </ul>
            </div>
            <div className="resumo-topic">
              <h3>Importância Fundamental:</h3>
                <p>As Leis de Newton são cruciais para entender e prever o movimento de objetos, sendo aplicadas em diversas áreas como engenharia, astronomia e esportes. Elas formam a espinha dorsal da física clássica e são a base para o desenvolvimento de muitas tecnologias modernas.</p>
            </div>
          </div>
          <div className="dica-vestibular">
            <h3>Dica para o vestibular:</h3>
            <p>Concentre-se em entender o conceito de cada lei, a fórmula da Segunda Lei, e a distinção entre massa e peso. Pratique a identificação de pares de ação e reação e as aplicações das leis em diferentes cenários.</p>
          </div>
        </div>

        {newtonData.map((item) => ( 
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
                    <p>As Leis de Newton são um tema recorrente em provas de física. Certifique-se de compreender cada uma delas e suas aplicações práticas!</p>
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