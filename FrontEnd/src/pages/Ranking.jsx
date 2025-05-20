
// import React, { useEffect, useState } from 'react';
// import './css/Ranking.css';
// import logo from '../assets/logo.png';
// import rankingTitle from '../assets/ranking.png';
// import { db } from '../../firebaseConfig';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// function Ranking() {
//   const [usuarios, setUsuarios] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRanking = async () => {
//       try {
//         const usuariosRef = collection(db, 'usuarios');
//         const q = query(usuariosRef, orderBy('pontuacao', 'desc'));
//         const querySnapshot = await getDocs(q);

//         const dados = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setUsuarios(dados);
//       } catch (error) {
//         console.error('Erro ao buscar ranking:', error);
//       }
//     };

//     fetchRanking();
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

//       <div className="ranking-table-container">
//         <table className="ranking-table">
//           <thead>
//             <tr>
//               <th>CLASSIFICAÇÃO</th>
//               <th>NOME</th>
//               <th>PONTUAÇÃO</th>
//             </tr>
//           </thead>
//           <tbody>
//             {usuarios.map((usuario, i) => (
//               <tr key={usuario.id} className={i % 2 === 0 ? 'linha-par' : 'linha-impar'}>
//                 <td>{i + 1}º</td>
//                 <td>{usuario.nome || 'Usuário Anônimo'}</td>
//                 <td>{usuario.pontuacao}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Ranking;




import React, { useEffect, useState } from 'react';
import './css/Ranking.css';
import logo from '../assets/logo.png';
import rankingTitle from '../assets/ranking.png';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Ranking() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const usuariosRef = collection(db, 'usuarios');
        const q = query(usuariosRef, orderBy('pontuacao', 'desc'));
        const querySnapshot = await getDocs(q);

        const dados = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsuarios(dados);
      } catch (error) {
        console.error('Erro ao buscar ranking:', error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <div className="ranking-container">
      <div className="ranking-header">
        <img src={logo} alt="Logo" className="ranking-logo" />
        <button className="ranking-button" onClick={() => navigate('/PagInicial')}>Voltar</button>
      </div>

      <div className="ranking-title">
        <img src={rankingTitle} alt="Ranking" />
      </div>

      <div className="ranking-table-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>CLASSIFICAÇÃO</th>
              <th>NOME</th>
              <th>PONTUAÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 ? (
              <tr>
                <td colSpan="3">Nenhum usuário encontrado.</td>
              </tr>
            ) : (
              usuarios.map((usuario, i) => (
                <tr key={usuario.id} className={i % 2 === 0 ? 'linha-par' : 'linha-impar'}>
                  <td>{i + 1}º</td>
                  <td>{usuario.nome || 'Usuário Anônimo'}</td>
                  <td>{usuario.pontuacao}</td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Ranking;
