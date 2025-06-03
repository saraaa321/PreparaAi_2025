

import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "../Css/BrasilRepublica.css"; // Seus estilos originais serão usados aqui
import { useNavigate } from "react-router-dom"; // Importar useNavigate para o botão voltar
 
function BrasilRepublica() {
  const navigate = useNavigate(); // Hook para navegação
  const [progress, setProgress] = useState(0); // Progresso geral da matéria
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [progressoPorTopico, setProgressoPorTopico] = useState({}); // Progresso de cada tópico
 
  useEffect(() => {
    // Carrega o progresso geral da matéria
    const savedOverallProgress = localStorage.getItem("progresso_brasil_republica");
    if (savedOverallProgress) {
      setProgress(Number(savedOverallProgress));
    }
 
    // Carrega o progresso por tópico
    const savedTopicProgress = localStorage.getItem("progresso_brasil_republica_topicos");
    if (savedTopicProgress) {
      setProgressoPorTopico(JSON.parse(savedTopicProgress));
    }
  }, []);
 
  useEffect(() => {
    // Recalcula e salva o progresso geral sempre que um tópico é concluído/desconcluído
    const totalTopics = topics.length;
    const completedTopics = Object.values(progressoPorTopico).filter(value => value === true).length;
    const calculatedProgress = Math.round((completedTopics / totalTopics) * 100);
    setProgress(calculatedProgress);
    localStorage.setItem("progresso_brasil_republica", calculatedProgress.toString());
  }, [progressoPorTopico]);
 
 
  // Função para marcar/desmarcar um tópico como concluído
  const handleMarkTopicAsCompleted = (topicId) => {
    const newProgressoPorTopico = { ...progressoPorTopico, [topicId]: true };
    setProgressoPorTopico(newProgressoPorTopico);
    localStorage.setItem("progresso_brasil_republica_topicos", JSON.stringify(newProgressoPorTopico));
    alert(`Tópico "${topics.find(t => t.id === topicId)?.title}" marcado como concluído!`);
  };
 
  const handleUnmarkTopicAsCompleted = (topicId) => {
    const newProgressoPorTopico = { ...progressoPorTopico, [topicId]: false };
    setProgressoPorTopico(newProgressoPorTopico);
    localStorage.setItem("progresso_brasil_republica_topicos", JSON.stringify(newProgressoPorTopico));
    alert(`Tópico "${topics.find(t => t.id === topicId)?.title}" desmarcado como concluído.`);
  };
 
 
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
 
  // Função para lidar com a navegação de volta
  const handleGoBack = () => {
    navigate("/"); // Volta para a página inicial
  };
 
  // Adicionar IDs aos tópicos para controle de progresso individual
  const topics = [
    {
      id: "proclamacao-republica",
      title: "🌟 Proclamação da República",
      summary:
        "A Proclamação da República não foi um movimento popular, mas sim um golpe militar conduzido por setores descontentes com o Império.",
      details: (
        <>
          <p>
            <b>A Proclamação da República no Brasil</b> <br />A Proclamação da
            República aconteceu no dia 15 de novembro de 1889, marcando o fim do
            Império do Brasil e o início de um novo regime político: a República
            Federativa. O movimento foi liderado por militares do Exército,
            principalmente pelo marechal Deodoro da Fonseca, que depôs o
            imperador Dom Pedro II sem uso de violência ou guerra civil.
            <br />
            <b>Contexto histórico</b> <br />
            Durante o final do século XIX, o Império enfrentava diversos
            problemas. A abolição da escravidão em 1888, sem indenização aos
            donos de escravos, causou insatisfação na elite rural. O Exército,
            por sua vez, sentia-se desvalorizado e desprestigiado pelo governo
            imperial. Além disso, o crescimento das ideias republicanas e
            positivistas — influenciadas pelo filósofo Auguste Comte — ganhou
            força entre militares, intelectuais e setores urbanos.
            <br />
            <b>O 15 de novembro</b>
            <br />
            Na manhã do dia 15, o marechal Deodoro, mesmo doente, liderou um
            grupo de soldados que marchou até o quartel do Ministério da Guerra,
            no Rio de Janeiro, e destituiu o chefe do governo imperial, o
            Visconde de Ouro Preto. No mesmo dia, foi proclamada a República,
            encerrando a monarquia que havia durado 67 anos no Brasil. Dom Pedro
            II foi exilado com sua família para a Europa.
            <br />
            <b>O início da República </b> <br />
            Após a proclamação, foi formado um governo provisório liderado por
            Deodoro da Fonseca, que posteriormente se tornou o primeiro
            presidente do Brasil. O país passou a ser uma república federativa,
            inspirada no modelo dos Estados Unidos, com separação entre os
            poderes Executivo, Legislativo e Judiciário, e uma nova Constituição
            foi promulgada em 1891.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica_by_Benedito_Calixto_1893.jpg"
            alt="Proclamação da República - Deodoro da Fonseca"
            className="imagem-expandida"
          />
        </>
      ),
    },
    {
      id: "primeira-republica",
      title: "🏛️ Primeira República",
      summary:
        "A Primeira República consolidou um sistema político oligárquico e ruralista, dominado por oligarquias estaduais.",
      details: (
        <>
          <p>
            <br /> <b>A Primeira República (1889–1930)</b>
            <br />A Primeira República, também chamada de República Velha, foi o
            período da história do Brasil que vai de 1889, com a Proclamação da
            República, até 1930, quando Getúlio Vargas chegou ao poder por meio
            de um golpe. Esse período foi marcado pelo domínio das elites rurais
            e por um sistema político controlado pelos grandes fazendeiros,
            principalmente de São Paulo e Minas Gerais.
            <br />
            <b>Política dos governadores e café com leite </b>
            <br />A política da Primeira República era baseada em acordos entre
            as oligarquias estaduais. O principal desses acordos ficou conhecido
            como “política do café com leite”, pois São Paulo (produtor de
            café) e Minas Gerais (produtor de leite e gado) se alternavam no
            poder, garantindo os interesses dessas elites. Para manter o
            controle, usava-se a "política dos governadores", em que o
            presidente apoiava os governadores estaduais que, por sua vez,
            garantiam votos para os candidatos do governo. As eleições eram
            marcadas por fraudes, voto aberto e coronelismo, com o "voto de
            cabresto", onde os coronéis (líderes locais) controlavam os votos
            dos eleitores.
            <br />
            <b>Economia e sociedade </b>
            <br />A economia da Primeira República era agrária e exportadora,
            centrada no café, que representava a maior parte das exportações
            brasileiras. A industrialização ainda era muito limitada, embora
            começasse a crescer nas regiões urbanas do Sudeste. A sociedade era
            profundamente desigual. A maior parte da população vivia no campo,
            em condições precárias, sem acesso a educação, saúde ou direitos
            políticos. Operários urbanos, especialmente nas cidades do Sudeste,
            começaram a se organizar e fazer greves, exigindo melhores condições
            de trabalho e salários.
            <br />
            <b>Revoltas e movimentos sociais</b>
            <br />Apesar da aparência de estabilidade, o período foi marcado por
            várias revoltas populares, como: <br />
            <br />
            <i>
              Revolta da Vacina (1904) – contra a vacinação obrigatória no Rio
              de Janeiro;
            </i>
            <br />
            <br />
            <i>
              Revolta da Chibata (1910) – marujos da Marinha rebelaram-se
              contra os castigos físicos;
            </i>
            <br />
            <br />
            <i>
              Guerra de Canudos (1896–1897) – repressão brutal contra um grupo
              religioso no sertão da Bahia;
            </i>
            <br />
            <br />
            <i>
              Contestado (1912–1916) – conflito entre camponeses e forças do
              governo no sul do Brasil.
            </i>{" "}
            <br />
            <br />Esses movimentos mostram o descontentamento de várias camadas
            da população com o sistema político e social vigente.
            <br />
            <b>Fim da República Velha</b> <br />A crise da política do café com
            leite começou em 1930, quando o presidente Washington Luís rompeu o
            acordo e apoiou outro paulista como seu sucessor. Em resposta,
            Getúlio Vargas, apoiado por militares e pela Aliança Liberal,
            liderou uma revolução que pôs fim à Primeira República.
          </p>
          <img
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2024/10/pintura-retratando-a-assinatura-do-projeto-da-constituicao-de-1891-em-texto-sobre-brasil-republica.jpg"
            alt="Oligarquias da Primeira República"
            className="imagem-expandida"
          />
        </>
      ),
    },
    {
      id: "revolucao-1930",
      title: "🔥 Revolução de 1930",
      summary:
        "A Revolução de 1930 marcou a queda da velha ordem oligárquica e a ascensão de Getúlio Vargas.",
      details: (
        <>
          <p>
            A Revolução de 1930 foi um movimento político-militar que pôs fim à
            Primeira República no Brasil e deu início à chamada Era Vargas.
            Ocorreu em outubro de 1930 e marcou uma virada decisiva na história
            do país, encerrando o domínio das oligarquias rurais, especialmente
            de São Paulo e Minas Gerais.
            <br />
            <b>Causas da Revolução</b>
            <br />A insatisfação contra o sistema político da República Velha
            crescia cada vez mais. Alguns dos principais motivos para a
            revolução foram: Fraudes eleitorais e o controle das elites sobre o
            processo político, especialmente através da política do “café com
            leite”; Crise econômica provocada pela quebra da Bolsa de Nova York
            em 1929, que afetou a exportação de café, principal produto
            brasileiro; A decisão do presidente Washington Luís de romper o
            acordo com Minas Gerais e indicar Júlio Prestes, outro paulista,
            como seu sucessor; A formação da Aliança Liberal, composta por
            políticos da Paraíba, Rio Grande do Sul e Minas Gerais, que lançou
            Getúlio Vargas como candidato à presidência. Vargas perdeu a eleição
            de 1930 para Júlio Prestes, mas os aliados acusaram o governo de
            fraude. A situação se agravou com o assassinato de João Pessoa, vice
            de Vargas, em julho de 1930 — o que serviu como estopim para o
            início da revolução.
            <br />
            <b>O avanço revolucionário</b>
            <br />A revolução começou em 3 de outubro de 1930, com levantes
            armados no Sul, Nordeste e Centro-Oeste. As tropas revolucionárias
            avançaram rapidamente. O Exército regular, dividido e desgastado,
            não resistiu por muito tempo. Em 24 de outubro, um grupo de generais
            depôs Washington Luís no Rio de Janeiro, evitando um confronto
            maior. Vargas foi chamado ao poder por um governo provisório,
            encerrando 41 anos de República Velha.
            <br />
            <b>Consequências da Revolução</b>
            <br />A Revolução de 1930 inaugurou uma nova fase na política
            brasileira: Getúlio Vargas tornou-se chefe do Governo Provisório,
            com amplos poderes; O Congresso Nacional foi fechado, e a
            Constituição de 1891 foi suspensa; As elites de São Paulo perderam o
            monopólio do poder federal; Iniciou-se um processo de centralização
            do poder e de reformas sociais e econômicas; Surgiram os embriões de
            uma política trabalhista, com foco nos direitos dos trabalhadores
            urbanos.
          </p>
          <img
            src="https://www.jornaldocomercio.com/_midias/jpg/2020/12/22/800x600/1_reportagem_cultural_revolucao_de_30_foto_prefeitura_municipal_de_ouro_preto-9216471.jpg"
            alt="Getúlio Vargas na década de 1930"
            className="imagem-expandida"
          />
        </>
      ),
    },
    {
      id: "era-vargas-estado-novo",
      title: "🏗️ Era Vargas e Estado Novo",
      summary:
        "Getúlio Vargas governou o Brasil com forte centralização e criou importantes avanços sociais e econômicos.",
      details: (
        <>
          <p>
            <br />
            <b>A Era Vargas (1930–1945)</b>
            <br />A Era Vargas foi um dos períodos mais importantes da história
            do Brasil, marcado por transformações políticas, sociais e
            econômicas profundas. Vai de 1930 a 1945, começando com a Revolução
            de 1930 e terminando com a queda de Getúlio Vargas após o fim da
            Segunda Guerra Mundial.
            <br />
            <b>O Governo Provisório (1930–1934)</b>
            <br />Após assumir o poder com a Revolução de 1930, Getúlio Vargas
            governou inicialmente de forma provisória, sem Constituição e com
            poderes amplos. Ele dissolveu o Congresso Nacional e nomeou
            interventores (em vez de governadores) para os estados, rompendo com
            as oligarquias tradicionais. Durante esse período, Vargas começou a
            centralizar o poder e preparou o terreno para uma nova ordem
            institucional. Em 1932, estourou a Revolução Constitucionalista em
            São Paulo, exigindo a convocação de uma nova Constituição.
            Pressionado, Vargas convocou eleições para uma Assembleia
            Constituinte, que promulgou uma nova Constituição em 1934.
            <br />
            <b>O Governo Constitucional (1934–1937)</b>
            <br />Com a nova Constituição, Vargas foi eleito indiretamente
            presidente da República. Durante esse período, o país viveu uma
            forte polarização política entre dois grupos extremos: <br />
            <br />
            <li>
              <i>
                A AIB (Ação Integralista Brasileira), de inspiração
                fascista;
              </i>
            </li>
            <li>
              <i>
                A ANL (Aliança Nacional Libertadora), de esquerda, apoiada
                pelos comunistas.
              </i>
            </li>{" "}
            <br />
            Em 1935, Vargas enfrentou a Intentona Comunista, uma tentativa
            fracassada de revolução armada. Esse episódio foi usado como
            justificativa para aumentar a repressão e preparar o golpe que viria
            a seguir. <br />
            <br />
            <b>O Estado Novo (1937–1945)</b>
            <br />Em 1937, Vargas deu um golpe de Estado, cancelando as eleições
            e instaurando uma ditadura conhecida como Estado Novo. Ele usou como
            pretexto o Plano Cohen, um suposto plano comunista forjado para
            justificar o fechamento do regime. <br />
            Durante o Estado Novo, Vargas governou com poderes totais, fechou o
            Congresso, suspendeu partidos políticos e implantou uma nova
            Constituição autoritária. Foi um regime centralizador, nacionalista
            e marcado pela censura, repressão e controle dos meios de
            comunicação. Apesar do autoritarismo, Vargas implementou importantes
            reformas sociais e trabalhistas, como: <br />
            <li>
              <i>Criação da CLT (Consolidação das Leis do Trabalho);</i>
            </li>
            <li>
              <i>Estabelecimento do salário mínimo;</i>
            </li>
            <li>
              <i>Criação da carteira de trabalho;</i>
            </li>
            <li>
              <i>Leis de férias, jornada de trabalho e previdência social;</i>
            </li>
            <li>
              <i>
                Incentivo à industrialização e à criação de empresas estatais,
                como a Companhia Siderúrgica Nacional.
              </i>
            </li>{" "}
            <br />
            Fim do Estado Novo Com o fim da Segunda Guerra Mundial e a pressão
            por redemocratização, o regime de Vargas começou a perder apoio. Em
            1945, o próprio Exército exigiu sua saída. Vargas foi deposto em
            outubro daquele ano, mas manteve uma base popular forte, que o
            levaria de volta ao poder, democraticamente, em 1951.
          </p>
          <img
            src="https://memorialdademocracia.com.br/publico/image/10463"
            alt="Getúlio Vargas durante Estado Novo"
            className="imagem-expandida"
          />
        </>
      ),
    },
 
{
      id: "ditadura-militar",
      title: "⚔️ Ditadura Militar (1964-1985)",
      summary:
        "Período de regime autoritário marcado por censura, repressão e crescimento econômico desigual.",
      details: (
        <>
          <p>
            <br />
            <b>A Ditadura Militar no Brasil (1964–1985)</b>
            <br />A Ditadura Militar foi um regime autoritário que durou 21 anos,
            iniciado com o golpe de 31 de março de 1964, quando os militares
            tomaram o poder, derrubando o presidente João Goulart. Durante esse
            período, o país foi governado por cinco presidentes militares, sem
            eleições diretas, sob forte repressão política e censura, mas também
            marcado por crescimento econômico e grandes obras públicas.
            <br />
            <b>O Golpe de 1964</b>
            <br />João Goulart, também chamado de Jango, era acusado por setores
            conservadores de querer implantar o comunismo no Brasil. As suas
            propostas de reformas de base (como reforma agrária e educacional)
            assustaram a elite econômica, setores das Forças Armadas e os
            Estados Unidos, em plena Guerra Fria. Em 31 de março de 1964, os
            militares, com apoio de civis e da mídia, deram um golpe de Estado.
            Jango foi deposto e exilado, e o Brasil passou a ser governado por um
            regime militar, que suspendeu liberdades democráticas.
            <br />
            <b>Consolidação do Regime</b>
            <br />Os militares instituíram os Atos Institucionais (AIs) —
            decretos com força de lei. O mais famoso foi o AI-5, de 1968, que
            fechou o Congresso Nacional, suspendeu direitos políticos, permitiu
            prisões sem mandado judicial e instaurou a censura oficial à
            imprensa, artes e educação. Os opositores do regime foram
            perseguidos, presos, torturados ou mortos. Muitos foram forçados ao
            exílio. O período ficou marcado por violação dos direitos humanos.
            <br />
            <b>O "Milagre Econômico"</b>
            <br />Entre 1968 e 1973, o país viveu um período de forte
            crescimento econômico, conhecido como “milagre econômico
            brasileiro”. Houve grandes obras de infraestrutura, como: <br />
            <li>
              <i>A construção da Transamazônic</i>
            </li>
            <li>
              <i>A fundação da Zona Franca de Manaus;</i>
            </li>
            <li>
              <i>
                A criação de empresas estatais como a Petrobras e Eletrobras
                se fortaleceram;
              </i>
            </li>
            <li>
              <i>A construção das hidrelétricas de Itaipu e Tucuruí.</i>
            </li>{" "}
            <br />
            Porém, esse crescimento beneficiou poucos, aumentou a desigualdade
            social e gerou uma grande dívida externa.
            <br />
            <b>Abertura Política e Fim da Ditadura</b>
            <br />A partir do final dos anos 1970, com a crise econômica e
            pressão da sociedade, começou um processo lento de abertura,
            conhecido como "distensão", liderado pelos próprios militares.{" "}
            <br />
            Nos anos 1980, cresceram os movimentos sociais e democráticos, como a
            campanha das Diretas Já, que pedia o retorno das eleições diretas
            para presidente. Embora a emenda das Diretas tenha sido rejeitada, o
            movimento popular pressionou por mudanças. <br />
            Em 1985, o colégio eleitoral escolheu Tancredo Neves, candidato da
            oposição, como presidente. Ele faleceu antes de tomar posse, e seu
            vice, José Sarney, assumiu. Com isso, terminava oficialmente a
            Ditadura Militar e o país iniciava a redemocratização.
          </p>
          <img
            src="https://esquerdadiario.com/IMG/arton28207.jpg?1553693761"
            alt="Golpe Militar de 1964"
            className="imagem-expandida"
          />
        </>
      ),
    },
    {
      id: "constituicao-1988",
      title: "📜 Constituição de 1988 e Nova República",
      summary:
        "Com a Constituição de 1988, o Brasil retornou à democracia, garantindo direitos civis, sociais e políticos.",
      details: (
        <>
          <p>
            <br />
            <b>A Constituição de 1988 e a Nova República</b>
            <br />A Constituição de 1988, conhecida como “Constituição Cidadã”,
            marcou o retorno pleno da democracia no Brasil e deu início ao
            período chamado de Nova República. Esse novo capítulo da história
            brasileira começou após o fim da Ditadura Militar e se caracteriza
            por maior participação popular, garantia de direitos civis e
            sociais, e pela consolidação das instituições democráticas.
            <br />
            <b>A Constituição de 1988</b>
            <br />Promulgada em 5 de outubro de 1988, a nova Constituição foi
            elaborada por uma Assembleia Nacional Constituinte, formada por
            deputados e senadores eleitos pelo povo. Foi a sétima Constituição
            do Brasil, e sua principal missão era garantir as liberdades
            democráticas após duas décadas de autoritarismo. <br />A
            Constituição de 1988 trouxe importantes avanços: <br />
            <br />
            <li>
              <i>
                Instituição do voto direto para presidente, governadores,
                prefeitos, deputados e senadores;
              </i>
            </li>
            <li>
              <i>
                Criação de mecanismos de controle popular, como o direito ao
                voto facultativo para maiores de 16 anos;
              </i>
            </li>
            <li>
              <i>
                Garantia dos direitos fundamentais, como liberdade de expressão,
                direito de greve e habeas corpus;
              </i>
            </li>
            <li>
              <i>
                Ampliação dos direitos sociais: educação, saúde, trabalho,
                moradia, meio ambiente e seguridade social;
              </i>
            </li>
            <li>
              <i>
                Reconhecimento dos direitos dos povos indígenas e dos
                quilombolas;
              </i>
            </li>
            <li>
              <i>
                Fortalecimento do Ministério Público e do Judiciário
                independente.
              </i>
            </li>
            <li>
              <i>
                Por tudo isso, passou a ser chamada de Constituição Cidadã, um
                marco na história dos direitos humanos no Brasil.
              </i>
            </li>{" "}
            <br />
            <br />
            <b>A Nova República (1985–presente)</b>
            <br />A Nova República é o período que se inicia com o fim da
            Ditadura Militar, em 1985, e continua até os dias atuais. É marcada
            por um esforço contínuo de reconstrução democrática, enfrentando
            desafios econômicos, políticos e sociais.
            <br />
            <br />Presidentes da Nova República:
            <br />
            <br />
            <li>
              <i>
                <b>
                  José Sarney (1985–1990): assumiu após a morte de Tancredo
                  Neves, enfrentando hiperinflação e crises econômicas;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Fernando Collor (1990–1992): eleito pelo voto direto,
                  renunciou após um processo de impeachment por corrupção;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Itamar Franco (1992–1995): assumiu após o impeachment e
                  lançou o Plano Real, que estabilizou a economia;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Fernando Henrique Cardoso (1995–2002): consolidou o Real,
                  privatizou estatais e trouxe estabilidade econômica;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Luiz Inácio Lula da Silva (2003–2010): focou em programas
                  sociais, como o Bolsa Família, e no crescimento
                  econômico;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Dilma Rousseff (2011–2016): primeira mulher presidente do
                  Brasil, sofreu impeachment em 2016;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Michel Temer (2016–2018): assumiu após o impeachment e
                  aprovou reformas trabalhistas e teto de gastos;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Jair Bolsonaro (2019–2022): governo marcado por polarização
                  política e crise na pandemia de COVID-19;
                </b>
              </i>
            </li>
            <li>
              <i>
                <b>
                  Lula (2023–atual): reeleito democraticamente, retornou à
                  presidência com foco em reconstrução social e ambiental.
                </b>
              </i>
            </li>
            <br />
            <b>Desafios e avanços</b>
            <br />A Nova República avançou na garantia de direitos civis e
            sociais, mas também enfrentou: <br />
            <li>
              <i>Crises políticas e econômicas;</i>
            </li>
            <li>
              <i>Desigualdade social persistente;</i>
            </li>
            <li>
              <i>Corrupção em diversas esferas do poder;</i>
            </li>
            <li>
              <i>Polarização ideológica e ataques à democracia.</i>
            </li>
            Apesar disso, o período foi essencial para a consolidação da
            democracia brasileira, com liberdade de imprensa, eleições regulares
            e ampla participação popular.
          </p>
          <img
            src="https://static.escolakids.uol.com.br/2021/12/nova-constituicao.jpg"
            alt="Assembleia Nacional Constituinte de 1987"
            className="imagem-expandida"
          />
        </>
      ),
    },
  ];
 
  return (
    <div className="brasil-republica-container">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button
            className="btn"
            onClick={() => alert("Página 'Sobre Nós' em construção.")}
          >
            Sobre Nós
          </button>
          <button
            className="btn sair"
            onClick={() => alert("Você saiu com sucesso.")}
          >
            Sair
          </button>
        </div>
      </header>
 
      <main className="content">
        {/* Mantém suas classes e estrutura original */}
        <div className="top-section-buttons">
          <button className="btn back-btn" onClick={handleGoBack}>
            ← Voltar
          </button>
          <button
            className="btn-concluir" // Sua classe original para o botão geral
            onClick={() => alert("Marcar Matéria Geral como Concluído!")}
          >
            Marcar como Concluído
          </button>
        </div>
 
        {/* Barra de progresso geral */}
        <div className="progress-bar-overall">
          <p className="progress-percent-overall">Progresso nesta matéria: {progress}%</p>
          <div className="progress-fill-overall" style={{ width: `${progress}%` }}></div>
        </div>
 
        {topics.map((topic, index) => (
          <section
            key={index}
            className={`paragrafo decorado animado ${
              expandedIndex === index ? "expandido" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <h2>{topic.title}</h2>
            <p>{topic.summary}</p>
            {expandedIndex === index && (
              <div className="conteudo-expandido">
                {topic.details}
                {/* Botões Marcar/Remover Concluído para CADA TÓPICO */}
                {/* Usando classes específicas para os botões de tópico para não conflitar */}
                <div className="topic-actions">
                  <button
                    className={`btn-concluir-topic ${progressoPorTopico[topic.id] ? 'concluido' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que o clique no botão feche o tópico
                      handleMarkTopicAsCompleted(topic.id);
                    }}
                    disabled={progressoPorTopico[topic.id]}
                  >
                    {progressoPorTopico[topic.id] ? "Tópico Concluído" : "Marcar Tópico como Concluído"}
                  </button>
                  {progressoPorTopico[topic.id] && (
                    <button
                      className="btn-remover-concluido-topic"
                      onClick={(e) => {
                        e.stopPropagation(); // Evita que o clique no botão feche o tópico
                        handleUnmarkTopicAsCompleted(topic.id);
                      }}
                    >
                      Remover Concluído
                    </button>
                  )}
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
              <li><span onClick={handleGoBack}>Página Inicial</span></li>
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
 
export default BrasilRepublica;
 