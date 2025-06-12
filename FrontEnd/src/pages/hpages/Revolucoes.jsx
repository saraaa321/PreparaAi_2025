import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Css/Revolucoes.css";
import "../Historia.jsx";
 
const revolucoesData = [
  {
    id: "revolucao-inglesa",
    titulo: "⚔️ Revolução Inglesa (1642–1651)",
    descricao:
      "A Revolução Inglesa foi um processo revolucionário do século XVII formado por duas etapas, a Revolução Puritana (1640-1649) e a Revolução Gloriosa (1688), resultando na instalação de uma monarquia de bases liberais na Inglaterra. Ela pode ser percebida como uma das primeiras manifestações da crise do Antigo Regime, pautado no absolutismo monárquico, e pode ser considerada como a primeira revolução burguesa na Europa. Ao final da Revolução Inglesa, a burguesia havia aumentado a sua influência política e implementado leis que possibilitaram a consolidação e hegemonia do capitalismo inglês."
,
    causas: [
      "Conflito entre o absolutismo do rei Carlos I e o Parlamento.",
      "Imposição de impostos sem consentimento parlamentar.",
      "Tentativas do rei de impor o anglicanismo aos puritanos.",
      "Repressão à liberdade religiosa e política.",
      "Ascensão da burguesia e dos puritanos, que exigiam participação no poder.",
      "Criação do Exército de Novo Tipo por Oliver Cromwell.",
    ],
    consequencias: [
      "Execução do rei Carlos I.",
      "Implantação temporária da República (Protetorado de Cromwell).",
      "Retorno da monarquia com Carlos II sob novas limitações.",
      "Revolução Gloriosa (1688): deposição de Jaime II sem derramamento de sangue.",
      "Assinatura do Bill of Rights (1689): início da monarquia constitucional.",
      "Fortalecimento do Parlamento e da burguesia inglesa.",
    ],
    imagem: "https://i0.wp.com/radio.ufpa.br/wp-content/uploads/2018/03/Rev.%20inglesa.jpg?fit=640%2C430&ssl=1",
  },
  {
    id: "revolucao-americana",
    titulo: "🗽 Revolução Americana (1775–1783)",
    descricao:
      "A Revolução Americana é também conhecida como a independência dos Estados Unidos e foi declarada em 4 de julho de 1776. Com esse processo, houve a separação das Treze Colônias da América do Norte do vínculo colonial que existia desde meados do século XVII e a transformação dos Estados Unidos em uma nação independente, com um sistema republicano e federalista. Apesar de baseada nos ideais iluministas, que pregavam ideais de liberdade e de igualdade de direitos, a independência dos Estados Unidos foi realizada pela elite colonial e visava à garantia dos interesses e privilégios dessa classe. Ela serviu de inspiração para outros movimentos semelhantes na América.",
 
    causas: [
      "Imposição de taxas abusivas pela Inglaterra (Lei do Selo, Lei do Açúcar, Lei do Chá).",
      "Falta de representação das colônias no Parlamento Britânico ('No taxation without representation').",
      "Repressão militar britânica sobre atos coloniais (ex: Massacre de Boston).",
      "Influência do Iluminismo e das ideias de liberdade e autodeterminação.",
      "Desejo de autonomia política e econômica pelas elites coloniais.",
    ],
    consequencias: [
      "Independência dos Estados Unidos (1776).",
      "Elaboração da Constituição americana com princípios liberais.",
      "Inspiração para movimentos de independência na América Latina.",
      "Criação de um novo modelo republicano baseado na separação dos poderes.",
      "Declínio do colonialismo britânico nas Américas.",
    ],
    imagem: "https://www.infoescola.com/wp-content/uploads/2017/05/revolucao-americana.jpg",
  },
  {
    id: "revolucao-francesa",
    titulo: "🗼 Revolução Francesa (1789–1799)",
    descricao:
      "A Revolução Francesa teve causas gerais comuns a todas as revoluções do Ocidente no final do século XVIII e causas particulares que explicam por que foi de longe a mais violenta e a mais universalmente significativa dessas revoluções. A primeira das causas gerais foi a estrutura social do Ocidente. O regime feudal havia sido enfraquecido passo a passo e já havia desaparecido em partes da Europa . A elite cada vez mais numerosa e próspera de plebeus ricos — comerciantes, fabricantes e profissionais, frequentemente chamados de burguesia — aspirava ao poder político nos países onde ainda não o possuía. Os camponeses , muitos dos quais possuíam terras, haviam alcançado um padrão de vida e educação melhorados e queriam se livrar dos últimos vestígios do feudalismo para adquirir todos os direitos dos proprietários de terras e serem livres para aumentar suas propriedades. Além disso, a partir de cerca de 1730, padrões de vida mais elevados reduziram consideravelmente a taxa de mortalidade entre os adultos. Isso, juntamente com outros fatores, levou a um aumento da população da Europa sem precedentes em vários séculos: ela dobrou entre 1715 e 1800. Para a França, que com 26 milhões de habitantes em 1789 era o país mais populoso da Europa, o problema era mais agudo .",
    causas: [
      "Desigualdade social entre os três estados (clero, nobreza e povo).",
      "Graves crises econômicas e escassez de alimentos.",
      "Cobrança de altos impostos sobre o Terceiro Estado.",
      "Influência das ideias iluministas (liberdade, igualdade e fraternidade).",
      "Gastança da corte de Luís XVI e Maria Antonieta.",
      "Fracasso das reformas moderadas propostas pela monarquia.",
    ],
    consequencias: [
      "Fim da monarquia absolutista e execução de Luís XVI e Maria Antonieta.",
      "Proclamação da República Francesa.",
      "Declaração dos Direitos do Homem e do Cidadão.",
      "Ascensão de Napoleão Bonaparte.",
      "Inspiração para revoltas e movimentos liberais na Europa e América Latina.",
      "Fim do sistema feudal na França.",
    ],
    imagem: "https://static.historiadomundo.com.br/2021/05/revolucao-francesa.jpg",
  },
  {
    id: "revolucao-industrial",
    titulo: "⚙️ Revolução Industrial (séculos XVIII e XIX)",
    descricao:
      "Revolução Industrial , na história moderna, aprocesso de mudança de uma economia agrária e artesanal para uma dominada pela indústria e pela manufatura mecanizada . Essas mudanças tecnológicas introduziram novas formas de trabalhar e viver e transformaram fundamentalmente a sociedade. Esse processo começou na Grã-Bretanha no século XVIII e, a partir daí, espalhou-se para outras partes do mundo. Embora usado anteriormente por escritores franceses, o termo Revolução Industrial foi popularizado pela primeira vez pelo historiador econômico inglêsArnold Toynbee (1852-1883) para descrever o desenvolvimento econômico da Grã-Bretanha de 1760 a 1840. Desde a época de Toynbee, o termo tem sido aplicado de forma mais ampla como um processo de transformação econômica do que como um período em um contexto específico. Isso explica por que algumas regiões, como China e Índia , só iniciaram suas primeiras revoluções industriais no século XX, enquanto outras, como os Estados Unidos e a Europa Ocidental , começaram a passar por segundas revoluções industriais no final do século XIX.",
    causas: [
      "Acúmulo de capitais oriundos do comércio colonial e da exploração.",
      "Disponibilidade de mão de obra abundante (êxodo rural).",
      "Invenções tecnológicas como a máquina a vapor e o tear mecânico.",
      "Existência de matérias-primas como carvão e ferro.",
      "Política liberal do governo inglês, favorável ao empresariado.",
    ],
    consequencias: [
      "Aumento da produção e da produtividade.",
      "Expansão do capitalismo e das cidades industriais.",
      "Surgimento da classe operária (proletariado).",
      "Condições precárias de trabalho e vida urbana.",
      "Fortalecimento do imperialismo e da exploração colonial.",
      "Movimentos trabalhistas e luta por direitos sociais.",
    ],
    imagem: "https://www.sohistoria.com.br/resumos/revolucaoindustrial_clip_image001.jpg",
  },
  {
    id: "revolucao-russa",
    titulo: "☭ Revolução Russa (1917)",
    descricao:
      "Foi um movimento político e social que derrubou o regime czarista na Rússia e deu início ao primeiro Estado socialista do mundo, liderado pelo Partido Bolchevique e por Vladimir Lênin. A Revolução Russa foi um evento definidor do século 20, cujo impacto repercute até os dias atuais. Marcada por dois grandes atos – a revolução de fevereiro e a revolução de outubro, ambas no ano de 1917 – foi motivada por fatores como a primeira grande guerra, a economia, o descontentamento e a desorganização do aparato estatal russo. Fruto de revoltas campesinas e greves industriais que ocorriam desde 1914, a revolução de fevereiro resultou na queda do regime autocrático do Czar Nicolau II, na formação de um governo provisório e no retorno dos sovietes para o cenário político russo. Já a revolução de outubro refletiu a incapacidade do governo provisório de atender às demandas populares – comida, terra, aumento de salários e fim da guerra – o que possibilitou a tomada de poder dos bolcheviques, liderados por Vladimir Lenin, em 25 de outubro de 1917.",
    causas: [
      "Desigualdade extrema entre camponeses, operários e aristocracia.",
      "Derrotas militares e crises durante a Primeira Guerra Mundial.",
      "Fome, inflação e falta de liberdades políticas.",
      "Fracasso das reformas do czar Nicolau II.",
      "Influência das ideias socialistas e marxistas.",
      "Organização política dos sovietes (conselhos populares).",
    ],
    consequencias: [
      "Queda do czarismo e fim da dinastia Romanov.",
      "Tomada do poder pelos bolcheviques em outubro de 1917.",
      "Guerra civil entre vermelhos (socialistas) e brancos (monarquistas).",
      "Criação da União Soviética (URSS) em 1922.",
      "Nacionalização da economia e dos meios de produção.",
      "Influência sobre movimentos comunistas no mundo todo.",
    ],
    imagem: "https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-1nfnxod.jpg",
  },
  {
    id: "revolucao-chinesa",
    titulo: "🐉 Revolução Chinesa (1949)",
    descricao:
      "A Revolução Chinesa, concluída em 1949, foi liderada por Mao Tsé-Tung e marcou a vitória do Partido Comunista Chinês sobre o governo nacionalista do Kuomintang, encerrando décadas de guerra civil. Com a proclamação da República Popular da China, o país passou por profundas transformações sociais, políticas e econômicas, inspiradas no modelo soviético. As reformas incluíram a coletivização das terras, a estatização da economia e campanhas como o Grande Salto Adiante e a Revolução Cultural, que buscavam consolidar o comunismo e eliminar elementos considerados burgueses. A revolução deu início ao regime comunista na China e teve grande impacto geopolítico no contexto da Guerra Fria.",
    causas: [
      "Dominação estrangeira e guerras contra o Japão.",
      "Desigualdade social e pobreza extrema no campo.",
      "Fracassos do governo nacionalista (Kuomintang).",
      "Apoio popular ao Partido Comunista Chinês (PCC).",
      "Liderança carismática de Mao Tsé-Tung.",
      "Guerra civil entre comunistas e nacionalistas (1927–1949).",
    ],
    consequencias: [
      "Criação da República Popular da China (1949).",
      "Reformas agrárias e estatização da economia.",
      "Conflitos internos como o Grande Salto Adiante e a Revolução Cultural.",
      "Isolamento internacional inicial da China.",
      "Crescimento do poderio comunista na Ásia.",
      "Transformação da China em potência política e econômica nas décadas seguintes.",
    ],
    imagem: "https://i0.wp.com/marxismo.org.br/wp-content/uploads/2015/10/cropped-30revolucao.jpg?fit=483%2C272&ssl=1",
  },
  {
    id: "revolucao-cubana",
    titulo: "⭐ Revolução Cubana (1953–1959)",
    descricao:
      "A independência de Cuba, conquistada em 1898 após a guerra entre Estados Unidos e Espanha, marcou o início da forte influência norte-americana sobre a ilha. Por meio da Emenda Platt, imposta pelos EUA à Constituição cubana, os americanos passaram a intervir diretamente nos assuntos internos do país. Essa tutela incluiu a instalação de uma base naval em Guantánamo em 1903 e o domínio sobre setores estratégicos da economia, como a produção de açúcar, o turismo, os cassinos e as indústrias leves. Na década de 1950, os EUA controlavam grande parte da economia cubana, sendo responsáveis por cerca de 80% das importações do país.",
    causas: [
      "Ditadura corrupta e repressiva de Fulgencio Batista.",
      "Desigualdade social e miséria nas zonas rurais.",
      "Domínio econômico dos Estados Unidos em Cuba.",
      "Nacionalismo e sentimento anti-imperialista.",
      "Apoio popular ao Movimento 26 de Julho liderado por Fidel Castro.",
      "Guerrilhas bem organizadas nas zonas montanhosas.",
    ],
    consequencias: [
      "Queda do regime de Batista e ascensão de Fidel ao poder.",
      "Nacionalização de empresas e reforma agrária.",
      "Alinhamento de Cuba com a União Soviética.",
      "Bloqueio econômico imposto pelos EUA.",
      "Tensões como a Crise dos Mísseis (1962).",
      "Educação e saúde universalizadas, mas com autoritarismo político.",
    ],
    imagem: "https://www.politize.com.br/wp-content/uploads/2024/07/fidel-castro-che-guevara-revolucao-cubana.jpg",
  },
  {
    id: "revolucao-iraniana",
    titulo: "🕌 Revolução Iraniana (1979)",
    descricao:
      "A Revolução Iraniana ocorreu em 1979 e resultou na queda do xá Reza Pahlavi, apoiado pelos Estados Unidos, pondo fim à monarquia no Irã. O movimento foi liderado pelo aiatolá Ruhollah Khomeini, que estabeleceu uma república islâmica baseada na sharia (lei islâmica). A revolução teve forte caráter religioso, mas também contou com a insatisfação popular diante da repressão política, da desigualdade social e da influência ocidental sobre o país. A partir de então, o Irã passou a ser governado por líderes religiosos, rompendo laços com os EUA e adotando uma política antiocidental.",
    causas: [
      "Autoritarismo e repressão política do regime do xá.",
      "Desigualdade social e corrupção governamental.",
      "Ocidentalização forçada da sociedade islâmica.",
      "Críticas ao alinhamento com os Estados Unidos.",
      "Apoio religioso à liderança do aiatolá Khomeini.",
      "Mobilização popular em massa nas ruas.",
    ],
    consequencias: [
      "Queda da monarquia do xá e fuga para o exterior.",
      "Criação da República Islâmica do Irã.",
      "Implantação da sharia (lei islâmica) como base do Estado.",
      "Rompimento com os EUA e crise dos reféns em 1979.",
      "Censura e repressão a opositores políticos.",
      "Influência sobre outros movimentos islâmicos no Oriente Médio.",
    ],
    imagem: "https://editoraunesp.com.br/blog/icone/para-compreender-a-revolucao-iraniana",
  },
];
 
