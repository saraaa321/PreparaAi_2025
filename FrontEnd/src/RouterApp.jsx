import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaLogin from './pages/PaginaLogin';
import PagInicial from './pages/PagInicial';
import PgQuiz from './pages/PgQuiz'; 
import Quiz from './pages/Quiz'; 
import Sobre from './pages/SobreNos';
import Resumos from './pages/Resumos'
import Ranking from './pages/Ranking'; // Importando o componente de Ranking
import Temas from './pages/Temas';
import Apoio from './pages/TextosApoio';

import Historia from './pages/Historia' ;
import Guerras from "./pages/hpages/Guerras";
import Feudalismo from "./pages/hpages/Feudalismo";
import BrasilRepublica from "./pages/hpages/BrasilRepublica";
import Revolucoes from "./pages/hpages/Revolucoes";

// import Ingles from './pages/Ingles';
// import Matematica from './pages/Matematica';
// import Portugues from './pages/Portugues';
// import Quimica from './pages/Quimica';
// import Fisica from './pages/Fisica';
// import Geografia from './pages/Geografia';

const RouterApp = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<PaginaLogin setUser={setUser} />} />
      <Route path="/PagInicial" element={<PagInicial user={user} />} />
      <Route path="/PgQuiz" element={<PgQuiz user={user}/>} />
      <Route path="/Quiz/geral" element={<Quiz user={user}/>} />
      <Route path="/SobreNos" element={<Sobre user={user}/>} />
      <Route path="/Resumos" element={<Resumos user={user}/>} /> 
      <Route path="/Ranking" element={<Ranking user={user}/>} /> 
      <Route path="/Temas" element={<Temas user={user}/>} />
      <Route path='quiz/:categoria' element={<Quiz user={user}/>} />
      <Route path='/textosapoio/:id' element={<Apoio user={user}/>} />

      <Route path='/Historia' element={<Historia user={user}/>} />
          <Route path="/Guerras" element={<Guerras />} />
          <Route path="/Feudalismo" element={<Feudalismo />} />
          <Route path="/BrasilRepublica" element={<BrasilRepublica />} />
          <Route path="/Revolucoes" element={<Revolucoes />} />

      {/* <Route path='/Ingles' element={<Ingles user={user}/>} />
      <Route path='/Matematica' element={<Matematica user={user}/>} />
      <Route path='/Portugues' element={<Portugues user={user}/>} />
      <Route path='/Quimica' element={<Quimica user={user}/>} />
      <Route path='/Fisica' element={<Fisica user={user}/>} />
      <Route path='/Geografia' element={<Geografia user={user}/>} /> */}

      {/* Adicione outras rotas conforme necessário */}
      
      
    </Routes>
  );
};

export default RouterApp;

