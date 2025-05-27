const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json"); // certifique-se que está correto


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});


const db = admin.firestore();


// Consolidated perguntas array to fix syntax errors
const perguntas = [
    {
        "categoria": "História",
        "pergunta": " A Revolução Francesa teve como um de seus principais lemas:”",
        "respostas": [
            "Ordem, Progresso e Liberdade.",
            " Liberdade, Igualdade e Fraternidade.",
            "Independência ou Morte.",
            "Terra, Paz e Pão."
        ],
        "respostaCorreta": " Liberdade, Igualdade e Fraternidade."
    },
    {
        "categoria": "História",
        "pergunta": "Quem descobriu a América em 1492?",
        "respostas": [
            "Pedro Álvares Cabral",
            "Cristóvão Colombo",
            " Vasco da Gama",
            " Napoleão Bonaparte"
        ],
        "respostaCorreta": "Cristóvão Colombo"
    },


    {
        "categoria": "História",
        "pergunta": "Sobre a economia do Brasil Colônia, é correto afirmar que:",
        "respostas": [
            "baseava-se na industrialização precoce promovida pela Coroa portuguesa.",
            "era voltada majoritariamente para o mercado interno.",
            " tinha como principal atividade a mineração de ouro em São Paulo.",
            "era voltada para o mercado externo, com destaque para a monocultura e o uso da mão de obra escravizada."
        ],
        "respostaCorreta": "era voltada para o mercado externo, com destaque para a monocultura e o uso da mão de obra escravizada."
    },


    {
        "categoria": "História",
        "pergunta": "A abolição da escravidão no Brasil ocorreu em:",
        "respostas": ["1822", " 1888", "1889", "1871"],
        "respostaCorreta": " 1888"
    },


    {
        "categoria": "História",
        "pergunta": " A Revolução Francesa teve como um de seus principais lemas:",
        "respostas": [
            "Ordem, Progresso e Liberdade.",
            " Liberdade, Igualdade e Fraternidade.",
            "Independência ou Morte.",
            "Terra, Paz e Pão."
        ],
        "respostaCorreta": " Liberdade, Igualdade e Fraternidade."
    },


    {
        "categoria": "História",
        "pergunta": " A Inconfidência Mineira foi:",
        "respostas": [
            "um movimento abolicionista do século XIX.",
            " um movimento de caráter separatista ocorrido no século XVIII.",
            "uma revolta de escravizados no Nordeste.",
            "um movimento camponês pela reforma agrária."
        ],
        "respostaCorreta": "um movimento de caráter separatista ocorrido no século XVIII."
    },


    {
        "categoria": "História",
        "pergunta": " A Primeira Guerra Mundial foi desencadeada principalmente por:",
        "respostas": [
            "disputas coloniais na América Latina.",
            "  rivalidades imperialistas e o assassinato do arquiduque Francisco Ferdinando.",
            "conflitos religiosos entre protestantes e católicos.",
            "divergências comerciais entre EUA e Alemanha."
        ],
        "respostaCorreta": "rivalidades imperialistas e o assassinato do arquiduque Francisco Ferdinando."
    },


    {
        "categoria": "História",
        "pergunta": "  O que marcou a Revolução Industrial?",
        "respostas": [
            "A substituição do trabalho artesanal pela produção mecanizada.",
            " A expansão do feudalismo.",
            "A valorização da agricultura de subsistência.",
            "A organização das corporações de ofício."
        ],
        "respostaCorreta": "A passagem de altas taxas de natalidade e mortalidade para baixas"
    },
    {
        "categoria": "História",
        "pergunta": " A crise de 1929 teve origem:",
        "respostas": [
            "na quebra da Bolsa de Valores de Nova York.",
            " na guerra entre EUA e Japão.",
            "no fim da escravidão.",
            "no Tratado de Versalhes."
        ],
        "respostaCorreta": "na quebra da Bolsa de Valores de Nova York."
    },
    {
        "categoria": "História",
        "pergunta": " A Guerra Fria terminou com:",
        "respostas": [
            " a vitória dos EUA sobre a URSS em combate.",
            " a ascensão do nazismo.",
            "a queda do Muro de Berlim e o fim da URSS.",
            "ua independência da China."
        ],
        "respostaCorreta": "a queda do Muro de Berlim e o fim da URSS."
    },


    {
        "categoria": "Geografia",
        "pergunta": "Em meados do século XX, o fenômeno social descrito contribuiu para o processo europeu de",
        "respostas": [
            "estabilização da pirâmide etária",
            "conclusão da transição demográfica",
            "contenção da entrada de imigrantes",
            "elevação do crescimento vegetativo"
        ],
        "respostaCorreta": "12"
    },
    {
        "categoria": "Geografia",
        "pergunta": "O fenômeno El Niño está relacionado a:",
        "respostas": [
            "Resfriamento anormal das águas do Atlântico Sul",
            "Aquecimento anormal das águas do Pacífico Equatorial",
            "Aumento da atividade vulcânica no hemisfério norte",
            "Formação de desertos nas zonas temperadas"
        ],
        "respostaCorreta": "Aquecimento anormal das águas do Pacífico Equatorial"
    },
    {
        "categoria": "Geografia",
        "pergunta": "Qual rocha é formada a partir do resfriamento do magma?",
        "respostas": [
            "Rochas metamórficas",
            "Rochas sedimentares",
            "Rochas ígneas",
            "Rochas magmáticas"
        ],
        "respostaCorreta": "Rochas ígneas"
    },
    {
        "categoria": "Geografia",
        "pergunta": "Como é chamado a área que compõem as fronteiras dos domínios morfoclimáticos?",
        "respostas": [
            "Área de transição",
            "Área de contato",
            "Área de intersecção",
            "Área de sobreposição"
        ],
        "respostaCorreta": "Área de transição"
    },
    {
        "categoria": "Geografia",
        "pergunta": "Quais países são os maiores produtores de petróleo do mundo?",
        "respostas": [
            "Estados Unidos, Arábia Saudita e Austrália",
            "Rússia, Arábia Saudita e Estados Unidos",
            "Venezuela, Estados Unidos e Argentina",
            "Brasil, Rússia e Estados Unidos"
        ],
        "respostaCorreta": "Rússia, Arábia Saudita e Estados Unidos"
    },


    {
        "categoria": "Geografia",
        "pergunta": "A linha do Equador divide a Terra em:",
        "respostas": [
            "Leste e oeste",
            "África e Ásia",
            "Norte e sul",
            "América e Europa"
        ],
        "respostaCorreta": "Norte e sul"
    },


    {
        "categoria": "Geografia",
        "pergunta": "Qual é o bioma predominante na região Norte do Brasil?",
        "respostas": ["Cerrado", "Caatinga", "Pampa", "Floresta Amazônica"],
        "respostaCorreta": "Norte e sul"
    },


    {
        "categoria": "Geografia",
        "pergunta": "O clima caracterizado por pouca chuva, altas temperaturas e vegetação rasteira é o:",
        "respostas": ["Equatorial", "Tropical", "Semiárido", "Temperado"],
        "respostaCorreta": "Semiárido"
    },


    {
        "categoria": "Geografia",
        "pergunta": "O que são placas tectônicas?",
        "respostas": [
            "Camadas de nuvens na atmosfera",
            "Fragmentos da litosfera terrestre que se movem",
            "Partes do oceano profundo",
            "Blocos de gelo no Ártico"
        ],
        "respostaCorreta": "Fragmentos da litosfera terrestre que se movem"
    },


    {
        "categoria": "Geografia",
        "pergunta": "O que representa o conceito de transição demográfica?",
        "respostas": [
            "A mudança da população rural para urbana",
            "A substituição da economia agrária pela industrial",
            "A passagem de altas taxas de natalidade e mortalidade para baixas",
            "A migração de refugiados em conflitos armados"
        ],
        "respostaCorreta": "A passagem de altas taxas de natalidade e mortalidade para baixas."
    },


    {
        "categoria": "Física",
        "pergunta": "O que é calor?",
        "respostas": [
            "Energia em trânsito devido à diferença de temperatura",
            "Energia acumulada em um corpo",
            "Sensação térmica do ambiente",
            "Temperatura absoluta do corpo"
        ],
        "respostaCorreta": "Newton"
    },
    {
        "categoria": "Física",
        "pergunta": "O que diz a segunda lei de Newton?",
        "respostas": [
            "A força é igual à massa vezes a aceleração.",
            "A energia não pode ser criada nem destruída.",
            "A pressão é igual à força dividida pela área.",
            "A velocidade é constante em um movimento uniforme."
        ],
        "respostaCorreta": "A força é igual à massa vezes a aceleração."
    },
    {
        "categoria": "Física",
        "pergunta": "Qual é a unidade de medida da energia?",
        "respostas": ["Joule", "Newton", "Pascal", "Watt"],
        "respostaCorreta": "Joule"
    },
    {
        "categoria": "Física",
        "pergunta": "Uma onda sonora não pode se propagar:",
        "respostas": ["Na água", "No vácuo", "No ar", "Em sólidos"],
        "respostaCorreta": "No vácuo"
    },
    {
        "categoria": "Física",
        "pergunta": "Quando empurramos uma caixa sobre o chão e ela não se move, mesmo aplicando uma força considerável, podemos concluir que:",
        "respostas": [
            "A caixa não tem massa.",
            "A força aplicada é maior do que a força de atrito.",
            " As forças estão em equilíbrio.",
            " A força resultante é diferente de zero."
        ],
        "respostaCorreta": "As forças estão em equilíbrio."
    },
    {
        "categoria": "Física",
        "pergunta": " Qual é a unidade de medida da força no Sistema Internacional?",
        "respostas": ["Pascal", "Joule", "Watt", "Newton"],
        "respostaCorreta": "Newton."
    },
    {
        "categoria": "Física",
        "pergunta": " O que é a força da gravidade?",
        "respostas": [
            "Uma força que empurra os corpos para o espaço",
            "Uma força que impede o movimento dos corpos",
            "Uma força que atrai os corpos para o centro da Terra",
            "Uma força gerada apenas por ímãs"
        ],
        "respostaCorreta": "Newton."
    },
    {
        "categoria": "Física",
        "pergunta": " Um carro de 1.000 kg acelera a 2 m/s². Qual a força resultante sobre ele?",
        "respostas": ["500 N", "1.000 N", "2.000 N", "200 N"],
        "respostaCorreta": "2.000 N."
    },
    {
        "categoria": "Física",
        "pergunta": " Um corpo em repouso permanece em repouso, a menos que uma força externa atue sobre ele. Esse é o enunciado de qual lei de Newton?",
        "respostas": [
            "Primeira Lei",
            "Segunda Lei",
            "Terceira Lei",
            "Lei da Gravitação Universal"
        ],
        "respostaCorreta": "Primeira Lei."
    },
    {
        "categoria": "Física",
        "pergunta": "Qual fenômeno explica a formação do arco-íris?",
        "respostas": [
            "Reflexão",
            "Refração e dispersão da luz",
            "Absorção da luz",
            "Polarização"
        ],
        "respostaCorreta": "Refração e dispersão."
    },


    {
        "categoria": "Química",
        "pergunta": "As substâncias que possuem o mesmo número de átomos, mas diferentes arranjos espaciais são chamadas de:",
        "respostas": ["Isômeros", "Isótopos", "Alótropos", "Hidretos"],
        "respostaCorreta": "Isômeros"
    },
    {
        "categoria": "Química",
        "pergunta": "Na tabela periódica, os elementos são organizados de acordo com:",
        "respostas": [
            "Propriedades físicas",
            "Massa atômica",
            "Propriedades químicas",
            "Número atômico"
        ],
        "respostaCorreta": "Número atômico"
    },
    {
        "categoria": "Química",
        "pergunta": "O que é uma reação de neutralização?",
        "respostas": [
            "Reação entre um ácido e uma base",
            "Reação de combustão",
            "Reação de oxidação-redução",
            "Reação de precipitação"
        ],
        "respostaCorreta": "Reação entre um ácido e uma base"
    },
    {
        "categoria": "Química",
        "pergunta": "Qual é o pH de uma solução ácida?",
        "respostas": ["Menor que 7", "Igual a 7", "Maior que 14", "Igual a 14"],
        "respostaCorreta": "Menor que 7"
    },
    {
        "categoria": "Química",
        "pergunta": "O que é um catalisador?",
        "respostas": [
            "Uma substância que aumenta a velocidade de uma reação química",
            "Uma substância que diminui a velocidade de uma reação química",
            "Uma substância que não participa da reação",
            "Uma substância que altera o equilíbrio químico"
        ],
        "respostaCorreta": "Uma substância que aumenta a velocidade de uma reação química"
    },
    {
        "categoria": "Química",
        "pergunta": "Reações químicas que envolvem a troca de elétrons entre os reagentes são chamadas de:",
        "respostas": [
            "Reações de oxidação-redução",
            "Reações de neutralização",
            "Reações de precipitação",
            "Reações de combustão"
        ],
        "respostaCorreta": "Reações de oxidação-redução"
    },
    {
        "categoria": "Química",
        "pergunta": "Qual é o elemento químico com menor massa atômica?",
        "respostas": ["Hidrogênio", "Hélio", "Lítio", "Berílio"],
        "respostaCorreta": "Hidrogênio"
    },
    {
        "categoria": "Química",
        "pergunta": "Qual é o símbolo químico do sódio?",
        "respostas": ["S", "Sd", "Na", "So"],
        "respostaCorreta": "Na"
    },
    {
        "categoria": "Química",
        "pergunta": "Água é formada por quais elementos químicos?",
        "respostas": [
            "Hidrogênio e oxigênio",
            "Oxigênio e nitrogênio",
            "Hidrogênio e carbono",
            "Carbono e oxigênio"
        ],
        "respostaCorreta": "Hidrogênio e oxigênio"
    },
    {
        "categoria": "Química",
        "pergunta": "Qual é o estado físico do cloro à temperatura ambiente?",
        "respostas": ["Sólido", "Líquido", "Gasoso", "Plasma"],
        "respostaCorreta": "Gasoso"
    },


    {
        "categoria": "Biologia",
        "pergunta": "Qual é a unidade básica da vida?",
        "respostas": ["Célula", "Tecido", "Órgão", "Sistema"],
        "respostaCorreta": "Célula"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Qual organela é responsável pela produção de energia nas células?",
        "respostas": ["Ribossomo", "Lisossomo", "Mitocôndria", "Centríolos"],
        "respostaCorreta": "Mitocôndria"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Qual é a função do DNA?",
        "respostas": [
            "Armazenar informações genéticas",
            "Produzir energia",
            "Realizar a fotossíntese",
            "Transportar oxigênio"
        ],
        "respostaCorreta": "Armazenar informações genéticas"
    },
    {
        "categoria": "Biologia",
        "pergunta": "A teoria da evolução foi proposta por:",
        "respostas": [
            "Gregor Mendel",
            "Charles Darwin",
            "Louis Pasteur",
            "Albert Einstein"
        ],
        "respostaCorreta": "Charles Darwin"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Qual é a função dos ribossomos?",
        "respostas": [
            "Produzir energia",
            "Sintetizar proteínas",
            "Realizar a fotossíntese",
            "Armazenar informações genéticas"
        ],
        "respostaCorreta": "Sintetizar proteínas"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Desde o início da vida na Terra, a evolução das espécies é um processo contínuo. Qual é o principal mecanismo responsável por essa evolução?",
        "respostas": ["Mutação", "Seleção natural", "Migração", "Adaptação"],
        "respostaCorreta": "Seleção natural"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Os organismos autotróficos são aqueles que:",
        "respostas": [
            "Produzem seu próprio alimento",
            "Dependem de outros organismos para se alimentar",
            "Vivem em ambientes extremos",
            "Realizam a respiração anaeróbica"
        ],
        "respostaCorreta": "Produzem seu próprio alimento"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Qual é a função do sistema circulatório?",
        "respostas": [
            "Transportar nutrientes e oxigênio",
            "Produzir hormônios",
            "Realizar a digestão",
            "Controlar a temperatura corporal"
        ],
        "respostaCorreta": "Transportar nutrientes e oxigênio"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Qual é o principal componente da membrana celular?",
        "respostas": ["Proteínas", "Carboidratos", "Lipídios", "Ácidos nucleicos"],
        "respostaCorreta": "Lipídios"
    },
    {
        "categoria": "Biologia",
        "pergunta": "Briofitas são plantas que:",
        "respostas": [
            "Possuem flores",
            "Não possuem vasos condutores",
            "Vivem em ambientes aquáticos",
            "Produzem sementes"
        ],
        "respostaCorreta": "Não possuem vasos condutores"
    },


    {
        "categoria": "Língua Portuguesa",
        "pergunta": "O romasntismo teve como características principais:",
        "respostas": [
            "Racionalismo e empirismo",
            "Sentimentalismo e subjetivismo",
            "Realismo e objetividade",
            "Clareza e simplicidade"
        ],
        "respostaCorreta": "Sentimentalismo e subjetivismo"
    },
    {
        "categoria": "Língua Portuguesa",
        "pergunta": "No século XX, o modernismo brasileiro foi muito influnete na criação de uma nova identidade cultural. Qual foi o principal movimento literário desse período?",
        "respostas": ["Romantismo", "Realismo", "Modernismo", "Barroco"],
        "respostaCorreta": "Modernismo"
    }
]




// Função para inserir
async function inserirPerguntas() {
    const batch = db.batch();


    perguntas.forEach((pergunta) => {
        const docRef = db.collection("perguntas").doc(); // ID automático
        batch.set(docRef, pergunta);
    });


    await batch.commit();
    console.log("✅ Perguntas inseridas com sucesso!");
}


inserirPerguntas().catch(console.error);

