// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import { auth } from "../../firebaseConfig"; // Adicione esta linha
// import { signOut } from "firebase/auth"; 
// import "./css/PagInicial.css";

// import arielImg from "../assets/ariel.png"; 
// import logo2Img from "../assets/logo2.png";
// import flameImg from "../assets/flame.png";
// import saraImg from "../assets/sara.png";


// function PagInicial() {

//   const navigate = useNavigate();



//   const handleLogout = async () => {
//     try {
//       await signOut(auth); // Fazendo logout do usuário
//       console.log("Usuário deslogado");
//       navigate('/'); // Redireciona para a página de login
//     } catch (error) {
//       console.error("Erro ao fazer logout:", error.message);
//     }
//   };

//   const handleQuiz = () => {
//       navigate('/PgQuiz')  };


//     const handleRanking = () => {
//       navigate('/Ranking')  };

//   const handleSobreNos = () => {
//       navigate('/SobreNos') };

//   return (
//     <div className="App">
//       <header className="top-bar">
//         <img src={logo2Img} alt="Gabarita Mente" className="logo" />
//         <div className="top-buttons">
//           <button className="btn" onClick={handleSobreNos}>Sobre Nós</button>
//           <button className="btn sair" onClick={handleLogout}>Sair</button>
//         </div>
//       </header>

//       <section className="welcome-section">
//         <div className="welcome-banner">
//           <img src={arielImg} alt="Ariel" className="student-img" />
//           <div className="welcome-text">
//             <h1>Seja Bem-Vindo</h1>
//             <p>Transforme sua dedicação em aprovação no ENEM!</p>
//             <p className="sub">Sua Ofensiva</p>
//             <div className="flames">
//               <img src={flameImg} alt="Flama" />
//               <img src={flameImg} alt="Flama" />
//               <img src={flameImg} alt="Flama" />
//               <img src={flameImg} alt="Flama" />
//               <img src={flameImg} alt="Flama" />
//               <img src={flameImg} alt="Flama" />
//               <img src={flameImg} alt="Flama" />
//             </div>
//           </div>
//           <img src={saraImg} alt="Sara" className="student-img" />
//         </div>
//       </section>

//       <section className="cards-section">
//         <div className="card yellow" onClick={handleRanking}>Ranking</div>
//         <button className="card green" onClick={handleQuiz}>Questionários</button>
//         <div className="card red">Temas - Redação</div>
//       </section>
//     </div>
//   );
// }

// export default PagInicial;




import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import "./css/PagInicial.css";
import arielImg from "../assets/ariel.png";
import logo2Img from "../assets/logo2.png";
import saraImg from "../assets/sara.png";

function PagInicial({ user }) {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [ofensiva, setOfensiva] = useState(0);
  const [semana, setSemana] = useState(0); // estado para semanas

  useEffect(() => {
    if (!user) return;

    const buscarNome = async () => {
      try {
        const userRef = doc(db, "usuarios", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setNome(userSnap.data().nome);
        } else {
          setNome(user.displayName || 'Usuário');
        }
      } catch (error) {
        console.error('Erro ao buscar nome no Firestore:', error);
        setNome(user.displayName || 'Usuário');
      }
    };

    buscarNome();
  }, [user]);

  useEffect(() => {
    if (!user) return;

    const atualizarOfensiva = async () => {
      const userRef = doc(db, "usuarios", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();

        setNome(data.nome || user.displayName || 'Usuário');

        const hoje = new Date();
        const hojeStr = hoje.toISOString().split("T")[0]; // YYYY-MM-DD
        const ultimaAberturaStr = data.ultimaAbertura;
        const ofensivaAtual = data.ofensiva || 0;
        const semanaAtual = data.semana || 0;

        const ontem = new Date();
        ontem.setDate(ontem.getDate() - 1);
        const ontemStr = ontem.toISOString().split("T")[0];

        let novaOfensiva = ofensivaAtual;
        let novaSemana = semanaAtual;

        if (!ultimaAberturaStr || ultimaAberturaStr !== hojeStr) {
          if (ultimaAberturaStr === ontemStr) {
            novaOfensiva += 1;
          } else {
            novaOfensiva = 1; // zerou o streak de dias
            novaSemana = 1;   // reset na semana também
          }

          // Se passou de 7 dias consecutivos, conta como 1 semana e reseta dias
          if (novaOfensiva > 7) {
            novaOfensiva = 1;
            novaSemana += 1;
          }

          // Atualiza Firestore
          await updateDoc(userRef, {
            ultimaAbertura: hojeStr,
            ofensiva: novaOfensiva,
            semana: novaSemana,
          });
        }

        setOfensiva(novaOfensiva);
        setSemana(novaSemana);
      }
    };

    atualizarOfensiva();
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  const handleQuiz = () => navigate('/PgQuiz');
  const handleRanking = () => navigate('/Ranking');
  const handleRedacao = () => navigate('/Redacao');
  const handleSobreNos = () => navigate('/SobreNos');

  return (
    <div className="App">
      <header className="top-bar">
        <img src={logo2Img} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <span className="saudacao">Olá, {nome}</span>
          <button className="btn" onClick={handleSobreNos}>Sobre Nós</button>
          <button className="btn sair" onClick={handleLogout}>Sair</button>
        </div>
      </header>

      <section className="welcome-section">
        <div className="welcome-banner">
          <img src={arielImg} alt="Ariel" className="student-img" />
          <div className="welcome-text">
            <h1>Seja Bem-Vindo</h1>
            <p>Transforme sua dedicação em aprovação no ENEM!</p>
            <p className="sub">Ofensiva: {ofensiva} dia(s)</p>
            <div className="ofensiva-bar">
              {[...Array(ofensiva)].map((_, i) => (
                <div key={i} className="ofensiva-point" />
              ))}
            </div>
            <p className="sub">Semanas completas: {semana}</p>
            <div className="ofensiva-bar">
              {[...Array(semana)].map((_, i) => (
                <div key={i} className="ofensiva-point" />
              ))}
            </div>
          </div>
          <img src={saraImg} alt="Sara" className="student-img" />
        </div>
      </section>

      <section className="cards-section">
        <div className="card yellow" onClick={handleRanking}>Ranking</div>
        <button className="card green" onClick={handleQuiz}>Questionários</button>
        <div className="card red" onClick={handleRedacao}>Temas - Redação</div>
      </section>
    </div>
  );
}

export default PagInicial;
