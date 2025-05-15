import React from 'react';
import { useParams } from 'react-router-dom';
import './Red.css';

const bancoDeTextos = {
  1: {
    tema: 'A importância da alfabetização na infância no Brasil',
    textos: {
      texto1: 'Texto sobre alfabetização...',
      imagem: '/tirinha.png',
      proposta: 'Redija um texto dissertativo sobre a importância da alfabetização...'
    }
  },
  2: {
    tema: 'Os desafios da mobilidade urbana nas grandes cidades',
    textos: {
      texto1: 'Texto sobre mobilidade urbana...',
      imagem: '/tema2-extra.png',
      proposta: 'Redija um texto dissertativo sobre mobilidade urbana...'
    }
  },
};

const TextosApoio = () => {
  const { id } = useParams();
  const dados = bancoDeTextos[id];

  if (!dados) return <p>Conteúdo não encontrado.</p>;

  return (
    <div className="pagina">
      <header className="topo">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Redação</h1>
        <button className="botao-sair">Sair</button>
      </header>

      <h2 className="titulo">Textos de Apoio - {dados.tema}</h2>

      <div className="conteudo-apoio">
        <div className="caixa-texto">
          <h3>TEXTO I</h3>
          <p>{dados.textos.texto1}</p>
        </div>

        <div className="caixa-texto">
          <h3>TEXTO III</h3>
          <img src={dados.textos.imagem} alt="imagem de apoio" className="tirinha" />
        </div>

        <div className="proposta">
          <h3>PROPOSTA DE REDAÇÃO</h3>
          <p>{dados.textos.proposta}</p>
        </div>
      </div>
    </div>
  );
};

export default TextosApoio;
