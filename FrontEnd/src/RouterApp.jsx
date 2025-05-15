import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaLogin from './pages/PaginaLogin';
import PagInicial from './pages/PagInicial';
import PgQuiz from './pages/PgQuiz'; 
import Quiz from './pages/Quiz'; 
import Sobre from './pages/SobreNos';
import Ranking from './pages/Ranking'; // Importando o componente de Ranking

const RouterApp = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<PaginaLogin setUser={setUser} />} />
      <Route path="/PagInicial" element={<PagInicial user={user} />} />
      <Route path="/PgQuiz" element={<PgQuiz user={user}/>} />
      <Route path="/Quiz" element={<Quiz user={user}/>} />
      <Route path="/SobreNos" element={<Sobre user={user}/>} />
      <Route path="/Ranking" element={<Ranking user={user}/>} /> 
      {/* Adicione outras rotas conforme necessário */}
      
      
    </Routes>
  );
};

export default RouterApp;

