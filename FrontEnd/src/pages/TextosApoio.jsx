import React from 'react';
import { useParams } from 'react-router-dom';
import './css/Apoio.css';
import logo from '../assets/logo2.png';
import tirinha1 from '../assets/tirinha1.png';
// import tirinha2 from '../assets/tirinha2';
import tirinha3 from '../assets/tirinha3.png';


const bancoDeTextos = {
  1: {
    tema: 'A importância da alfabetização na infância no Brasil',
    textos: {
    texto1: (
      <>
        <p>Não são somente os adultos não escolarizados que leem com dificuldade. Estrangeiros com educação formal que estão aprendendo idiomas com alfabetos desconhecidos vivenciam as mesmas dificuldades. Acadêmicos “ocidentais” e profissionais de ajuda humanitária que passam décadas na Etiópia ou em Bangladesh podem falar fluentemente as línguas desses países, mas até o fim da vida leem como se fossem estudantes primários. Eles dizem que veem um amontoado de letras que devem ser decodificadas uma por uma. A leitura acaba sendo uma tarefa tediosa e, por isso, muitos a evitam.</p>
        <p>Esses eventos apontam para um fenômeno único, que poderia ser chamado de "dislexia em adultos recém-alfabetizados". Ele parece se tornar significativo por volta dos 19 anos de idade e, provavelmente, afeta a todos nós. Estudantes universitários que têm de aprender alfabetos diferentes depois dos 18 anos tipicamente leem devagar e passam décadas com dificuldade para decifrar textos. Vários estudos cognitivos e neurocientíficos mostram dificuldades duradouras de leitura entre adultos. A dislexia adulta pode explicar parcialmente os resultados desanimadores dos programas de alfabetização de adultos em todo o mundo. Contudo, ela passou despercebida. Educadores normalmente atribuem esses fracassos a problemas sociais, à motivação do estudante ou a problemas organizacionais. Esses certamente são fatores importantes, mas os resultados entre os que persistem são desalentadores. Além disso, como essa estranha dislexia permaneceu invisível, poucas pesquisas foram realizadas sobre ela. </p>
        <p>Porém, o que é uma leitura sem esforço e por que isso é importante? Essa competência parece ser um rito de passagem comum da infância, mas ela depende de mudanças específicas no cérebro.</p>
        <p><strong>Fonte:</strong> https://pt.unesco.org/courier/julho-setembro-2017/alfabetizacao-na-primeira-infancia-chave-fluencia</p>
      </>
    ),
      texto2: (
      <>
        <p>Nesta terça-feira, 8 de setembro, é celebrado o Dia Mundial da Alfabetização. A data foi criada em 1967 pela Organização das Nações Unidas (ONU) e reforça a importância de aprender a ler e escrever para o desenvolvimento social e econômico mundial. Os números, porém, não são muito animadores quando falamos de alfabetização de crianças na idade certa e de jovens e adultos. A cada 100 crianças com 8 ou 9 anos, apenas 45 (45,3%) têm aprendizado suficiente em leitura no 3º ano do ensino fundamental, série em que todas as crianças deveriam estar alfabetizadas, de acordo com meta estabelecida pelo Plano Nacional de Educação (PNE). O plano foi criado pela Lei 13.005/2014, que determina o que deve ser feito para melhorar a educação no país até 2024, desde o ensino infantil, até a pós-graduação.</p>
        <p><strong>Fonte:</strong>https://cangurunews.com.br/alfabetizacao-criancas/</p>
      </>
    ),
      imagem: {tirinha1},
      proposta: 'A partir da leitura dos textos motivadores seguintes e com base nos conhecimentos construídos ao longo de sua formação, redija texto dissertativo argumentativo em modalidade escrita formal da língua portuguesa sobre o tema ‘‘A importância da alfabetização na infância”, apresentando proposta de intervenção. Selecione, organize e relacione, de forma coerente e coesa, argumentos e fatos para defesa de seu ponto de vista.'
    }
  },
  2: {
    tema: 'Os desafios de se combater as Fake News na Era da Informação',
    textos: {
      texto1: (
      <>
        <p>‘Fake news’ atingem área de tomada de decisão do cérebro </p>
        <p>De acordo com a neuropsicóloga Samara Ribeiro, ao receber uma nova informação, várias áreas do cérebro são ativadas através do córtex pré-frontal, o responsável pelas funções executivas como tomada de decisão, controle inibitório, planejamento, memória e atenção, o que possibilita uma melhor assimilação e acomodação da nova notícia. — Frente ao contexto social que vivemos, notícias absurdas chamam mais atenção do que as corriqueiras, tanto pela forma de divulgação, quanto pelo comportamento da pessoa ao receber a notícia, que pode ser emotivo ou frustrante — afirma a especialista em transtornos neurocognitivos.</p>
        <p><strong>Fonte:</strong>https://extra.globo.com/noticias/saude-e-ciencia/fake-news-atingem-area-de-tomada-de-decisao-do-cerebro-22522749.html. Acesso em 26 mar. 2018.</p>
      </>
    ),
    texto2: (
      <>
        <p>O Projeto de Lei do Senado 473/2017 prevê até três anos para quem divulgar notícias falsas, sabendo que se tratam de informações inverídicas, sobre assuntos de relevância para o interesse público, como saúde, segurança pública, economia e política. Segundo o que propõe o documento, penas de seis meses a dois anos de detenção serão possíveis a quem divulgar as fake news. Se a divulgação for feita em meio virtual, a pena passa a ser de reclusão de um a três anos. Se a divulgação da notícia falsa visar obtenção de vantagem, para quem publica ou para outrem, há possibilidades de aumento da pena em até dois terços. Todas as punições podem ser acompanhadas, também, de multas. </p>
        <p><strong>Fonte:</strong>https://canaltech.com.br/governo/projeto-de-lei-preve-detencao-de-ate-3-anos-em-caso-de-publicacao-de-fake-news-107628/. Acesso em: 20 fev. 2019</p>
      </>
    ),
      texto3: (
        <>
          <p>Vídeos fora do ar</p>
          <p>A Justiça do Rio de Janeiro determinou que as fake news sobre a vereadora Marielle Franco fossem retiradas do ar. O mandato da juíza Márcia Correia Hollanda ordenou que o Google retirasse 16 vídeos do Youtube do ar, com possibilidade de multa de R$ 1 mil por dia a cada vídeo que continuasse na internet. </p>
          <p>O pedido de remoção dos vídeos foi feito pela irmã de Marielle Franco , Anielle Silva dos Reis Barboza, e da namorada da vereadora, Mônica Azeredo Benício. Para a juíza, as fake news “extrapolaram o que a Constituição fixou como limite ao direito de livremente se manifestar”. </p>
          <p><strong>Fonte:</strong>http://ultimosegundo.ig.com.br/brasil/2018-03-25/fake-newssobre-marielle-datafolha.html. Acesso em 26 mar. 2018.</p>
        </>
      ),
      proposta: 'A partir da leitura dos textos motivadores seguintes e com base nos conhecimentos construídos ao longo de sua formação, redija texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema “Os desafios de se combater as Fake News na Era da Informação”, apresentando proposta de intervenção. Selecione, organize e relacione, de forma coerente e coesa, argumentos e fatos para defesa de seu ponto de vista.'
    }
  },
  3: {
    tema: 'Privatizações são benéficas para o Brasil?',
    textos: {
      texto1: (
        <>
          <p>Uma pesquisa do Instituto Datafolha publicada em setembro de 2019 revelou que dois terços da população brasileira são contrários a privatizações de forma geral. Com relação a empresas específicas cujas privatizações já foram ventiladas em Brasília, a pesquisa mostrou que há rejeição majoritária à venda de Banco do Brasil, Caixa Econômica Federal, Correios e Petrobras. </p>
          <p><strong>Fonte:</strong>https://www.nexojornal.com.br/expresso/2020/01/08/Quais-empresas-ogoverno-federal-quer-privatizar-em-2020.</p>
        </>
      ),
      texto2: (
        <>
          <p>O ministro da Economia, Paulo Guedes, assumiu o cargo em janeiro de 2019 falando em arrecadar US$ 20 bilhões – cerca de R$ 75 bilhões pela cotação da época – em desestatizações e vendas nos primeiros 12 meses do governo Bolsonaro. O objetivo para o ano foi superado. R$ 103,1 bilhões foi a quantia arrecadada pelo governo federal com desestatizações, vendas de ações (desinvestimentos) e vendas de campos de petróleo pela Petrobras em 2019.</p>
          <p><strong>Fonte:</strong>https://www.nexojornal.com.br/expresso/2020/01/08/Quais-empresas-o-governo-federal-quer-privatizar-em-2020</p>
        </>
      ),
      imagem: {tirinha3},
      proposta: 'Com base nos textos apresentados e em seus próprios conhecimentos, escreva uma redação de gênero dissertativo, empregando a norma-padrão da língua portuguesa, sobre o tema: Privatizações são benéficas para o Brasil?'
    }
  },  
  4: {
    tema: 'Os desafios atuais para a demoracia no Brasil e no mundo',
    textos: {
      texto1: (
        <>
          <p>O caminho da autocracia – Estratégias atuais de erosão democrática</p>
          <p>O mundo vem sofrendo acelerado processo de declínio democrático na última década. Organizações internacionais e de pesquisa empenhadas em monitorar a qualidade dos regimes políticos, das liberdades civis e do Estado de Direito têm observado a expansão da autocratização — queda substantiva de variados atributos democráticos — em diferentes partes do globo. Esse fenômeno global também se reflete na democracia brasileira nos últimos anos.</p>
          <p>Os principais exemplos de autocratização no século XXI partiram de governos democraticamente eleitos cujos líderes implementaram projetos autoritários. O atual processo de erosão democrática tem ocorrido internamente aos sistemas político e de justiça, em processo que frequentemente se alonga durante anos. Mudanças institucionais têm sido realizadas aos poucos por meio de alterações legais que reconfiguram a estrutura burocrática, fortalecem o Poder Executivo a partir da expansão de suas competências, reduzem os mecanismos de freios e contrapesos exercidos pelas demais instituições políticas e fragilizam as ferramentas de controle político (accountability), entre outras estratégias.</p>
          <p>Apesar de diferenças conceituais e terminológicas, estudiosos concordam que o direito tem sido usado por autocratas para construir arquiteturas normativas que fragilizam valores democráticos. Assim, atacam direitos fundamentais, liberdades civis e políticas e subvertem a dinâmica das instituições democráticas.</p>
          <p><strong>Fonte:</strong>BRITO A. S.; MENDES C. H.; SALES F. R.; AMARAL M. C. S.; BARRETO M. S. (2022). São Paulo. O caminho da autocracia – Estratégias atuais de erosão democrática. Centro de Análise da Liberdade e do Autoritarismo (LAUT), p. 4; 7. (Adaptado)</p>
        </>
      ),
      texto2: (
        <>
          <p>Como a democracia é ameaçada no século 21</p>
          <p>Analisando a trajetória dos regimes políticos desde o século 18, há uma clara tendência histórica de democratização pelo mundo. No entanto, a população mundial cresceu mais rápido do que a democracia se espalhou.</p>
          <p>Além disso, retrocessos recentes mostraram que o progresso político contínuo não deve ser tomado como pressuposto. A Índia, por exemplo, com seu 1,4 bilhão de habitantes, deixou em 2019 de ser uma democracia, segundo diversos índices internacionais.</p>
          <p>Dessa forma, o nível de democracia do mundo, que registrou seu ápice histórico dez anos atrás, em 2012, regrediu e está atualmente no patamar registrado em 1989, segundo o V-Dem [Varieties of Democracy, um instituto internacional de pesquisa independente].</p>
          <p>As explicações para esses retrocessos são múltiplas e variam de acordo com as particularidades do contexto político de cada país. Mas alguns fatores ajudam a explicar, pelo menos, por que tantos líderes autoritários foram eleitos ou ganharam mais poder, sobretudo a partir de 2016.</p>
          <p>Primeiro, há em vários países a histórica crise de representação. O próprio modelo de partidos, que fundamenta a democracia desde o século 19, está sendo questionado, dada a falta de identificação dos eleitores com as agremiações existentes.</p>
          <p>Questões como crises econômicas, tendências de espetacularização da política, e enfrentamento de desafios cada vez mais complexos, num mundo cada vez mais integrado, ainda agravam o descontentamento com a política em geral.</p>
          <p>Além disso, do uso cada vez mais intenso das redes sociais, onde algoritmos premiam conteúdos polêmicos e retroalimentam visões extremadas, emergiram dois fenômenos globais que corroem os processos de deliberação numa democracia, impedindo a formação de consensos e minando a coesão social: a polarização política tóxica e o amplo uso da desinformação como arma política, tudo isso alimentado por figuras políticas e partidos interessados na desconstrução democrática.</p>
          <p><strong>Fonte:</strong>CRUZ, Isabela. Democracia: um regime político sempre em construção. Nexo Jornal. 1º out. 2022. Disponível em: https://www.nexojornal.com.br/explicado/2022/10/01/Democracia-um-regime-pol%C3%ADtico-sempre-emconstru%C3%A7%C3%A3o#section-5. Acesso em: 20 out. 2022. (Adaptado) © 2022 | Todos os direitos deste material são reservados ao NEXO JORNAL LTDA.</p>
        </>
      ),
      proposta: 'Com base nos textos 1 e 2 e em seus conhecimentos prévios, produza um texto dissertativo-argumentativo que tematize os desafios atuais para a democracia no Brasil e no mundo. Dê um título à sua produção textual.'
    }
  },
  5: {
    tema: 'Adoção: prática de amor incondicional ou seletivo?',
    textos: {
      texto1: (
        <>
          <p>Adoção: um ato de amor e de cidadania</p>
          <p>A adoção advém desde os tempos remotos da história dos povos. (...) Nesse sentido, na modernidade a adoção, por influência do Cristianismo e da afirmação dos Direitos Humanos, passou a estar centrado nas crianças ou adolescentes adotados na sua interação com as famílias adotantes.</p>
          <p>Atualmente a adoção tem duas feições: é um instituto jurídico que visa proteger as partes estabelecendo vínculos legais no ato da adoção e ao mesmo tempo constitui um ato de amor, ambos com significado na segurança e aconchego para a criança ou adolescente no seio da família adotante e desta no seu exercício de amar o adotado.</p>
          <p>O instituto da adoção está previsto nos artigos 1618 a 1629 do Código Civil de 2002, que estabelece as condições jurídicas da adoção, afirmando uma relação de parentesco civil entre o adotando e o adotado, dando origem às obrigações e direitos atinentes à adoção irrestrita instituída por esse Código.</p>
          <p><strong>Fonte:</strong>https://al-rs.jusbrasil.com.br/noticias/1146878/adocao-um-ato-de-amor-e-decidadania. Acesso em: 12 de junho de 2019.</p>
        </>
      ),
      texto2: (
          <>
            <p>Adoção: maioria das crianças em abrigos no DF tem idade acima do pretendido pelos candidatos</p>
            <p>Mais da metade das crianças que vivem em casas de acolhimento no Distrito Federal estão na faixa etária com o menor índice de aceitação pelas famílias que pretendem adotar. Atualmente, 63% dos meninos e meninas aptos à adoção têm 12 anos ou mais. Por outro lado, nenhuma das 523 famílias cadastradas na lista de espera até quarta-feira (31) havia manifestado desejo de ser pai ou mãe de uma criança com mais de 10 anos.</p>
            <p>Os dados são da Vara da Infância e da Juventude (VIJ) de Brasília e revelam a dificuldade para modificar o perfil da adoção. As chamadas adoções tardias – de adolescentes e pré-adolescentes – correspondem, em média, a 1,5% do total.</p>
            <p><strong>Fonte:</strong>https://g1.globo.com/df/distrito-federal/noticia/adocao-maioria-das-criancas-emabrigos-no-df-tem-idade-acima-do-pretendido-pelos-candidatos.ghtml. Acesso em: 12 de junho de 2019.</p>
          </>
      ),
      proposta: 'Com base nos textos apresentados e em seus próprios conhecimentos, escreva uma redação de gênero dissertativo, empregando a norma-padrão da língua portuguesa, sobre o tema: Adoção: prática de amor incondicional ou seletivo?'
    }
  },
  6: {
    tema: 'Apostas online: Regulamentação para o consumidor e indução ao vício',
    textos: {
      texto1: (
        <>
          <p>Cinco contos levam-se com trinta mil sentidos, apalpam-se a miúdo, não se lhes tiram os olhos de cima, nem as mãos, nem o pensamento, e para se perderem assim tolamente, numa praia, é necessário que... Crime é que não podia ser o achado; nem crime, nem desonra, nem nada que embaciasse o caráter de um homem. Era um achado, um acerto feliz, como a sorte grande, como as apostas de cavalo, como os ganhos de um jogo honesto e até direi que a minha felicidade era merecida, porque eu não me sentia mau, nem indigno dos benefícios da Providência.</p>
          <p><strong>Fonte:</strong>ASSIS, Machado. Memórias Póstumas de Brás Cubas. https://machadodeassis.net/texto/memorias-postumas-de-bras-cubas/5985/chapter_id/7025 Acesso em: 18 de julho de 2024.</p>
        </>
      ),
      texto2: (
        <>
          <p>Ou seja, os sites de apostas, sejam nacionais ou do exterior, precisam se adequar à regulamentação do setor que foi aprovada recentemente, em julho de 2023. Isso é extremamente importante para fazer com que o mercado continue crescendo, mas de maneira legítima, coibindo a atuação de sites ilegais e de manipulação de resultados. Para se ter uma ideia, só em 2020, o segmento foi avaliado em US$ 59,6 bilhões em todo o mundo e, até 2027, pode bater a marca de US$ 127,3 bilhões. Realmente, é impressionante, não é mesmo? No Brasil, os esportes, principalmente o futebol, são uma grande paixão nacional.</p>
          <p><strong>Fonte:</strong>https://blog.idwall.co/regulamentacao-das-apostas-esportivas-no-brasil/</p>
        </>
      ),
      texto3: (
        <>
        <p>As apostas esportivas podem ter sérias consequências psicológicas, especialmente quando se transformam em vício. A sensação de ganhar ativa o sistema de recompensa do cérebro, liberando dopamina, o que pode levar à busca constante por essa sensação de prazer. Com o tempo, isso pode resultar em um comportamento compulsivo, onde o apostador continua jogando, apesar das perdas financeiras e emocionais.</p>
        <p>O uso excessivo de aplicativos de apostas é particularmente preocupante. Esses aplicativos são projetados para serem atraentes e manter os usuários engajados. A facilidade de acesso e a disponibilidade constante podem levar ao uso problemático, onde o apostador perde o controle sobre seu comportamento de jogo.</p>
        <p><strong>Fonte:</strong>https://blog.wyden.com.br/noticias/saiba-quando-o-uso-de-aplicativos-de-aposta-se-torna-preocupante.Acesso em: 18 de julho de 2024</p>
        </>
      ),
      proposta: 'OS TEXTOS AQUI REPRODUZIDOS ABORDAM O ASSUNTO EM PAUTA. REFLITA SOBRE ESSES TEXTOS E REDIJA UMA DISSERTAÇÃO EM PROSA, NA QUAL VOCÊ DISCUTA AS IDEIAS NELE APRESENTADAS, ARGUMENTANDO DE MODO A DEIXAR CLARO O SEU PONTO DE VISTA SOBRE O TEMA: REGULAMENTAÇÃO PARA O CONSUMIDOR E INDUÇÃO AO VÍCIO.'
    }
  }
};

