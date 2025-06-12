import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Css/Demografia.css";
import "../Geografia.jsx";

const demografiaData = [
  {
    id: "conceitos-basicos",
    titulo: "🌍 Conceitos Básicos",
    descricao: 
      "Demografia é a ciência que estuda as populações humanas, suas dinâmicas, características e distribuição espacial. Busca compreender processos como natalidade, mortalidade, migração e crescimento populacional.",
    causas: [
      "Natalidade: Número de nascimentos em um determinado período.",
      "Mortalidade: Número de óbitos registrados em uma população.",
      "Migração: Deslocamento de indivíduos entre diferentes regiões.",
      "Crescimento Populacional: Diferença entre natalidade e mortalidade, acrescida do saldo migratório.",
    ],
    consequencias: [
      "Impacto nas políticas públicas, como saúde, educação e infraestrutura.",
      "Mudanças na composição etária e na estrutura social.",
      "Pressão sobre recursos naturais e meio ambiente.",
    ],
    imagem: "https://static.todamateria.com.br/upload/de/mo/demografia-og.jpg",
  },
  {
    id: "transicao-demografica",
    titulo: "📈 Transição Demográfica",
    descricao:
      "A transição demográfica é um modelo que descreve a transformação das populações de altas taxas de natalidade e mortalidade para taxas reduzidas, resultando em mudanças significativas no crescimento populacional.",
    causas: [
      "Melhorias nas condições sanitárias e de saúde pública.",
      "Acesso ampliado à educação, principalmente feminina.",
      "Urbanização e industrialização.",
      "Adoção de métodos contraceptivos.",
    ],
    consequencias: [
      "Redução das taxas de fecundidade e crescimento populacional.",
      "Envelhecimento populacional.",
      "Mudanças na estrutura econômica e social.",
      "Necessidade de políticas de previdência e assistência à população idosa.",
    ],
    imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/04/ilustracao-de-tres-piramides-etarias-como-representacao-da-teoria-da-transicao-demografica.jpg",
  },
  {
    id: "piramide-etaria",
    titulo: "🏛️ Pirâmide Etária",
    descricao:
      "Pirâmides etárias representam a distribuição da população por idade e sexo, permitindo a análise das características demográficas e sociais de uma região.",
    causas: [
      "Altas taxas de natalidade produzem bases largas nas pirâmides.",
      "Redução na mortalidade aumenta a expectativa de vida.",
      "Fatores culturais, sociais e econômicos influenciam as faixas etárias.",
    ],
    consequencias: [
      "Populações jovens: maior necessidade de investimentos em educação e emprego.",
      "Populações envelhecidas: maior demanda por serviços de saúde e previdência.",
      "Planejamento urbano e social direcionado às necessidades etárias.",
    ],
    imagem: "https://static.todamateria.com.br/upload/pi/ra/piramide-etaria-og.jpg?class=ogImageWide",
  },
  {
    id: "migracoes",
    titulo: "🚶 Migrações",
    descricao:
      "Migração é o deslocamento de pessoas de uma região para outra, podendo ocorrer dentro de um mesmo país (migração interna) ou entre países (migração internacional).",
    causas: [
      "Fatores econômicos: busca por melhores condições de vida e emprego.",
      "Fatores políticos: conflitos, perseguições ou instabilidade.",
      "Fatores ambientais: desastres naturais, mudanças climáticas.",
      "Fatores sociais: redes familiares e culturais.",
    ],
    consequencias: [
      "Alterações na composição populacional das regiões.",
      "Desafios na integração de migrantes e refugiados.",
      "Impactos econômicos e sociais nas áreas de origem e destino.",
      "Crescimento de áreas urbanas e formação de periferias.",
    ],
    imagem: "https://jornal.usp.br/wp-content/uploads/2023/07/20230713_deslocamentoamericas.jpg",
  },
  {
    id: "desafios-populacionais",
    titulo: "⚖️ Desafios Populacionais",
    descricao:
      "O crescimento e as transformações populacionais geram desafios para governos e sociedades, exigindo políticas públicas eficazes para garantir qualidade de vida e desenvolvimento sustentável.",
    causas: [
      "Superpopulação em determinadas regiões.",
      "Envelhecimento populacional.",
      "Desigualdades socioeconômicas e de acesso a serviços.",
      "Degradação ambiental causada pela pressão demográfica.",
    ],
    consequencias: [
      "Necessidade de políticas de planejamento familiar.",
      "Promoção de políticas de inclusão social e econômica.",
      "Investimentos em infraestrutura, saúde e educação.",
      "Adoção de práticas de desenvolvimento sustentável.",
    ],
    imagem: "https://www.ecodebate.com.br/wp-content/uploads/2012/08/2673-2.jpg",
  },
];

function Demografia() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [itemAtivo, setItemAtivo] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("progresso_demografia");
    if (saved) setProgresso(JSON.parse(saved));

    const initialActiveTabs = {};
    demografiaData.forEach(item => {
      initialActiveTabs[item.id] = 'conceito';
    });
    setActiveTab(initialActiveTabs);
  }, []);

  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso, demografiaData]);

  const atualizarProgressoGeral = () => {
    const total = demografiaData.length;
    const concluidos = Object.values(progresso).filter(v => v).length;
    const percent = Math.round((concluidos / total) * 100);
    setProgressoTotal(percent);
  };

  const marcarComoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: true };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_geologia", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };

  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_geologia", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado.', 'info');
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
          <span className="titulo-animado">Estudos Demográficos</span>
          <div className="subtitulo-principal">Explore os principais temas da Demografia</div>
        </h1>

        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>

        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {demografiaData.map(item => (
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

        {demografiaData.map((item) => (
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
                      Fatores
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'consequencias')}
                    >
                      Impactos
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
                      >
                        Remover Conclusão
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}

export default Demografia;
