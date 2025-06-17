// --- INÍCIO DO CÓDIGO PARA TranslationAndStructure.jsx ---
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../css/Evolucao.css"; // Reutilizando o CSS

function TranslationAndStructure() {
  const navigate = useNavigate();
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("progresso_translation");
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
        setTimeout(() => notification.remove(), 500);
      }, 2000);
    }, 100);
  };

  const marcarComoConcluido = () => {
    localStorage.setItem("progresso_translation", "true");
    setConcluido(true);
    showNotification("✓ Conteúdo marcado como concluído!", "success");
  };

  const removerConcluido = () => {
    localStorage.setItem("progresso_translation", "false");
    setConcluido(false);
    showNotification("✗ Conteúdo desmarcado como concluído.", "info");
  };

  const voltar = () => navigate("/Ingles");

  return (
    <div className="feudalismo-wrapper">
      <header className="top-bar">
        <img src={logo} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn">Sobre Nós</button>
          <button className="btn sair">Sair</button>
        </div>
      </header>
      <main className="content">
        <div className="top-content-actions">
          <button className="back-button" onClick={voltar}>Voltar</button>
          {concluido ? (<button className="btn-concluido concluido" onClick={removerConcluido}>Concluído!</button>) : (<button className="btn-concluido" onClick={marcarComoConcluido}>Marcar como Concluído</button>)}
        </div>
        <h1 className="titulo-principal">
          <span className="titulo-animado">Estrutura de Frases e Tradução</span>
          <div className="subtitulo-principal">Compreenda a lógica do inglês para traduzir com precisão</div>
        </h1>
        <div className="resumo-card">
          <section className="resumo-section">
            <h2 className="resumo-titulo">Resumo Geral sobre Estrutura e Tradução</h2>
            <div className="resumo-content">
              <p className="resumo-descricao">
                Tradução não é apenas sobre trocar palavras de um idioma para outro; é sobre entender a estrutura, o tempo verbal e o contexto da frase original para recriá-la de forma fiel no idioma de destino. A base da maioria das frases em inglês é a ordem SVO (Sujeito-Verbo-Objeto). Compreender essa estrutura é o segredo para uma interpretação e tradução corretas.
              </p>
              <div className="imagemPrincipal">
                <img src="https://blog.influx.com.br/storage/2023/11/header_traducao-de-textos-em-ingles-1200x675.jpg" alt="Tradução de Textos" className="imagemPrincipal" />
              </div>
            </div>
          </section>
          <section className="contexto-section">
            <h2 className="resumo-titulo"><span className="titulo-icon">🔎</span>Análise da Frase-Chave</h2>
            <div className="content-with-image">
              <div className="text-content">
                <p className="resumo-descricao">
                  Vamos analisar a questão: <strong>"What is the translation of the text 'We went to do a test'?"</strong> (Qual é a tradução do texto 'We went to do a test'?)
                </p>
                <h2 className="resumo-titulo"><span className="titulo-icon">🧩</span> Desmontando a Frase</h2>
                <p className="resumo-descricao">
                  <strong>'We'</strong>: Sujeito (Nós).<br/>
                  <strong>'went'</strong>: Verbo no Simple Past. É o passado irregular de 'go' (ir). Significa "fomos".<br/>
                  <strong>'to do'</strong>: Verbo no infinitivo (fazer). A preposição 'to' aqui indica propósito. <br/>
                  <strong>'a test'</strong>: Objeto (um teste).<br/>
                </p>
                <h2 className="resumo-titulo"><span className="titulo-icon">✅</span> A Tradução Correta</h2>
                 <p className="resumo-descricao">
                  Juntando as partes, a tradução literal e correta é <strong>"Nós fomos fazer um teste"</strong>. As outras opções estão incorretas porque usam o tempo verbal errado: "vamos" (futuro/presente), "fizemos" (passado, mas com outro verbo), "fazemos" (presente).
                </p>
              </div>
              <div className="side-image-container">
                <img src="https://cdn.wizard.com.br/wp-content/uploads/2016/05/18182909/aprenda-a-diferenca-entre-os-verbos-do-e-make-em-ingles.jpg" alt="Verbos Do e Make" className="side-image" />
                <div className="image-caption">Entender os verbos é crucial para a tradução.</div>
              </div>
            </div>
          </section>
          <section className="caracteristicas-section">
            <h2 className="resumo-titulo">Dicas para uma Boa Tradução</h2>
            <div className="caracteristica-item">
              <div className="content-with-image">
                <div className="text-content">
                  <p className="resumo-descricao">
                    Para evitar erros comuns, siga estes passos ao traduzir:
                  </p>
                  <div className="estamentos-grid">
                    <div className="estamento-card"><h4>1. Identifique o Sujeito</h4><p>Quem está realizando a ação?</p></div>
                    <div className="estamento-card"><h4>2. Identifique o Verbo Principal</h4><p>Qual é a ação e em que tempo verbal ela está?</p></div>
                    <div className="estamento-card"><h4>3. Cuidado com Falsos Cognatos</h4><p>Palavras que parecem, mas não são. Ex: 'push' (empurrar, não puxar).</p></div>
                    <div className="estamento-card"><h4>4. Entenda o Contexto</h4><p>O significado de uma palavra pode mudar dependendo da situação.</p></div>
                  </div>
                </div>
                <div className="side-image-container">
                  <img src="https://www.learning-english-online.net/wp-content/uploads/2021/04/False-Friends.png" alt="Falsos Cognatos" className="side1-image" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content"><ul><li><span onClick={voltar}>Página Inicial</span></li></ul></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Gabarita Mente - Todos os direitos reservados</p></div>
      </footer>
    </div>
  );
}

export default TranslationAndStructure;
// --- FIM DO CÓDIGO PARA TranslationAndStructure.jsx ---