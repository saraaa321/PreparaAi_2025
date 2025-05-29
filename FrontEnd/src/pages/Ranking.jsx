// import React, { useEffect, useState } from 'react';
// import './css/Ranking.css';
// import logo from '../assets/logo.png';
// import rankingTitle from '../assets/ranking.png';
// import { db } from '../../firebaseConfig';
// import { getDocs, query, orderBy, where, collection, addDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';




// function Ranking() {
//   const [usuarios, setUsuarios] = useState([]);
//   const navigate = useNavigate();
//   const [categoriaSelecionada, setCategoriaSelecionada] = useState("geral");


//   useEffect(() => {
//     const fetchRankings = async () => {
//       try {
//         const categorias = ["geral", "História", "Geografia", "Matemática"]; // adicione suas categorias aqui
//         const todasPromessas = categorias.map(async (cat) => {
//           const q = query(collection(db, 'ranking'), where('categoria', '==', cat), orderBy('pontuacao', 'desc'));
//           const snapshot = await getDocs(q);
//           return { categoria: cat, usuarios: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) };
//         });

//         const resultados = await Promise.all(todasPromessas);
//         setUsuarios(resultados);
//       } catch (error) {
//         console.error("Erro ao buscar rankings:", error);
//       }
//     };

//     fetchRankings();
//   }, []);


//   return (
//     <div className="ranking-container">
//       <div className="ranking-header">
//         <img src={logo} alt="Logo" className="ranking-logo" />
//         <button className="ranking-button" onClick={() => navigate('/PagInicial')}>Voltar</button>
//       </div>

//       <div className="ranking-title">
//         <img src={rankingTitle} alt="Ranking" />
//       </div>

//       {usuarios.map((rankingCategoria, index) => (
//         <div key={index} className="ranking-table-container">
//           <h2 className="categoria-titulo">
//             {rankingCategoria.categoria === "geral" ? "Ranking Geral" : `Ranking - ${rankingCategoria.categoria}`}
//           </h2>
//           <table className="ranking-table">
//             <thead>
//               <tr>
//                 <th>CLASSIFICAÇÃO</th>
//                 <th>NOME</th>
//                 <th>PONTUAÇÃO</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rankingCategoria.usuarios.length == 0 ? (
//                 <tr>
//                   <td colSpan="3">Nenhum usuário encontrado.</td>
//                 </tr>
//               ) : (
//                 rankingCategoria.usuarios.map((usuario, i) => (
//                   <tr key={usuario.id} className={i % 2 === 0 ? 'linha-par' : 'linha-impar'}>
//                     <td>{i + 1}º</td>
//                     <td>{usuario.nome || 'Usuário Anônimo'}</td>
//                     <td>{usuario.pontuacao}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Ranking;

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import './css/Ranking.css';

import logo from "../assets/logo.png";
import rankingTitle from "../assets/ranking.png";

const Ranking = () => {
  const [rankingsPorCategoria, setRankingsPorCategoria] = useState({});

  useEffect(() => {
    const fetchRanking = async () => {
      const rankingRef = collection(db, "ranking");
      const q = query(rankingRef, orderBy("pontuacao", "desc"));
      const snapshot = await getDocs(q);

      const dados = snapshot.docs.map(doc => doc.data());

      const agrupado = {};
      dados.forEach(doc => {
        const categoria = doc.categoria || "geral";
        if (!agrupado[categoria]) {
          agrupado[categoria] = [];
        }
        agrupado[categoria].push(doc);
      });

      setRankingsPorCategoria(agrupado);
    };

    fetchRanking();
  }, []);

  return (
    <div className="ranking-container">
      <header className="ranking-header">
        <img src={logo} alt="Logo" className="ranking-logo" />
        <Link to="/PagInicial">
          <button className="ranking-button">Voltar</button>
        </Link>
      </header>

      <div className="ranking-title">
        <img src={rankingTitle} alt="Ranking" />
      </div>

      {Object.entries(rankingsPorCategoria)
        .sort(([a], [b]) => {
          if (a === "geral") return -1;
          if (b === "geral") return 1;
          return a.localeCompare(b);
        })
        .map(([categoria, usuarios]) => (
          <div key={categoria} className="ranking-table-container">
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </h2>
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Nome</th>
                  <th>Pontuação</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "linha-par" : "linha-impar"}
                  >
                    <td>{index + 1}º</td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.pontuacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default Ranking;