const Apoio = () => {
  const { id } = useParams();
  const dados = bancoDeTextos[id];

  if (!dados) {
    return <div className="container"><h2>Tema não encontrado.</h2></div>;
  }

  return (
    <div className="apoio-container">
      <header className="apoio-header">
        <img src={logo} alt="Logo" className="apoio-logo" />
        <h2 className="apoio-subtitulo">Textos de Apoio</h2>
        <button className="apoio-voltar" onClick={() => window.history.back()}>
         Sair
        </button>
      </header>
      <h1 className="apoio-titulo">{dados.tema}</h1>

      <main className="apoio-conteudo">
        <section className="apoio-textos">
          {dados.textos.texto1 && (
            <div className="apoio-texto">
              <h2>Texto 1</h2>
              {dados.textos.texto1}
            </div>
          )}
          {dados.textos.texto2 && (
            <div className="apoio-texto">
              <h2>Texto 2</h2>
              {dados.textos.texto2}
            </div>
          )}
          {dados.textos.texto3 && (
            <div className="apoio-texto">
              <h2>Texto 3</h2>
              {dados.textos.texto3}
            </div>
          )}
          {dados.textos.imagem && (
            <div className="apoio-imagem">
              <h2>Tirinha</h2>
              <img src={dados.textos.imagem} alt="Tirinha" />
            </div>
          )}
        </section>

        <section className="apoio-proposta">
          <h2>Proposta de Redação</h2>
          <p>{dados.textos.proposta}</p>
        </section>
      </main>
    </div>
  );
};

export default Apoio;
