import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Celulas.css"; 

const celulasData = [
  {
    id: "teoria-celular",
    titulo: "🔬 Teoria Celular",
    descricao: 
      "Teoria celular, teoria científica fundamental da biologia segundo a qual as células são consideradas as unidades básicas de todos os tecidos vivos. Proposta pela primeira vez pelos cientistas alemães Theodor Schwann e Matthias Jakob Schleiden em 1838, a teoria de que todas as plantas e animais são compostos de células marcou um grande avanço conceitual na biologia e resultou em uma atenção renovada aos processos vitais que ocorrem nas células. Desenhos de Robert Hooke Desenhos de Robert HookeDesenhos de Robert Hooke da estrutura celular da cortiça e de um ramo de planta sensível, de Micrographia (1665). A história da teoria celular é uma história da observação real das células, pois as previsões e especulações iniciais sobre a natureza da célula geralmente eram malsucedidas.",
    causas: [ 
      "Todos os organismos vivos são compostos por uma ou mais células.",
      "A célula é a unidade básica de estrutura e organização nos organismos.",
      "Todas as células surgem de células preexistentes por divisão celular.",
      "A informação hereditária (DNA/RNA) é passada de célula para célula durante a divisão.",
      "Todas as células têm composição química básica semelhante.",
      "O fluxo de energia (metabolismo e bioquímica) ocorre dentro das células.",
    ],
    consequencias: [
      "Células Procariontes: Estruturalmente simples, sem núcleo organizado (material genético disperso no citosol - nucleoide) e sem organelas membranosas. Ex: Bactérias e Arqueas.",
      "Células Eucariontes: Estruturalmente complexas, com núcleo delimitado por membrana (carioteca) e diversas organelas membranosas (mitocôndrias, retículo endoplasmático, etc.). Ex: Animais, Plantas, Fungos, Protistas.",
      "As diferenças estruturais refletem complexidades funcionais e evolutivas distintas.",
    ],
    imagem: "https://www.lifeder.com/wp-content/uploads/2019/11/teoria-celular.jpg",
  },
  {
    id: "celula-procarionte",
    titulo: "🦠 Célula Procarionte",
    descricao:
      "As células procariontes ou procarióticas não possuem núcleo, estando seu material genético disperso no citoplasma. O termo procarionte vem do grego pro, que significa antes, e karyon, que significa núcleo. Os procariotos são seres unicelulares, ou seja, formados por uma única célula. Esses organismos podem ocorrer de maneira individual ou formar colônias. Em geral, são pequenos. As bactérias, por exemplo, medem, com algumas exceções, de 0,2 µm a 2 µm de diâmetro e de 2 µm a 8 µm de comprimento.",
    causas: [ 
      "Membrana Plasmática: Delimita a célula, controla o transporte de substâncias.",
      "Parede Celular (geralmente presente): Confere proteção, forma e suporte. Em bactérias, contém peptidoglicano.",
      "Citoplasma/Citosol: Meio gelatinoso onde ocorrem as reações metabólicas e onde se localizam os ribossomos e o nucleoide.",
      "Ribossomos (70S): Responsáveis pela síntese de proteínas. São menores que os ribossomos eucarióticos.",
      "Nucleoide: Região que contém o material genético principal (DNA circular único).",
      "Plasmídeos (frequentes): Pequenas moléculas de DNA circular extra, que podem conferir vantagens adaptativas (ex: resistência a antibióticos).",
      "Flagelos e Pili (em algumas): Estruturas para locomoção (flagelos) ou adesão e conjugação (pili).",
    ],
    consequencias: [ 
      "Metabolismo diversificado: Podem ser autótrofas (fotossintetizantes ou quimiossintetizantes) ou heterótrofas.",
      "Reprodução assexuada rápida, principalmente por divisão binária.",
      "Importância ecológica: Decomposição da matéria orgânica, ciclagem de nutrientes, fixação de nitrogênio.",
      "Relações simbióticas: Algumas vivem em simbiose com outros organismos (ex: flora intestinal).",
      "Aplicações biotecnológicas: Produção de antibióticos, enzimas, alimentos fermentados.",
      "Potencial patogênico: Algumas espécies causam doenças em plantas e animais, incluindo humanos.",
    ],
    imagem: "https://www.infoescola.com/wp-content/uploads/2016/01/celula-procariotica.jpg",
  },
  {
    id: "celula-eucarionte-animal",
    titulo: "🐾 Célula Eucarionte Animal",
    descricao:
      "As células eucariontes animais são complexas, caracterizadas pela presença de um núcleo individualizado que abriga o DNA, e diversas organelas membranosas com funções específicas. São a unidade fundamental dos tecidos e órgãos dos animais. Diferem das células vegetais por não possuírem parede celular, cloroplastos e grandes vacúolos centrais.",
    causas: [ 
      "Membrana Plasmática: Envoltório flexível que regula trocas com o meio.",
      "Núcleo: Contém os cromossomos (DNA) e controla as atividades celulares, incluindo a síntese de RNA.",
      "Citoplasma: Inclui o citosol e as organelas.",
      "Mitocôndrias: Realizam a respiração celular, produzindo ATP (energia).",
      "Retículo Endoplasmático Rugoso (RER): Síntese de proteínas (com ribossomos aderidos) para secreção ou membranas.",
      "Retículo Endoplasmático Liso (REL): Síntese de lipídios, desintoxicação celular, armazenamento de cálcio.",
      "Complexo de Golgi: Modifica, empacota e endereça proteínas e lipídios; forma lisossomos.",
      "Lisossomos: Contêm enzimas digestivas para degradar partículas e organelas velhas (digestão intracelular).",
      "Centríolos: Importantes na divisão celular (formação do fuso acromático) e na origem de cílios e flagelos.",
      "Ribossomos (80S): Livres no citosol ou ligados ao RER, sintetizam proteínas.",
    ],
    consequencias: [ 
      "Compartimentalização: Organelas permitem que diferentes processos ocorram simultaneamente sem interferência.",
      "Especialização celular: Permite a formação de diferentes tipos de tecidos e órgãos com funções específicas (ex: neurônios, células musculares).",
      "Metabolismo energético eficiente (respiração celular aeróbica nas mitocôndrias).",
      "Capacidade de resposta a estímulos e comunicação intercelular.",
      "Processos de endocitose e exocitose para transporte de macromoléculas.",
      "Crescimento e desenvolvimento de organismos multicelulares complexos.",
    ],
    imagem: "https://static.preparaenem.com/2022/08/celula-eucarionte.jpg",
  },
  {
    id: "celula-eucarionte-vegetal",
    titulo: "🌿 Célula Eucarionte Vegetal",
    descricao:
      "As células eucariontes vegetais formam os tecidos das plantas e algas. Como outras células eucariontes, possuem núcleo e organelas membranosas. No entanto, apresentam estruturas exclusivas como a parede celular rígida (primariamente de celulose), cloroplastos para fotossíntese, e um grande vacúolo central para armazenamento e manutenção da turgescência.",
    causas: [ 
      "Parede Celular: Externa à membrana plasmática, confere rigidez, suporte mecânico e proteção. Composta principalmente de celulose.",
      "Membrana Plasmática: Regula o transporte de substâncias.",
      "Núcleo: Contém o DNA e controla as funções celulares.",
      "Cloroplastos: Organelas onde ocorre a fotossíntese, convertendo energia luminosa em química (glicose).",
      "Vacúolo Central (Grande Vacúolo): Armazena água, íons, nutrientes e resíduos; mantém a pressão de turgor.",
      "Mitocôndrias: Realizam a respiração celular para produção de ATP.",
      "Retículo Endoplasmático (Liso e Rugoso): Síntese de lipídios e proteínas, respectivamente.",
      "Complexo de Golgi: Processamento e transporte de substâncias; síntese de polissacarídeos da parede celular.",
      "Plasmodesmos: Canais que atravessam as paredes celulares, permitindo comunicação e transporte entre células adjacentes.",
      "Ribossomos (80S): Síntese de proteínas.",
    ],
    consequencias: [
      "Fotossíntese: Produção de matéria orgânica e oxigênio, base da maioria das cadeias alimentares.",
      "Suporte estrutural: A parede celular e o turgor do vacúolo conferem rigidez às plantas.",
      "Armazenamento: O vacúolo armazena substâncias essenciais e produtos do metabolismo.",
      "Crescimento: A expansão celular é crucial para o crescimento vegetal, influenciada pelo vacúolo.",
      "Produção de alimentos, fibras, madeira e medicamentos para outros seres vivos, incluindo humanos.",
      "Manutenção do equilíbrio ecológico e dos ciclos biogeoquímicos.",
    ],
    imagem: "https://i.pinimg.com/736x/5a/e7/b9/5ae7b90717000f868a2a4edcf8bdc9b5.jpg",
  },
  {
    id: "organelas-membranosas",
    titulo: "🧬 Organelas Membranosas Notáveis",
    descricao:
      "As células eucariontes possuem um sistema complexo de membranas internas que delimitam compartimentos chamados organelas. Cada organela possui estrutura e enzimas específicas, permitindo a especialização de funções e aumentando a eficiência celular. Mitocôndrias, cloroplastos, retículo endoplasmático e complexo de Golgi são exemplos cruciais.",
    causas: [ 
      "Mitocôndria: Presente em células eucariontes animais e vegetais. Possui dupla membrana, sendo a interna pregueada (cristas mitocondriais). Local da respiração celular aeróbica, onde a glicose é oxidada para produzir ATP. Contém DNA próprio e ribossomos, sugerindo origem endossimbiótica.",
      "Cloroplasto: Presente em células vegetais e algas. Possui dupla membrana e um sistema interno de membranas (tilacoides, que formam os grana). Local da fotossíntese. Contém clorofila e outros pigmentos. Também possui DNA próprio e ribossomos, apoiando a teoria endossimbiótica.",
      "Retículo Endoplasmático (RE): Rede de túbulos e sacos interconectados. RER (com ribossomos) sintetiza proteínas para exportação/membranas. REL (sem ribossomos) sintetiza lipídios, armazena cálcio e participa da desintoxicação.",
      "Complexo de Golgi (Aparelho de Golgi): Pilha de sacos achatados (cisternas). Recebe, modifica, classifica e empacota proteínas e lipídios vindos do RE. Forma lisossomos e vesículas de secreção.",
    ],
    consequencias: [ 
      "Eficiência Metabólica: A separação de processos em diferentes organelas evita interferências e otimiza reações.",
      "Produção de Energia: Mitocôndrias (ATP via respiração) e Cloroplastos (glicose via fotossíntese) são centrais energéticas.",
      "Síntese e Transporte de Macromoléculas: RE e Golgi trabalham em conjunto para produzir e distribuir proteínas e lipídios.",
      "Endossimbiose: A estrutura e autonomia (DNA próprio) de mitocôndrias e cloroplastos são fortes evidências da teoria endossimbiótica, que explica sua origem a partir de procariontes fagocitados.",
      "Base para a Multicelularidade: A complexidade das organelas permite a especialização celular, fundamental para organismos multicelulares.",
    ],
    imagem: "https://embrionhands.uff.br/wp-content/uploads/sites/275/2020/07/organelas-citoplasm%C3%A1ticas.jpg",
  },
];

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
    navigate('/Biologia');
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
          <button className="back-button" onClick={voltar}>
          <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
          </button>
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">O Mundo das Células</span>
          <div className="subtitulo-principal">Explore os fundamentos da Biologia Celular</div>
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
                      Estruturas 
                    </button>
                    <button
                      className={`tab-button ${activeTab[item.id] === 'consequencias' ? 'active' : ''}`}
                      onClick={() => handleTabClick(item.id, 'consequencias')}
                    >
                      Funções 
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