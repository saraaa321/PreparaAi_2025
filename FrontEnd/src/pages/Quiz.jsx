import React, { useEffect, useState } from "react";
import "./css/Quiz.css";
import axios from "axios";
import Logo from "../assets/logo.png";
import { db } from "../../firebaseConfig";
import {
  doc, getDoc, getDocs, updateDoc,
  collection, addDoc, query, where
} from "firebase/firestore";
import { auth } from "../../firebaseConfig";
import { useNavigate, useParams } from 'react-router-dom';

// Função para embaralhar o array
const embaralharArray = (array) => {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
};

// Função para garantir nome de usuário
const obterNomeUsuario = (user) => {
  return user.displayName || user.email?.split('@')[0] || "Usuário Anônimo";
};

const Quiz = () => {
  const [perguntas, setPerguntas] = useState([]);
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [respostasUsuario, setRespostasUsuario] = useState([]);
  const navigate = useNavigate();
  const { categoria } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/api/perguntas")
      .then((response) => {
        let perguntasFiltradas = response.data;
        if (categoria) {
          perguntasFiltradas = perguntasFiltradas.filter(p => p.categoria === categoria);
        }

        const perguntasFormatadas = perguntasFiltradas.map((p) => {
          const opcoesFormatadas = p.respostas.map((resposta) => ({
            texto: resposta,
            respostaCorreta: resposta === p.respostaCorreta,
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
  }, [categoria]);

  const proximaPergunta = async () => {
    if (indicePergunta < perguntas.length - 1) {
      setIndicePergunta(indicePergunta + 1);
      setRespostaSelecionada(null);
    } else {
      const acertos = respostasUsuario.filter((r) => r.respostaCorreta).length;
      const user = auth.currentUser;

      if (user) {
        const nomeUsuario = obterNomeUsuario(user);
        const userRef = doc(db, "usuarios", user.uid);

        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const pontuacaoAnterior = userDoc.data().pontuacao || 0;
            const novaPontuacao = pontuacaoAnterior + acertos;
            await updateDoc(userRef, { pontuacao: novaPontuacao });

            const rankingRef = collection(db, 'ranking');
            const q = query(
              rankingRef,
              where("nome", "==", nomeUsuario),
              where("categoria", "==", categoria || "geral")
            );

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
              const docExistente = querySnapshot.docs[0];
              const pontuacaoRankingAtual = docExistente.data().pontuacao || 0;
              const novaPontuacaoRanking = pontuacaoRankingAtual + acertos;

              await updateDoc(docExistente.ref, {
                pontuacao: novaPontuacaoRanking
              });

              console.log("Pontuação no ranking atualizada com sucesso!");
            } else {
              await addDoc(rankingRef, {
                nome: nomeUsuario,
                pontuacao: acertos,
                categoria: categoria || "geral"
              });

              console.log("Nova entrada no ranking criada com sucesso!");
            }

            setTimeout(() => {
              alert(`Você concluiu o quiz! Acertos: ${acertos}.`);
              navigate('/ranking');
            }, 100);
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

  const handleRespostaClick = (index) => {
    if (respostaSelecionada === null) {
      setRespostaSelecionada(index);
      setRespostasUsuario(prev => {
        const jaRespondeu = prev.find(r => r.perguntaIndex === indicePergunta);
        const novaResposta = {
          perguntaIndex: indicePergunta,
          respostaIndex: index,
          respostaCorreta: perguntas[indicePergunta].opcoes[index].respostaCorreta,
        };
        return jaRespondeu
          ? prev.map(r => r.perguntaIndex === indicePergunta ? novaResposta : r)
          : [...prev, novaResposta];
      });
    }
  };

  const sairQuiz = () => setModalVisivel(true);
  const confirmarSaida = () => window.location.href = "/PagInicial";
  const cancelarSaida = () => setModalVisivel(false);

  if (perguntas.length === 0) {
    return <p>Carregando perguntas...</p>;
  }

  const perguntaAtual = perguntas[indicePergunta];

  return (
    <div className="quiz-container">
      <header className="cabeçalho">
        <div className="menu">
          <img src={Logo} alt="Logo" id="imagemLogo" className="logo" />
        </div>
        <h2 className="Materia">{perguntaAtual.categoria}</h2>
        <button className="sair-btn" onClick={sairQuiz}>Sair</button>
      </header>

      <main className="quiz-main">
        <h2 className="quiz-pergunta">{`Questão ${indicePergunta + 1}`}</h2>
        <p className="quiz-enunciado">{perguntaAtual.pergunta}</p>
        <div className="quiz-opcoes">
          {perguntaAtual.opcoes.map((respostas, index) => (
            <button
              key={index}
              className={`quiz-respostas ${
                respostaSelecionada !== null
                  ? index === respostaSelecionada
                    ? respostas.respostaCorreta ? "respostaCorreta" : "errada"
                    : respostas.respostaCorreta ? "respostaCorreta" : ""
                  : ""
              }`}
              onClick={() => handleRespostaClick(index)}
              disabled={respostaSelecionada !== null}
            >
              {respostas.texto}
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

      <footer className="quiz-footer" />

      {modalVisivel && (
        <div className="modal">
          <div className="modal-conteudo">
            <p>Você tem certeza que deseja sair?</p>
            <p>Suas respostas não serão salvas.</p>
            <button onClick={confirmarSaida} className="modal-btn confirmar">Sim</button>
            <button onClick={cancelarSaida} className="modal-btn cancelar">Não</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
