import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaLogin from './pages/PaginaLogin';
import PagInicial from './pages/PagInicial';
import PgQuiz from './pages/PgQuiz'; 
import Quiz from './pages/Quiz'; 
import Sobre from './pages/SobreNos';
import Ranking from './pages/Ranking'; // Importando o componente de Ranking
import Temas from './pages/Temas';
import Apoio from './pages/TextosApoio'; 
import Historia from './pages/Historia' 

const RouterApp = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<PaginaLogin setUser={setUser} />} />
      <Route path="/PagInicial" element={<PagInicial user={user} />} />
      <Route path="/PgQuiz" element={<PgQuiz user={user}/>} />
      <Route path="/Quiz/geral" element={<Quiz user={user}/>} />
      <Route path="/SobreNos" element={<Sobre user={user}/>} />
      <Route path="/Ranking" element={<Ranking user={user}/>} /> 
      <Route path="/Temas" element={<Temas user={user}/>} />
      <Route path='quiz/:categoria' element={<Quiz user={user}/>} />
      <Route path='/textosapoio/:id' element={<Apoio user={user}/>} />
      <Route path='/historia' element={<Apoio user={user}/>}/>
      {/* Adicione outras rotas conforme necessário */}
      
      
    </Routes>
  );
};

export default RouterApp;