function Revolucoes() {
  const navigate = useNavigate();
  const [progresso, setProgresso] = useState({});
  const [grifos, setGrifos] = useState({});
  const [revolucaoAtiva, setRevolucaoAtiva] = useState(null);
  const [progressoTotal, setProgressoTotal] = useState(0);
  const [activeTab, setActiveTab] = useState({});
 
  useEffect(() => {
    const saved = localStorage.getItem("progresso_revolucoes");
    if (saved) {
      const savedProgresso = JSON.parse(saved);
      setProgresso(savedProgresso);
    }
 
    const savedGrifos = localStorage.getItem("grifos_revolucoes");
    if (savedGrifos) {
      setGrifos(JSON.parse(savedGrifos));
    }
 
    const initialActiveTabs = {};
    revolucoesData.forEach(rev => {
      initialActiveTabs[rev.id] = 'conceito';
    });
    setActiveTab(initialActiveTabs);
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
 
    atualizarProgressoGeral();
  }, []);
 
  useEffect(() => {
    atualizarProgressoGeral();
  }, [progresso]);
 
  const atualizarProgressoGeral = () => {
    const total = revolucoesData.length;
    const concluidos = Object.values(progresso).filter(value => value === true).length;
    const calculatedProgress = Math.round((concluidos / total) * 100);
    setProgressoTotal(calculatedProgress);
 
    localStorage.setItem("progresso", calculatedProgress.toString()); // Ensure it's stored as a string
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
    localStorage.setItem("progresso_revolucoes", JSON.stringify(novoProgresso));
    showNotification('✓ Conteúdo marcado como concluído!', 'success');
  };
 
  const marcarComoNaoConcluido = (id) => {
    const novoProgresso = { ...progresso, [id]: false };
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_revolucoes", JSON.stringify(novoProgresso));
    showNotification('✗ Conteúdo desmarcado como concluído.', 'info');
  };
 
  const grifarTexto = (id, tipo, index) => {
    const grifoKey = `${id}-${tipo}-${index !== undefined ? index : 'descricao'}`;
    const novosGrifos = { ...grifos, [grifoKey]: !grifos[grifoKey] };
    setGrifos(novosGrifos);
    localStorage.setItem("grifos_revolucoes", JSON.stringify(novosGrifos));
  };
 
  const toggleRevolucaoAtiva = (id) => {
    if (revolucaoAtiva === id) {
      setRevolucaoAtiva(null);
    } else {
      setRevolucaoAtiva(id);
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
 
  const handleTabClick = (revolucaoId, tabName) => {
    setActiveTab(prev => ({ ...prev, [revolucaoId]: tabName }));
  };
 
  const voltar = () => {
    navigate('/');
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
          <i></i> Voltar
        </button>
        </div>
 
        <h1 className="titulo-principal">
          <span className="titulo-animado">Revoluções Importantes</span>
          <div className="subtitulo-principal">Com o Gabarita você passa!</div>
        </h1>
 
        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progressoTotal}%</p>
          <div className="progress-fill-overall" style={{ width: `${progressoTotal}%` }}></div>
        </div>
 
        <div className="revolucoes-nav">
          <div className="nav-buttons">
            {revolucoesData.map(rev => (
              <button
                key={rev.id}
                className={`nav-button ${revolucaoAtiva === rev.id ? 'active' : ''} ${progresso[rev.id] ? 'completed' : ''}`}
                onClick={() => toggleRevolucaoAtiva(rev.id)}
              >
                {rev.titulo.split(' ')[0]}
                {progresso[rev.id] && <span className="check-icon">✓</span>}
              </button>
            ))}
          </div>
        </div>
 
        <div className="resumo-card">
          <h2 className="resumo-titulo">Resumo das Revoluções</h2>
          <p className="resumo-descricao">
            O conceito de revolução é entendido, comumente, como uma transformação radical de determinada estrutura política, social, econômica, cultural ou tecnológica, isto é, tudo o que diz respeito à vida humana. Tal conceito é fundamental para se entender os períodos históricos moderno e contemporâneo. Acontecimentos como Revolução Inglesa, Revolução Industrial, Revolução Francesa, Revolução Russa, Revolução Chinesa, etc., dão prova da importância desse conceito. Cabe ressaltar, entretanto, que nem sempre a palavra revolução foi utilizada para designar fenômenos de transformação radical da esfera humana, isto é, da relação entre os homens. Ao contrário, originalmente, revolução nada mais significava que translação – fazia parte, portanto, da linguagem astronômica.
          </p>
 
          <div className="resumo-topics">
            <div className="resumo-topic">
              <h3>O que são revoluções?</h3>
              <p>Em ciência política, Revolução é uma mudança abrupta e duradoura no poder político ou na organização estrutural de uma determinada sociedade, normalmente devido à percepção de incompetência política do grupo dominante, ineficiência da burocracia estatal vigente ou uma circunstância de opressão social e econômica.</p>
            </div>
 
            <div className="resumo-topic">
              <h3>Tipos de revoluções:</h3>
              <ul>
                <li><strong>Políticas:</strong> Transformam sistemas de governo (Ex: Francesa, Russa)</li>
                <li><strong>Sociais:</strong> Alteram estruturas de classes (Ex: Cubana, Chinesa)</li>
                <li><strong>Econômicas:</strong> Modificam sistemas produtivos (Ex: Industrial)</li>
                <li><strong>Culturais/Religiosas:</strong> Transformam valores e crenças (Ex: Iraniana)</li>
              </ul>
            </div>
 
            <div className="resumo-topic">
              <h3>Conceitos importantes:</h3>
              <ul>
                <li><strong>Liberalismo:</strong> Presente nas revoluções Inglesa, Americana e Francesa</li>
                <li><strong>Socialismo:</strong> Base ideológica das revoluções Russa, Chinesa e Cubana</li>
                <li><strong>Nacionalismo:</strong> Componente importante nas revoluções de independência</li>
                <li><strong>Industrialização:</strong> Processo que transformou a economia global</li>
              </ul>
            </div>
          </div>
 
          <div className="dica-vestibular">
            <h3>Dica para o vestibular:</h3>
            <p>Ao comparar revoluções, analise sempre: contexto histórico, causas estruturais, atores sociais envolvidos, ideologias predominantes e consequências de curto e longo prazo.</p>
          </div>
        </div>
 
        {revolucoesData.map((rev) => (
          <section
            key={rev.id}
            id={rev.id}
            className={`revolucao-box ${revolucaoAtiva === rev.id ? 'active' : ''} ${progresso[rev.id] ? 'completed' : ''}`}
          >
            <div className="revolucao-header" onClick={() => toggleRevolucaoAtiva(rev.id)}>
              <h2>{rev.titulo}</h2>
              <div className="expand-icon">{revolucaoAtiva === rev.id ? '−' : '+'}</div>
            </div>
 
            {revolucaoAtiva === rev.id && (
              <div className="revolucao-content">
                <div className="revolucao-media">
                  <img src={rev.imagem} alt={rev.titulo} className="revolucao-img" />
                  {progresso[rev.id] && <div className="completed-badge">Concluído</div>}
                </div>
 
                <div className="revolucao-info">
                  <div className="tabs">
                    <button
                      className={`tab-button ${activeTab[rev.id] === 'conceito' ? 'active' : ''}`}
                      onClick={() => handleTabClick(rev.id, 'conceito')}
                    >
                      Conceito
                    </button>
                    <button
                      className={`tab-button ${activeTab[rev.id] === 'causas' ? 'active' : ''}`}
                      onClick={() => handleTabClick(rev.id, 'causas')}
                    >
                      Causas
                    </button>
                    <button
                      className={`tab-button ${activeTab[rev.id] === 'consequencias' ? 'active' : ''}`}
                      onClick={() => handleTabClick(rev.id, 'consequencias')}
                    >
                      Consequências
                    </button>
                  </div>
 
                  <div className={`tab-content ${activeTab[rev.id] === 'conceito' ? 'active' : ''}`}>
                    <h3>Descrição</h3>
                    <p
                      className={`revolucao-descricao ${grifos[`${rev.id}-descricao`] ? 'grifado' : ''}`}
                      onClick={() => grifarTexto(rev.id, 'descricao')}
                    >
                      {rev.descricao}
                    </p>
 
                    <div className="dica-box">
                      <h4>Ponto importante:</h4>
                      <p>Este tema tem aparecido frequentemente em vestibulares como ENEM, Fuvest e Unicamp.</p>
                    </div>
                  </div>
 
                  <div className={`tab-content ${activeTab[rev.id] === 'causas' ? 'active' : ''}`}>
                    <h3>Causas:</h3>
                    <ul className="revolucao-lista">
                      {rev.causas.map((causa, index) => (
                        <li
                          key={index}
                          className={grifos[`${rev.id}-causa-${index}`] ? 'grifado' : ''}
                          onClick={() => grifarTexto(rev.id, 'causa', index)}
                        >
                          {causa}
                        </li>
                      ))}
                    </ul>
                  </div>
 
                  <div className={`tab-content ${activeTab[rev.id] === 'consequencias' ? 'active' : ''}`}>
                    <h3>Consequências:</h3>
                    <ul className="revolucao-lista">
                      {rev.consequencias.map((conseq, index) => (
                        <li
                          key={index}
                          className={grifos[`${rev.id}-conseq-${index}`] ? 'grifado' : ''}
                          onClick={() => grifarTexto(rev.id, 'conseq', index)}
                        >
                          {conseq}
                        </li>
                      ))}
                    </ul>
                  </div>
 
                  <div className="revolucao-actions">
                    <button
                      className={`btn-concluir ${progresso[rev.id] ? 'concluido' : ''}`}
                      onClick={() => marcarComoConcluido(rev.id)}
                      disabled={progresso[rev.id]}
                    >
                      {progresso[rev.id] ? "Conteúdo Concluído" : "Marcar como Concluído"}
                    </button>
                    {progresso[rev.id] && (
                      <button
                        className="btn-remover-concluido"
                        onClick={() => marcarComoNaoConcluido(rev.id)}
                      >Remover como Concluído
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