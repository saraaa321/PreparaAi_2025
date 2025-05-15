import React, { useEffect, useState } from "react";
import "./css/Quiz.css";
import axios from "axios";
import Logo from "../assets/logo.png";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../firebaseConfig";
import { useNavigate } from 'react-router-dom';




// Função para embaralhar o array
const embaralharArray = (array) => {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
};



const Quiz = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [respostasUsuario, setRespostasUsuario] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:3000/api/perguntas")
      .then((response) => {
        const perguntasFormatadas = response.data.map((p) => {
          const opcoesFormatadas = p.opcoes.map((opcao) => ({
            texto: opcao,
            correta: opcao === p.correta,
          }));
          return {
            pergunta: p.pergunta,
            opcoes: embaralharArray(opcoesFormatadas),
            categoria: p.categoria,
          };
        });

        const perguntasEmbaralhadas = embaralharArray(perguntasFormatadas).slice(0, 20);
        setPerguntas(perguntasEmbaralhadas);
      })
      .catch((error) => console.error("Erro ao buscar perguntas", error));
  }, []);


  const handleRespostaClick = (index) => {
    if (respostaSelecionada === null) {
      setRespostaSelecionada(index);
      
      // Salvar a resposta atual no array de respostas
      setRespostasUsuario((prev) => [
        ...prev,
        {
          perguntaIndex: indicePergunta,
          respostaIndex: index,
          correta: perguntas[indicePergunta].opcoes[index].correta,
        },
      ]);
    }
  };
  

  const proximaPergunta = async () => {
    if (indicePergunta < perguntas.length - 1) {
      setIndicePergunta(indicePergunta + 1);
      setRespostaSelecionada(null);
    } else {
      const acertos = respostasUsuario.filter((r) => r.correta).length;
const user = auth.currentUser;

if (user) {
  const userRef = doc(db, "usuarios", user.uid);

  try {
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const pontuacaoAnterior = userDoc.data().pontuacao || 0;
      const novaPontuacao = pontuacaoAnterior + acertos;

      await updateDoc(userRef, { pontuacao: novaPontuacao });

      alert(`Você concluiu o quiz! Acertos: ${acertos}. Sua nova pontuação total é: ${novaPontuacao}`);
      navigate('/ranking');

    } else {
      console.error("Documento do usuário não encontrado.");
      alert("Erro ao atualizar pontuação: usuário não encontrado.");
    }
  } catch (error) {
    console.error("Erro ao atualizar pontuação:", error);
    alert("Erro ao atualizar pontuação.");
  }
} else {
  alert("Usuário não autenticado.");
}

    }
  };
  

  // Função para mostrar o modal de confirmação
  const sairQuiz = () => {
    setModalVisivel(true); // Exibe o modal
  };

  // Função para confirmar a saída
  const confirmarSaida = () => {
    window.location.href = "/PagInicial"; // Redireciona para a página inicial
  };

  // Função para cancelar a saída
  const cancelarSaida = () => {
    setModalVisivel(false); // Fecha o modal
  };

  if (perguntas.length === 0) {
    return <p>Carregando perguntas...</p>;
  }

  const perguntaAtual = perguntas[indicePergunta];



  

  return (
    <div className="quiz-container">
      <header className="cabeçalho">
        <div className="menu">
          <img src={Logo} alt="Logo" id="imagemLogo" />
        </div>
        <h2 className="Materia">{perguntaAtual.categoria}</h2>
        <button className="sair-btn" onClick={sairQuiz}>Sair</button>
      </header>

      <main className="quiz-main">
        <h2 className="quiz-pergunta">{`Questão ${indicePergunta + 1}`}</h2>
        <p className="quiz-enunciado">{perguntaAtual.pergunta}</p>
        <div className="quiz-opcoes">
          {perguntaAtual.opcoes.map((opcao, index) => (
            <button
              key={index}
              className={`quiz-opcao ${
                respostaSelecionada === index
                  ? opcao.correta
                    ? "correta"
                    : "errada"
                  : ""
              }`}
              onClick={() => handleRespostaClick(index)}
              disabled={respostaSelecionada !== null}
            >
              {opcao.texto}
            </button>
          ))}
        </div>
        <button
          className="quiz-proxima"
          onClick={proximaPergunta}
          disabled={respostaSelecionada === null}
        >
          Próxima
        </button>
      </main>

      <footer className="quiz-footer">
        {/* Se você quiser adicionar algo no rodapé, como uma barra de progresso ou pontuação, pode fazê-lo aqui */}
      </footer>

      {/* Modal de confirmação */}
      {modalVisivel && (
        <div className="modal">
          <div className="modal-conteudo">
            <p>Você tem certeza que deseja sair?</p>
            <p>Suas respostas não serão salvas.</p>
            <button onClick={confirmarSaida} className="modal-btn confirmar">
              Sim
            </button>
            <button onClick={cancelarSaida} className="modal-btn cancelar">
              Não
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
