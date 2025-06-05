import './css/Resumos.css';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import fisica from '../assets/fisica.png';
import geografia  from '../assets/geografia.png';
import ingles  from '../assets/ingles.png';
import matematica  from '../assets/matematica.png'; 
import portugues  from '../assets/portugues.png'; 
import quimica  from '../assets/quimica.png'; 
import historia  from '../assets/historia.png';


function BotoesComImagens() {
  const materias = [
    { imagem: fisica },
    { imagem: geografia },
    { imagem: ingles },
    { imagem: matematica },
    { imagem: portugues },
    { imagem: quimica },
    { imagem: historia }
  ];

   const navigate = useNavigate();

 

  const handleSair = () => {
    alert('Você clicou em Sair');
  };

  const handleSobreNos = () => {
    alert('Você clicou em Sobre Nós');
  };

    const handlehistoria = () => navigate('/Historia');
    const handlematematica = () => navigate('/Matematica');
    const handleportugues = () => navigate('/Portugues');
    const handlequimica = () => navigate('/Quimica');
    const handlefisica = () => navigate('/Fisica');
    const handlebiologia = () => navigate('/Biologia');
    const handleingles = () => navigate('/Ingles');


   
  

  return (
    <div className="container">
     <header className="ranking-header">
        <img src={logo} alt="Logo" className="ranking-logo" />
        <Link to="/PagInicial">
          <button className="ranking-button">Voltar</button>
        </Link>
      </header>

      <div className="container-botoes">
        {materias.map((item) => (
          <button
            key={item.nome}
            className="botao-imagem"
            onClick={() => handleClick(item.nome)}
          >
            <img src={item.imagem} alt={item.nome} className="imagem-botao" />
            <span className="nome-materia">{item.nome}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BotoesComImagens;