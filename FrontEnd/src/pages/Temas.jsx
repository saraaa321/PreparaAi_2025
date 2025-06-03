import React from 'react';
import './css/Red.css'
import logo from '../assets/logo2.png';
import { useNavigate } from 'react-router-dom';

const Temas = () => {
  const navigate = useNavigate();
  const temas = [
    {
      id: 1,
      titulo: 'A importância da alfabetização na infância no Brasil',
      banca: 'ENEM',
      imagem: 'alfabet.jpg',
    },
    {
      id: 2,
      titulo: 'Os desafios de se combater as Fake News na Era da Informação',
      banca: 'ENEM',
      imagem: 'fakenews.jpg',
    },
    {
      id: 3,
      titulo: 'Privatizações são benéficas para o Brasil?',
      banca: 'VUNESP',
      imagem: 'privado.jpg',
    },
    {
      id: 4,
      titulo: 'Os desafios atuais para a democracia no Brasil e no mundo',
      banca: 'FUVEST',
      imagem: 'democracia.jpg',
    },
    {
      id: 5,
      titulo: 'Adoção: prática de amor incondicional ou seletivo?',
      banca: 'VUNESP',
      imagem: 'adocao.jpg',
    },
    {
      id: 6,
      titulo: 'Apostas online: Regulamentação para o consumidor e indução ao vício',
      banca: 'FUVEST',
      imagem: 'aposta.jpg',
    },
  ];

  const acessarTema = (id) => {
    navigate(`/textosapoio/${id}`);
  };
  

  return (
    <div className="pagina">
      <header className="topo">
      <img src={logo} alt="Logo" className="logo" />
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
