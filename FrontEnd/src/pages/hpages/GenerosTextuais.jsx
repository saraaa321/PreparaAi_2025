import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Evolucao.css";

function GenerosTextuais() {
  const navigate = useNavigate();
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progresso_generos");
    if (saved === "true") {
      setConcluido(true);
    }
  }, []);

  const showNotification = (message, type) => {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
          notification.remove();
        }, 500);
      }, 2000);
    }, 100);
  };

  const marcarComoConcluido = () => {
    localStorage.setItem("progresso_generos", "true");
    setConcluido(true);
    showNotification("✓ Conteúdo marcado como concluído!", "success");
  };

  const removerConcluido = () => {
    localStorage.setItem("progresso_generos", "false");
    setConcluido(false);
    showNotification("✗ Conteúdo desmarcado como concluído.", "info");
  };

  const voltar = () => navigate("/Portugues");

  return (
    <div className="feudalismo-wrapper">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn" onClick={() => alert("Página 'Sobre Nós' em construção.")}>Sobre Nós</button>
          <button className="btn sair" onClick={() => alert("Você saiu com sucesso.")}>Sair</button>
        </div>
      </header>

      <main className="content">
        <div className="top-content-actions">
          <button className="back-button" onClick={voltar}>
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar
          </button>
          {concluido ? (
            <button className="btn-concluido concluido" onClick={removerConcluido}>
              Concluído!
            </button>
          ) : (
            <button className="btn-concluido" onClick={marcarComoConcluido}>
              Marcar como Concluído
            </button>
          )}
        </div>

        <h1 className="titulo-principal">
          <span className="titulo-animado">Gêneros Textuais</span>
          <div className="subtitulo-principal">Entenda profundamente os principais gêneros e suas funções na comunicação</div>
        </h1>

        <div className="resumo-card">
          <section className="resumo-section">
            <h2 className="resumo-titulo">
              O que são Gêneros Textuais?
            </h2>
            <div className="resumo-content">
              <p className="resumo-descricao">
                Gêneros textuais são formas de organização dos textos que surgem das necessidades de comunicação do dia a dia. Eles não são modelos fixos, mas sim construções sociais e culturais que se adaptam a diferentes contextos, épocas e suportes. Cada gênero textual apresenta características próprias de estrutura, linguagem, finalidade e público-alvo, refletindo as práticas sociais e as intenções comunicativas dos falantes e escritores.
              </p>
              <p className="resumo-descricao">
                A noção de gênero textual é fundamental para compreender como a linguagem funciona na sociedade. Ao longo da vida, interagimos com uma grande variedade de gêneros, como notícias, cartas, receitas, e-mails, artigos de opinião, crônicas, poemas, entre outros. Cada um deles cumpre uma função específica e exige do leitor e do produtor textual diferentes habilidades de leitura, interpretação e produção.
              </p>
              <div className="imagemPrincipal">
                <img
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxdcjd8rebks54gae7955wfv%2F1749574929_img_2.webp?st=2025-06-10T15%3A46%3A01Z&se=2025-06-16T16%3A46%3A01Z&sks=b&skt=2025-06-10T15%3A46%3A01Z&ske=2025-06-16T16%3A46%3A01Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qTRswymxJOWLOffIyvahakL8s46H3I0bcDZMdgst2%2FU%3D&az=oaivgprodscus"
                  alt="Gêneros Textuais"
                  className="imagemPrincipal"
                />
              </div>
            </div>
          </section>

          <section className="contexto-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon">📚</span>
              Principais Gêneros Textuais e Exemplos
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  Os gêneros textuais são inúmeros e estão em constante transformação, acompanhando as mudanças sociais, tecnológicas e culturais. A seguir, conheça alguns dos principais gêneros e suas características:
                </p>
                <ul>
                  <li>
                    <strong>Narrativo:</strong> Tem como objetivo contar uma história, real ou fictícia, com personagens, tempo, espaço e enredo. Exemplos: conto, crônica, romance, fábula, novela, lenda.
                  </li>
                  <li>
                    <strong>Descritivo:</strong> Busca apresentar, detalhadamente, as características de pessoas, lugares, objetos ou situações, criando uma imagem mental no leitor. Exemplos: descrição literária, retrato, anúncio imobiliário, cardápio.
                  </li>
                  <li>
                    <strong>Dissertativo-argumentativo:</strong> Expõe ideias, opiniões e argumentos sobre determinado tema, com o objetivo de convencer o leitor. É o gênero mais cobrado em redações de vestibulares e do Enem. Exemplos: artigo de opinião, editorial, ensaio, redação escolar.
                  </li>
                  <li>
                    <strong>Injuntivo ou Instrucional:</strong> Orienta, instrui ou aconselha o leitor a realizar uma ação, geralmente por meio de verbos no imperativo. Exemplos: receita culinária, manual de instruções, regulamento, bula de remédio, tutorial.
                  </li>
                  <li>
                    <strong>Expositivo:</strong> Tem como finalidade informar, explicar ou expor um assunto de forma clara e objetiva, sem a intenção de convencer. Exemplos: reportagem, verbete de dicionário, palestra, seminário, resumo.
                  </li>
                  <li>
                    <strong>Dialogal:</strong> Estruturado a partir de diálogos entre personagens ou interlocutores, podendo ser oral ou escrito. Exemplos: entrevista, peça teatral, conversa de chat, bate-papo, diálogo em histórias em quadrinhos.
                  </li>
                </ul>
                <br></br>
                <p className="resumo-descricao">
                  Além desses, existem gêneros híbridos e digitais, como postagens em redes sociais, blogs, memes, podcasts e vídeos, que misturam características de vários gêneros tradicionais.
                </p>
              </div>
              <div className="side-image-container">
                <img
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxdaswdff0yrrsasyfdd3ysg%2F1749573064_img_1.webp?st=2025-06-10T14%3A58%3A17Z&se=2025-06-16T15%3A58%3A17Z&sks=b&skt=2025-06-10T14%3A58%3A17Z&ske=2025-06-16T15%3A58%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=tA6ClIr3zeLRRqjkxvvyyKZkqOQ%2F9CvVF3mu5wiYJco%3D&az=oaivgprodscus"
                  alt="Exemplo de texto"
                  className="side-image"
                />
                <div className="image-caption">Exemplo de texto em diferentes gêneros</div>
              </div>
            </div>
          </section>

          <section className="caracteristicas-section">
            <h2 className="resumo-titulo">
              Características dos Gêneros Textuais
            </h2>
            <div className="caracteristica-item">
              <h3 className="caracteristica-titulo">Estrutura e Linguagem</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    Cada gênero textual possui uma estrutura própria, que pode variar conforme o objetivo comunicativo e o contexto de produção. Por exemplo, uma carta apresenta saudação, corpo do texto e despedida; uma notícia traz título, lead (resumo inicial) e desenvolvimento; já uma receita é composta por ingredientes e modo de preparo.
                  </p>
                  <p className="resumo-descricao">
                    A linguagem utilizada em cada gênero também varia: pode ser formal ou informal, objetiva ou subjetiva, simples ou rebuscada. A escolha da linguagem depende do público-alvo, do suporte (impresso, digital, oral) e da intenção do autor. Por exemplo:
                  </p>
                  <ul>
                    <li><strong>Notícia:</strong> Linguagem clara, objetiva, impessoal e informativa.</li>
                    <li><strong>Crônica:</strong> Linguagem leve, cotidiana, muitas vezes com humor, ironia ou crítica social.</li>
                    <li><strong>Artigo de opinião:</strong> Linguagem argumentativa, com defesa de ponto de vista, uso de dados e exemplos.</li>
                    <li><strong>Receita:</strong> Linguagem instrucional, uso de verbos no imperativo, frases curtas e diretas.</li>
                  </ul>
                  <br></br>
                  <p className="resumo-descricao">
                    É importante lembrar que a estrutura e a linguagem dos gêneros textuais não são rígidas: elas podem se adaptar e se transformar conforme as necessidades comunicativas e as inovações tecnológicas.
                  </p>
                </div>
                <div className="side-image-container">
                  <img
                    src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxdbb91cf3fsgrp0vr7kg7cd%2F1749573633_img_1.webp?st=2025-06-10T14%3A56%3A51Z&se=2025-06-16T15%3A56%3A51Z&sks=b&skt=2025-06-10T14%3A56%3A51Z&ske=2025-06-16T15%3A56%3A51Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=rI6kaDjwdib9NZVerPup9TQhh77%2BJYqMMnj0Z0HpAAI%3D&az=oaivgprodscus"
                    alt="Gêneros textuais"
                    className="side1-image"
                  />
                </div>
              </div>
            </div>

            <div className="caracteristica-item">
              <h3 className="resumo-titulo">📝 Funções Sociais e Importância</h3>
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    Os gêneros textuais cumprem funções sociais essenciais, pois são instrumentos de interação, organização e construção de sentido entre as pessoas. Eles permitem informar, convencer, emocionar, instruir, entreter, organizar a vida em sociedade e registrar acontecimentos históricos e culturais.
                  </p>
                  <ul>
                    <li><strong>Informar:</strong> Notícia, reportagem, verbete, aviso.</li>
                    <li><strong>Convencer:</strong> Artigo de opinião, editorial, propaganda, carta argumentativa.</li>
                    <li><strong>Entreter:</strong> Conto, crônica, piada, tirinha, romance.</li>
                    <li><strong>Instruir:</strong> Manual, receita, regulamento, tutorial.</li>
                    <li><strong>Registrar:</strong> Diário, ata, biografia, autobiografia.</li>
                  </ul>
                  <br></br>
                  <p className="resumo-descricao">
                    Dominar os gêneros textuais é fundamental para a vida acadêmica, profissional e pessoal, pois amplia a capacidade de comunicação, interpretação e produção de textos adequados a diferentes situações.
                  </p>
                </div>
                <div className="side-image-container">
                  <img
                    src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxdbsmx8es0szdvz4ngmwhr5%2F1749574109_img_2.webp?st=2025-06-10T15%3A45%3A16Z&se=2025-06-16T16%3A45%3A16Z&sks=b&skt=2025-06-10T15%3A45%3A16Z&ske=2025-06-16T16%3A45%3A16Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=A9Dh7HxYb6J2QJUPIkP%2FsZHrqAI%2B1e0YqvPaTA7rK4A%3D&az=oaivgprodscus"
                    alt="Função dos textos"
                    className="side-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="decadencia-section">
            <h2 className="resumo-titulo">
              <span className="titulo-icon">💡</span>
              Dicas para Identificar e Produzir Gêneros Textuais
            </h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  Para identificar corretamente um gênero textual, observe atentamente:
                </p>
                <ul>
                  <li><strong>Finalidade:</strong> Qual o objetivo do texto? Informar, convencer, entreter, instruir?</li>
                  <li><strong>Estrutura:</strong> Como o texto está organizado? Possui título, introdução, desenvolvimento, conclusão, diálogos?</li>
                  <li><strong>Linguagem:</strong> É formal ou informal? Objetiva ou subjetiva? Há uso de figuras de linguagem?</li>
                  <li><strong>Contexto:</strong> Onde, quando e para quem o texto foi produzido? Qual o suporte (impresso, digital, oral)?</li>
                </ul>
                <p className="resumo-descricao">
                  Para produzir um bom texto em qualquer gênero, é importante ler exemplos variados, analisar suas características e praticar a escrita, sempre considerando o público-alvo e o objetivo comunicativo. O domínio dos gêneros textuais é uma habilidade essencial para o sucesso em provas, redações, vida acadêmica e no mercado de trabalho.
                </p>
                <p className="resumo-descricao">
                  Praticar a leitura de diferentes gêneros é fundamental para ampliar a compreensão e a produção textual, além de ser essencial para se sair bem em provas e redações. Lembre-se: quanto mais você lê e escreve, mais fácil será identificar e produzir textos adequados a cada situação.
                </p>
              </div>
              <div className="side-image-container">
                <img
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxdc4tpsebt997eb5bjqbysx%2F1749574474_img_0.webp?st=2025-06-10T15%3A34%3A53Z&se=2025-06-16T16%3A34%3A53Z&sks=b&skt=2025-06-10T15%3A34%3A53Z&ske=2025-06-16T16%3A34%3A53Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=7quUzHjaOs1MERH2wXBdK%2FFRX3c8GmZ6l%2B29kslAJQc%3D&az=oaivgprodscusg"
                  className="side-image"
                  alt="Livros e textos"
                />
              </div>
            </div>
          </section>
        </div>
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

export default GenerosTextuais;