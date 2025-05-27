import React from 'react';
import './css/Red.css';
import { useNavigate } from 'react-router-dom';

const Temas = () => {
  const navigate = useNavigate();
  const temas = [
    {
      id: 1,
      titulo: 'A importância da alfabetização na infância no Brasil',
      banca: 'ENEM',
      imagem: '/tema1.png',
    },
    {
      id: 2,
      titulo: 'Os desafios da mobilidade urbana nas grandes cidades',
      banca: 'ENEM',
      imagem: '/tema2.png',
    },
    {
      id: 3,
      titulo: 'A influência das redes sociais na formação dos jovens',
      banca: 'ENEM',
      imagem: '/tema3.png',
    },
    {
      id: 4,
      titulo: 'Caminhos para combater a violência contra a mulher no Brasil',
      banca: 'ENEM',
      imagem: '/tema4.png',
    },
    {
      id: 5,
      titulo: 'O papel da ciência no enfrentamento de pandemias',
      banca: 'ENEM',
      imagem: '/tema5.png',
    },
    {
      id: 6,
      titulo: 'A preservação ambiental como desafio contemporâneo',
      banca: 'ENEM',
      imagem: '/tema6.png',
    },
  ];

  const acessarTema = (id) => {
    navigate(`/textosapoio/${id}`);
  };

  return (
    <div className="pagina">
      <header className="topo">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Redação</h1>
        <button className="botao-sair">Sair</button>
      </header>

      <h2 className="titulo">Temas - Redação</h2>

      <div className="grade-temas">
        {temas.map((tema) => (
          <div className="card-tema" key={tema.id}>
            <img src={tema.imagem} alt="tema" className="imagem-tema" />
            <p className="texto-tema">{tema.titulo}</p>
            <p className="banca">BANCA: {tema.banca}</p>
            <button className="botao-acessar" onClick={() => acessarTema(tema.id)}>
              ACESSAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temas;
