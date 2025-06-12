import './css/Resumos.css';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import fisica from '../assets/fisica.png';
import geografia from '../assets/geografia.png';
import ingles from '../assets/ingles.png';
import matematica from '../assets/matematica.png';
import portugues from '../assets/portugues.png';
import quimica from '../assets/quimica.png';
import historia from '../assets/historia.png';
import biologia from '../assets/biologia.png';


function BotoesComImagens() {
    const materias = [
        { imagem: biologia, rota: '/Biologia' },
        { imagem: fisica, rota: '/Fisica' },
        { imagem: geografia, rota: '/Geografia' },
        { imagem: historia, rota: '/Historia' },
        { imagem: ingles, rota: '/Ingles' },
        { imagem: matematica, rota: '/Matematica' },
        { imagem: portugues, rota: '/Portugues' },
        { imagem: quimica, rota: '/Quimica' },
       
    ];

    const navigate = useNavigate();

    const handleClick = (rota) => {
        navigate(rota);
    };

    const handleSair = () => {
        alert('Você clicou em Sair');
    };

    const handleSobreNos = () => {
        alert('Você clicou em Sobre Nós');
    };







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
                        onClick={() => handleClick(item.rota)}
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