import React, { useEffect, useState } from 'react';
import './css/Ranking.css';
import logo from '../assets/logo.png';
import rankingTitle from '../assets/ranking.png';
import { db } from '../../firebaseConfig';
import { getDocs, query, orderBy, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';



function Ranking() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("geral");


  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const categorias = ["geral", "História", "Geografia", "Matemática"]; // adicione suas categorias aqui
        const todasPromessas = categorias.map(async (cat) => {
          const q = query(collection(db, 'ranking'), where('categoria', '==', cat), orderBy('pontuacao', 'desc'));
          const snapshot = await getDocs(q);
          return { categoria: cat, usuarios: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) };
        });

        const resultados = await Promise.all(todasPromessas);
        setUsuarios(resultados);
      } catch (error) {
        console.error("Erro ao buscar rankings:", error);
      }
    };

    fetchRankings();
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

      {usuarios.map((rankingCategoria, index) => (
        <div key={index} className="ranking-table-container">
          <h2 className="categoria-titulo">
            {rankingCategoria.categoria === "geral" ? "Ranking Geral" : `Ranking - ${rankingCategoria.categoria}`}
          </h2>
          <table className="ranking-table">
            <thead>
              <tr>
                <th>CLASSIFICAÇÃO</th>
                <th>NOME</th>
                <th>PONTUAÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {rankingCategoria.usuarios.length === 0 ? (
                <tr>
                  <td colSpan="3">Nenhum usuário encontrado.</td>
                </tr>
              ) : (
                rankingCategoria.usuarios.map((usuario, i) => (
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
      ))}
    </div>
  );
}

export default Ranking;
