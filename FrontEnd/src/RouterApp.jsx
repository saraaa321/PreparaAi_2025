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

import Geografia from './pages/Geografia';
import Biomas from "./pages/hpages/Biomas";
import Demografia from "./pages/hpages/Demografia";
import Economia from "./pages/hpages/Economia";
import Geologia from "./pages/hpages/Geologia";

import Biologia from './pages/Biologia';
import Anatomia from "./pages/hpages/Anatomia";
import ReinoPlantae from "./pages/hpages/ReinoPlantae";
import Celulas from "./pages/hpages/Celulas";
import Evolucao from "./pages/hpages/Evolucao";

import Fisica from './pages/Fisica';
import Mecanica from "./pages/hpages/Mecanica";
import Ondas from "./pages/hpages/Ondas";
import Termodinamica from "./pages/hpages/Termodinamica";
import Fundamentos from "./pages/hpages/Fundamentos";

import Portugues from './pages/Portugues';
import Literatura from "./pages/hpages/EscolasLiterarias";
import Generos from "./pages/hpages/GenerosTextuais";
import Producao from "./pages/hpages/ProducaoTextual";
import Interpretacao from "./pages/hpages/LeituraInterpretacao";

import Ingles from './pages/Ingles';
import SimplePast from './pages/hpages/SimplePast';
import NounsAndPronouns from './pages/hpages/NounsAndPronouns';
import AdjectivesAndComparatives from './pages/hpages/AdjectivesAndComparatives';
import TranslationAndStructure from './pages/hpages/TranslationAndStructure';


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

      <Route path='/Geografia' element={<Geografia user={user}/>} />
          <Route path="/Biomas" element={<Biomas user={user}/>} />
          <Route path="/Demografia" element={<Demografia user={user}/>} />
          <Route path="/Economia" element={<Economia user={user}/>} />
          <Route path="/Geologia" element={<Geologia user={user}/>} />

      <Route path='/Biologia' element={<Biologia user={user}/>} />
          <Route path="/Anatomia" element={<Anatomia user={user}/>} />
          <Route path="/ReinoPlantae" element={<ReinoPlantae user={user}/>} />
          <Route path="/Evolucao" element={<Evolucao user={user}/>} />
          <Route path="/Celulas" element={<Celulas user={user}/>} />

      <Route path="/Fisica" element={<Fisica user={user}/>} />
          <Route path="/Mecanica" element={<Mecanica user={user}/>} />
          <Route path="/Ondas" element={<Ondas user={user}/>} />
          <Route path="/Termodinamica" element={<Termodinamica user={user}/>} />
          <Route path="/Fundamentos" element={<Fundamentos user={user}/>} />

      <Route path='/Portugues' element={<Portugues user={user}/>} />
          <Route path="/Literatura" element={<Literatura user={user}/>} />
          <Route path="/Generos" element={<Generos user={user}/>} />
          <Route path="/Producao" element={<Producao user={user}/>} />
          <Route path="/Interpretacao" element={<Interpretacao user={user}/>} />

      <Route path='/Ingles' element={<Ingles user={user}/>} />
          <Route path="/simplePast" element={<SimplePast user={user}/>} />
          <Route path="/nounsAndPronouns" element={<NounsAndPronouns user={user}/>} />
          <Route path="/adjectivesAndComparatives" element={<AdjectivesAndComparatives user={user}/>} />
          <Route path="/translationAndStructure" element={<TranslationAndStructure user={user}/>} />


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

