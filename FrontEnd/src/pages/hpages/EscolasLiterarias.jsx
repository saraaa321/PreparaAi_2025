import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Celulas.css"; 

// ...existing code...
const celulasData = [
  {
    id: "trovadorismo",
    titulo: "🏰 Trovadorismo",
    descricao:
      "O Trovadorismo foi a primeira escola literária da língua portuguesa, desenvolvida entre os séculos XII e XIV, durante a Idade Média. Caracteriza-se pela produção de poesia cantada, acompanhada por instrumentos musicais, e pela forte influência da cultura provençal. As principais manifestações são as cantigas, divididas em líricas (de amor e de amigo) e satíricas (de escárnio e de maldizer). O ambiente era marcado pelo feudalismo, pela religiosidade e pela oralidade, com temas como o amor cortês, a vassalagem amorosa e a devoção religiosa.",
    causas: [
      "Sociedade feudal, marcada pela divisão rígida de classes e pelo poder dos senhores feudais.",
      "Teocentrismo: a Igreja Católica exercia grande influência sobre todos os aspectos da vida.",
      "Influência da cultura provençal e dos trovadores franceses, que difundiram a poesia cantada.",
      "Valorização da oralidade e da música como formas de expressão artística.",
    ],
    consequencias: [
      "Produção das cantigas de amor, amigo, escárnio e maldizer, que inauguraram a literatura em língua portuguesa.",
      "Registro dos primeiros textos literários em galego-português, língua culta da época.",
      "Consolidação de temas como o amor impossível, a lealdade e a crítica social.",
      "Base para o desenvolvimento da literatura medieval e influência nas escolas posteriores.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdcxd8we1z9cksw1716d0f7%2F1749575287_img_2.webp?st=2025-06-10T15%3A46%3A01Z&se=2025-06-16T16%3A46%3A01Z&sks=b&skt=2025-06-10T15%3A46%3A01Z&ske=2025-06-16T16%3A46%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=4%2FaA3AgjpMhBCzDdUOcbr%2F78UIG%2FazcGZND%2FiMeovpo%3D&az=oaivgprodscus",
  },
  {
    id: "humanismo",
    titulo: "📜 Humanismo",
    descricao:
      "O Humanismo foi um movimento de transição entre a Idade Média e o Renascimento, ocorrendo entre os séculos XV e XVI. Caracteriza-se pela valorização do ser humano, da razão e do antropocentrismo, em oposição ao teocentrismo medieval. No campo literário, destaca-se o início da prosa documental, com crônicas históricas e cartas de viagem, além do surgimento do teatro popular. O Humanismo marca o início da preocupação com a realidade social e a busca pelo equilíbrio entre fé e razão.",
    causas: [
      "Renascimento cultural europeu, com redescoberta dos valores clássicos greco-latinos.",
      "Ascensão da burguesia e das cidades, promovendo mudanças econômicas e sociais.",
      "Enfraquecimento do feudalismo e do poder absoluto da Igreja.",
      "Valorização dos estudos humanísticos, como filosofia, história e literatura.",
    ],
    consequencias: [
      "Produção de crônicas históricas, como as de Fernão Lopes, e cartas de viagem, como a de Pero Vaz de Caminha.",
      "Aproximação entre literatura e realidade social, com maior preocupação com o cotidiano.",
      "Desenvolvimento da prosa em língua portuguesa e surgimento do teatro de Gil Vicente.",
      "Preparação do terreno para o Classicismo e o Renascimento.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdd3zjefwha50p4dw2fmtjj%2F1749575493_img_1.webp?st=2025-06-10T15%3A44%3A00Z&se=2025-06-16T16%3A44%3A00Z&sks=b&skt=2025-06-10T15%3A44%3A00Z&ske=2025-06-16T16%3A44%3A00Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=kU%2B7yndG1D1Nxp8RfHG2udyU1sA4OzGLDlmVHSbDAjI%3D&az=oaivgprodscus",
  },
  {
    id: "classicismo",
    titulo: "🏛️ Classicismo",
    descricao:
      "O Classicismo foi um movimento literário do século XVI, influenciado pelo Renascimento europeu. Buscava o equilíbrio, a racionalidade, o universalismo e a inspiração nos modelos clássicos greco-romanos. A literatura classicista valoriza a harmonia formal, a clareza, o rigor estético e o uso de temas universais, como o amor, a natureza e a razão. O Classicismo português tem como principal representante Luís de Camões, autor de 'Os Lusíadas'.",
    causas: [
      "Redescoberta dos valores da Antiguidade Clássica, como harmonia, proporção e beleza.",
      "Racionalismo renascentista, que valoriza a razão e o conhecimento científico.",
      "Expansão marítima portuguesa e contato com novas culturas.",
      "Valorização da ciência, das artes e do humanismo.",
    ],
    consequencias: [
      "Produção de poesias e peças teatrais com rigor formal e métrico, como os sonetos.",
      "Uso de versos decassílabos e temas universais, como o amor platônico e a exaltação da natureza.",
      "Obras de Luís de Camões, como 'Os Lusíadas', que celebra as conquistas portuguesas.",
      "Influência duradoura na literatura ocidental e inspiração para escolas posteriores.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxddce6gew9agxwtzh7jehpg%2F1749575721_img_1.webp?st=2025-06-10T15%3A46%3A01Z&se=2025-06-16T16%3A46%3A01Z&sks=b&skt=2025-06-10T15%3A46%3A01Z&ske=2025-06-16T16%3A46%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=32NjPunwy8jS6BasnOFgYoahTSCpH25VFctGVavMLGg%3D&az=oaivgprodscus",
  },
  {
    id: "barroco",
    titulo: "⛪ Barroco",
    descricao:
      "O Barroco foi uma escola literária dos séculos XVII e início do XVIII, marcada pelo contraste, dualismo, linguagem rebuscada e conflitos entre razão e fé. Surgiu em um contexto de crise religiosa e política, refletindo as tensões da Contrarreforma. O estilo barroco utiliza figuras de linguagem, como antíteses e paradoxos, e explora temas como a efemeridade da vida, o pecado e a busca pela salvação.",
    causas: [
      "Contrarreforma, movimento da Igreja Católica para combater o avanço do protestantismo.",
      "Crise dos valores renascentistas e conflitos religiosos na Europa.",
      "Busca por conciliação entre espiritual e material, razão e fé.",
      "Influência do contexto colonial brasileiro, com forte religiosidade.",
    ],
    consequencias: [
      "Uso de linguagem ornamentada, com jogos de palavras, hipérboles e metáforas.",
      "Exploração de temas como a transitoriedade da vida, o arrependimento e a salvação da alma.",
      "Obras de Gregório de Matos (poesia satírica e religiosa) e Padre Antônio Vieira (sermões).",
      "Influência na arquitetura, pintura e escultura do período colonial.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdehjz3e6d9ams94tqaw1yj%2F1749577005_img_2.webp?st=2025-06-10T15%3A44%3A07Z&se=2025-06-16T16%3A44%3A07Z&sks=b&skt=2025-06-10T15%3A44%3A07Z&ske=2025-06-16T16%3A44%3A07Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=C2oXkcpVjQpOdStcXF%2FTgjdIJ3MxuFe5%2FNEoeLxqw%2BQ%3D&az=oaivgprodscus",
  },
  {
    id: "arcadismo",
    titulo: "🌿 Arcadismo",
    descricao:
      "O Arcadismo, também chamado de Neoclassicismo, foi um movimento literário do século XVIII que buscava retomar os valores clássicos de simplicidade, equilíbrio e racionalidade. Inspirado pelo Iluminismo, valorizava a vida bucólica, a natureza e a razão, em oposição ao exagero barroco. Os autores árcades utilizavam pseudônimos e referências à mitologia greco-romana, idealizando a vida no campo e a fuga das cidades.",
    causas: [
      "Influência do Iluminismo, que defendia a razão, a ciência e a busca pela felicidade.",
      "Reação ao exagero e à complexidade do Barroco.",
      "Valorização da vida simples, bucólica e em harmonia com a natureza.",
      "Busca por equilíbrio, clareza e objetividade na expressão literária.",
    ],
    consequencias: [
      "Produção de poesias pastorais, com idealização da natureza e do amor simples.",
      "Uso de pseudônimos e alusões à mitologia clássica.",
      "Obras de Cláudio Manuel da Costa, Tomás Antônio Gonzaga e Basílio da Gama.",
      "Preparação para o surgimento do Romantismo, com valorização do sentimento.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdepqt7fgvspmb7gsmcd0at%2F1749577215_img_2.webp?st=2025-06-10T15%3A45%3A27Z&se=2025-06-16T16%3A45%3A27Z&sks=b&skt=2025-06-10T15%3A45%3A27Z&ske=2025-06-16T16%3A45%3A27Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=QPEIfKlyGWUo%2BaGNk7ozMAv%2FcX2QLRXQVyE71Q3psW4%3D&az=oaivgprodscus",
  },
  {
    id: "romantismo",
    titulo: "🌹 Romantismo",
    descricao:
      "O Romantismo foi um movimento literário do século XIX que valorizou a subjetividade, a emoção, o nacionalismo e a liberdade de criação. Dividiu-se em três gerações: a primeira, indianista e nacionalista; a segunda, ultrarromântica, marcada pelo sentimentalismo e pessimismo; e a terceira, social, voltada para questões políticas e sociais. O Romantismo exalta o amor idealizado, a natureza, o herói nacional e a busca pela identidade do país.",
    causas: [
      "Revolução Industrial e profundas transformações sociais e econômicas.",
      "Influência do liberalismo e do nacionalismo europeu.",
      "Busca por uma identidade nacional, especialmente no Brasil pós-Independência.",
      "Reação ao racionalismo e à rigidez do Neoclassicismo.",
    ],
    consequencias: [
      "Exaltação do amor idealizado, da natureza e do sentimento individual.",
      "Valorização do herói nacional, do indígena e do passado histórico.",
      "Produção de romances, poesias e peças teatrais marcadas pela emoção.",
      "Obras de José de Alencar, Gonçalves Dias, Castro Alves e Álvares de Azevedo.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdf4rqserg9w5h3xdrjnxtt%2F1749577615_img_0.webp?st=2025-06-10T16%3A39%3A11Z&se=2025-06-16T17%3A39%3A11Z&sks=b&skt=2025-06-10T16%3A39%3A11Z&ske=2025-06-16T17%3A39%3A11Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=He3RJPXpuO5XX4BJcmVR0cxXHGfwTVMwFlp1gV7B9jQ%3D&az=oaivgprodscus",
  },
  {
    id: "realismo",
    titulo: "📖 Realismo",
    descricao:
      "O Realismo foi um movimento literário da segunda metade do século XIX, caracterizado pela objetividade, análise crítica da sociedade, linguagem direta e foco na realidade. Os autores realistas buscavam retratar a vida como ela é, sem idealizações, analisando os comportamentos humanos e as relações sociais. O Realismo também marcou o surgimento do Naturalismo, uma vertente ainda mais científica e determinista.",
    causas: [
      "Desenvolvimento científico e filosófico, como o positivismo e o evolucionismo.",
      "Reação ao sentimentalismo e à idealização romântica.",
      "Urbanização e transformações sociais profundas.",
      "Valorização da observação, da análise psicológica e do método científico.",
    ],
    consequencias: [
      "Crítica à hipocrisia social, à moral burguesa e às instituições.",
      "Análise psicológica dos personagens e aprofundamento do estudo do comportamento humano.",
      "Obras de Machado de Assis, Eça de Queirós e Raul Pompeia.",
      "Surgimento do Naturalismo, com ênfase no determinismo biológico e social.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdfbf2dfcmax2zrbegjackx%2F1749577836_img_3.webp?st=2025-06-10T16%3A49%3A29Z&se=2025-06-16T17%3A49%3A29Z&sks=b&skt=2025-06-10T16%3A49%3A29Z&ske=2025-06-16T17%3A49%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=lVGN0viFvgoFb%2F92BdDd5nJ5w8bs7vA6k08Gf%2FMfcCY%3D&az=oaivgprodscusg",
  },
  {
    id: "naturalismo",
    titulo: "🌱 Naturalismo",
    descricao:
      "O Naturalismo é uma vertente do Realismo, surgida no final do século XIX, que enfatiza o determinismo biológico e social. Os autores naturalistas retratam o ser humano como produto do meio, da hereditariedade e dos instintos, abordando temas polêmicos como miséria, violência e sexualidade. A linguagem é objetiva, detalhada e científica, buscando retratar a realidade de forma crua e impessoal.",
    causas: [
      "Influência das teorias evolucionistas de Charles Darwin.",
      "Desenvolvimento das ciências naturais e do método científico.",
      "Observação rigorosa da sociedade e dos comportamentos humanos.",
      "Reação ao idealismo romântico e à subjetividade.",
    ],
    consequencias: [
      "Descrição minuciosa e objetiva da realidade social e dos ambientes.",
      "Abordagem de temas polêmicos, como marginalidade, doenças e sexualidade.",
      "Obras de Aluísio Azevedo ('O Cortiço'), Adolfo Caminha e Inglês de Sousa.",
      "Personagens guiados por instintos, hereditariedade e condições sociais.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdfkj3nfr7syrhrn9g91hpt%2F1749578095_img_3.webp?st=2025-06-10T16%3A49%3A23Z&se=2025-06-16T17%3A49%3A23Z&sks=b&skt=2025-06-10T16%3A49%3A23Z&ske=2025-06-16T17%3A49%3A23Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=WTTxfHjeI%2FyreMvNpV8oHn7wrJHfnGiEbHYfq9nM5lQ%3D&az=oaivgprodscusg",
  },
  {
    id: "parnasianismo",
    titulo: "🏵️ Parnasianismo",
    descricao:
      "O Parnasianismo foi um movimento poético do final do século XIX que valorizou a forma, o rigor métrico, a impessoalidade e o culto à estética, conhecido como 'arte pela arte'. Os parnasianos buscavam a perfeição formal, a objetividade e a descrição detalhada, rejeitando o sentimentalismo romântico. Os temas preferidos eram mitológicos, históricos e descritivos.",
    causas: [
      "Reação ao sentimentalismo e à subjetividade do Romantismo.",
      "Influência do positivismo e do racionalismo científico.",
      "Busca pela perfeição formal e pelo rigor estético na poesia.",
      "Valorização da objetividade e da impessoalidade.",
    ],
    consequencias: [
      "Uso de sonetos e versos metrificados, com preocupação com a métrica e a rima.",
      "Temas mitológicos, históricos e descritivos, com linguagem precisa.",
      "Obras de Olavo Bilac, Raimundo Correia e Alberto de Oliveira.",
      "Preocupação com a linguagem, a estética e a construção poética.",
    ],
    imagem: "https://s3.static.brasilescola.uol.com.br/be/2020/06/edward-burne-jones.jpg",
  },
  {
    id: "simbolismo",
    titulo: "✨ Simbolismo",
    descricao:
      "O Simbolismo foi um movimento poético do final do século XIX, marcado pelo subjetivismo, musicalidade, misticismo e uso de símbolos para expressar emoções e sensações. Os simbolistas buscavam sugerir, mais do que descrever, utilizando uma linguagem vaga, cheia de imagens, sinestesias e metáforas. Os temas recorrentes são a morte, o inconsciente, o sonho e a transcendência.",
    causas: [
      "Reação ao materialismo do Realismo e à objetividade do Parnasianismo.",
      "Influência do misticismo, do espiritualismo e das novas correntes filosóficas.",
      "Busca por novas formas de expressão poética, mais subjetivas e sensoriais.",
      "Valorização do inconsciente, do sonho e do irracional.",
    ],
    consequencias: [
      "Linguagem sugestiva, musical e cheia de imagens sensoriais.",
      "Temas como morte, transcendência, espiritualidade e mistério.",
      "Obras de Cruz e Sousa, Alphonsus de Guimaraens e outros poetas simbolistas.",
      "Uso de sinestesia, símbolos e metáforas para sugerir sensações.",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdg44b0ezxrapsmq9snqbsk%2F1749578633_img_0.webp?st=2025-06-10T16%3A47%3A45Z&se=2025-06-16T17%3A47%3A45Z&sks=b&skt=2025-06-10T16%3A47%3A45Z&ske=2025-06-16T17%3A47%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Xoh%2Br9WZP5ae5B%2FzPV0X751QBVX%2B8H3u2ICgFpU3U4k%3D&az=oaivgprodscus",
  },
  {
    id: "pre-modernismo",
    titulo: "⏳ Pré-Modernismo",
    descricao:
      "O Pré-Modernismo foi um período de transição (1902-1922) que antecedeu o Modernismo no Brasil. Não é considerado uma escola literária propriamente dita, mas um momento de experimentação e crítica, reunindo características de escolas anteriores e temas sociais, regionais e históricos. Os autores pré-modernistas denunciaram as desigualdades sociais, retrataram o Brasil real e prepararam o terreno para a renovação modernista.",
    causas: [
      "Crise dos valores do século XIX e das escolas tradicionais.",
      "Mudanças políticas, econômicas e sociais no Brasil, como a República e a urbanização.",
      "Busca por uma identidade nacional autêntica.",
      "Influência das vanguardas europeias e das novas ideias artísticas.",
    ],
    consequencias: [
      "Obras de Euclides da Cunha ('Os Sertões'), Lima Barreto, Monteiro Lobato e Graça Aranha.",
      "Denúncia das desigualdades sociais, do atraso e da exclusão.",
      "Retrato do Brasil real, regional e multifacetado.",
      "Preparação para a Semana de Arte Moderna de 1922 e para o Modernismo.",
    ],
    imagem: "https://www.spescoladeteatro.org.br/wp-content/uploads/2022/01/pilula_anita_malfatti_quadro.jpeg",
  },
  {
    id: "modernismo",
    titulo: "🎨 Modernismo",
    descricao:
      "O Modernismo foi um movimento iniciado em 1922, com a Semana de Arte Moderna, que revolucionou a literatura, as artes e a cultura brasileira. Os modernistas defendiam a liberdade estética, a inovação, a linguagem coloquial e a valorização da identidade nacional. O movimento dividiu-se em três fases: a primeira, de ruptura e experimentação; a segunda, de consolidação e aprofundamento; e a terceira, de retomada de formas clássicas com nova visão.",
    causas: [
      "Influência das vanguardas europeias (cubismo, futurismo, dadaísmo, expressionismo).",
      "Crítica à tradição, ao academicismo e à arte importada.",
      "Desejo de renovação cultural e de construção de uma identidade brasileira autêntica.",
      "Mudanças sociais, urbanização e industrialização do Brasil.",
    ],
    consequencias: [
      "Ruptura com padrões clássicos e acadêmicos, experimentação formal e temática.",
      "Valorização da cultura popular, regional e nacional.",
      "Obras de Mário de Andrade, Oswald de Andrade, Manuel Bandeira, Cecília Meireles, Carlos Drummond de Andrade, entre outros.",
      "Divisão em três fases: heroica (ruptura), consolidação (regionalismo e aprofundamento) e geração de 45 (retomada formal).",
    ],
    imagem: "https://videos.openai.com/vg-assets/assets%2Ftask_01jxdgjb2sf7wvtm95wwkpsqxk%2F1749579101_img_0.webp?st=2025-06-10T16%3A48%3A19Z&se=2025-06-16T17%3A48%3A19Z&sks=b&skt=2025-06-10T16%3A48%3A19Z&ske=2025-06-16T17%3A48%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=zYXmQH1DOttrrsPtGSndLTI34xp83CWQB292tu2brOU%3D&az=oaivgprodscus",
  },
];
// ...existing code...

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
    navigate('/Portugues'); // Redireciona para a página inicial
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
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
          </button>
        </div>

         <h1 className="titulo-principal">
    <span className="titulo-animado">Escolas Literárias</span>
    <div className="subtitulo-principal">Descubra as principais escolas da literatura brasileira e suas características</div>
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
                      Características 
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'consequencias')}
                    >
                      Consequências
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