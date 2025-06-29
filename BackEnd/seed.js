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
        "pergunta": "A Inconfidência Mineira foi:",
        "respostas": [
            "Um movimento abolicionista do século XIX.",
            "Um movimento de caráter separatista ocorrido no século XVIII.",
            "Uma revolta de escravizados no Nordeste.",
            "Um movimento camponês pela reforma agrária."
        ],
        "respostaCorreta": "Um movimento de caráter separatista ocorrido no século XVIII."
    },



    {
        "categoria": "História",
        "pergunta": " A Primeira Guerra Mundial foi desencadeada principalmente por:",
        "respostas": [
            "disputas coloniais na América Latina.",
            "rivalidades imperialistas e o assassinato do arquiduque Francisco Ferdinando.",
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
            "A passagem de altas taxas de natalidade e mortalidade para baixas"
        ],
        "respostaCorreta": "A substituição do trabalho artesanal pela produção mecanizada."
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
            "a independência da China."
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
        "respostaCorreta": "estabilização da pirâmide etária"
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
        "respostaCorreta": "Floresta Amazônica"
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
        "respostaCorreta": "A passagem de altas taxas de natalidade e mortalidade para baixas"
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
        "respostaCorreta": "Energia em trânsito devido à diferença de temperatura"
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
            "As forças estão em equilíbrio.",
            " A força resultante é diferente de zero."
        ],
        "respostaCorreta": "As forças estão em equilíbrio."
    },
    {
        "categoria": "Física",
        "pergunta": " Qual é a unidade de medida da força no Sistema Internacional?",
        "respostas": ["Pascal", "Joule", "Watt", "Newton"],
        "respostaCorreta": "Newton"
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
        "respostaCorreta": "Uma força que atrai os corpos para o centro da Terra"
    },
    {
        "categoria": "Física",
        "pergunta": " Um carro de 1.000 kg acelera a 2 m/s². Qual a força resultante sobre ele?",
        "respostas": ["500 N", "1.000 N", "2.000 N", "200 N"],
        "respostaCorreta": "2.000 N"
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
        "respostaCorreta": "Primeira Lei"
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
        "respostaCorreta": "Refração e dispersão"
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
      "pergunta": "O romantismo teve como características principais:",
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
      "pergunta": "No século XX, o modernismo brasileiro foi muito influente na criação de uma nova identidade cultural. Qual foi o principal movimento literário desse período?",
      "respostas": [
        "Romantismo",
        "Realismo",
        "Modernismo",
        "Barroco"
      ],
      "respostaCorreta": "Modernismo"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "A crônica é um gênero literário que se caracteriza por:",
      "respostas": [
        "Narrar fatos históricos",
        "Descrever paisagens naturais",
        "Relatar acontecimentos do cotidiano com crítica e subjetiva, e com um toque de humor",
        "Analisar obras literárias"
      ],
      "respostaCorreta": "Relatar acontecimentos do cotidiano com crítica e subjetiva, e com um toque de humor"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "As características dos poemas denominados sonetos são:",
      "respostas": [
        "Estrofes de quatro versos",
        "Rimas alternadas",
        "Dois quartetos e dois tercetos",
        "Rimas emparelhadas"
      ],
      "respostaCorreta": "Dois quartetos e dois tercetos"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "A obra 'O cortiço', de Aluísio de Azevedo, é um exemplo de qual movimento literário?",
      "respostas": [
        "Romantismo",
        "Naturalismo",
        "Modernismo",
        "Barroco"
      ],
      "respostaCorreta": "Naturalismo"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "O trovadorismo é um movimento literário conhecido pela:",
      "respostas": [
        "A produção de poesias líricas e épicas",
        "A prosa de cordel",
        "A literatura de cordel",
        "A literatura de viagem"
      ],
      "respostaCorreta": "A produção de poesias líricas e épicas"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "Um exemplo de subjetividade na literatura é:",
      "respostas": [
        "A descrição detalhada de um lugares",
        "A análise de um personagem fictício",
        "A expressão dos sentimentos e emoções",
        "A narração de um fato histórico"
      ],
      "respostaCorreta": "A expressão dos sentimentos e emoções"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "A tese de um texto dissertativo consiste em:",
      "respostas": [
        "Ideia principal que o autor pretende defender",
        "Um resumo do texto, apresentado crítica ao tema",
        "Uma introdução ao assunto de modo cético",
        "Uma conclusão sem influência do autor"
      ],
      "respostaCorreta": "Ideia principal que o autor pretende defender"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "Qual trecho representa a opinião do autor?",
      "respostas": [
        "A pesquisa foi realizada com 100 pessoas",
        "Os resultados foram surpreendentes",
        "A maioria dos entrevistados preferiu o produto A",
        "O estudo foi publicado em uma revista científica"
      ],
      "respostaCorreta": "Os resultados foram surpreendentes"
    },
    {
      "categoria": "Língua Portuguesa",
      "pergunta": "Um texto argumentativo tem como objetivo:",
      "respostas": [
        "Informar o leitor sobre um assunto",
        "Convencer o leitor sobre um ponto de vista",
        "Contar uma história",
        "Descrever um lugar"
      ],
      "respostaCorreta": "Convencer o leitor sobre um ponto de vista"
    },  


    {
        "categoria": "Inglês",
        "pergunta": "Qual é o passado simples do verbo 'go'?",
        "respostas": [
            "Went",
            "Gone",
            "Goes",
            "Going"
        ],
        "respostaCorreta": "Went"
    },
    {
        "categoria": "Inglês",
        "pergunta": "Qual é o plural de 'child'?",
        "respostas": [
            "Childs",
            "Children",
            "Childes",
            "Childer"
        ],
        "respostaCorreta": "Children"
    },


    {
        "categoria": "Inglês",
        "pergunta": "Qual é a forma correta do verbo 'to be' no passado para a primeira pessoa do singular?",
        "respostas": [
            "Am",
            "Is",
            "Was",
            "Were"
        ],
        "respostaCorreta": "Was"
    },


    {
        "categoria": "Inglês",
        "pergunta": "Qual é um sinônimo para 'maybe'?",
        "respostas": [
            "Perhaps",
            "Definitely",
            "Certainly",
            "Surely"
        ],
        "respostaCorreta": "Perhaps"
    },


    {
        "categoria": "Inglês",
        "pergunta": "Qual é o sujeito da frase: 'She loves to read books'?",
        "respostas": [
            "She",
            "Loves",
            "Read",
            "Books"
        ],
        "respostaCorreta": "She"
    },


    {
        "categoria": "Inglês",
        "pergunta": "A regra grmatical para formar o passado simples de verbos regulares é adicionar:",
        "respostas": [
            "-ed",
            "-ing",
            "-s",
            "-es"
        ],
        "respostaCorreta": "-ed"
    },


    {
        "categoria": "Inglês",
        "pergunta": "A forma correta do verbo 'to have' no passado para a segunda pessoa do singular é:",
        "respostas": [
            "Have",
            "Has",
            "Had",
            "Haves"
        ],
        "respostaCorreta": "Had"
    },


    {
        "categoria": "Inglês",
        "pergunta": "Qual palavra falta na frase 'She is ___ than her sister'?",
        "respostas": [
            "Taller",
            "Tallest",
            "Tall",
            "More tall"
        ],
        "respostaCorreta": "Taller"
    },


    {
        "categoria": "Inglês",
        "pergunta": "What is the translation of the text 'We went to do a test'?",
        "respostas": [
            "Nós fomos fazer um teste",
            "Nós vamos fazer um teste",
            "Nós fizemos um teste",
            "Nós fazemos um teste"
        ],
        "respostaCorreta": "Nós fomos fazer um teste"
    },


    {
        "categoria": "Inglês",
        "pergunta": "What is the subject of the sentence 'When I go to bed?'?",
        "respostas": [
            "When",
            "I",
            "Go",
            "Bed"
        ],
        "respostaCorreta": "I"
    },

    // Matemática
    {
      "categoria": "Matemática",
      "pergunta": "Uma escultura apresentada tem 100 micrômetros de comprimento. Um micrômetro é a milionésima parte de um metro. Usando notação científica, qual é a representação do comprimento dessa miniatura, em metro?",
      "respostas": ["1,0 X 10-¹", "1,0 X 10-³", "10,0 X 10-²", "1,0 X 10-⁴"],
      "respostaCorreta": "1,0 X 10-⁴"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Quantos centímetros há em 278,5 metro?",
      "respostas": ["2,785", "2785", "27850", "278500"],
      "respostaCorreta": "27850"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Quais todos os anagramas da frase “I AM POTTER”",
      "respostas": ["9!", "4! 5!", "2 X 4! 5!", "4! 5! / 2"],
      "respostaCorreta": "4! 5! / 2"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Em um grupo de pessoas, as idades são: 10, 12, 15 e 17 anos. Caso uma pessoa de 16 anos junte-se ao grupo, o que acontece com a média das idades do grupo?",
      "respostas": ["Aumentada em menos de 1 ano", "Aumentada em 2 anos", "Diminuída em 3 anos", "Diminuída em 5 anos"],
      "respostaCorreta": "Aumentada em menos de 1 ano"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Um carro consome 15 litros de gasolina para percorrer 100 km. Qual é o consumo do carro em 350 km?",
      "respostas": ["7,5 litros", "10,5 litros", "12,5 litros", "15,5 litros"],
      "respostaCorreta": "52,5 litros"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Ao somar 32 graus com mais um número, é dado um total de 90 graus. Como é chamado esse ângulo?",
      "respostas": ["Ângulo Suplementar", "Ângulo Reto", "Ângulo Obtuso", "Ângulo Complementar"],
      "respostaCorreta": "Ângulo Complementar"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Qual é o valor de x na equação 2x + 6 = 14?",
      "respostas": ["3", "4", "5", "6"],
      "respostaCorreta": "4"
    },
    {
      "categoria": "Matemática",
      "pergunta": "O número 17 é:",
      "respostas": ["Par", "Múltiplo de 5", "Número primo", "Número irracional"],
      "respostaCorreta": "Número primo"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Qual o valor de 1 terabyte em gigabytes?",
      "respostas": ["1.024", "1.020", "10.024", "1.020"],
      "respostaCorreta": "1.024"
    },
    {
      "categoria": "Matemática",
      "pergunta": "Qual o maior lado de um triângulo retângulo de lado 6 e 8?",
      "respostas": ["10", "12", "14", "16"],
      "respostaCorreta": "10"
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




