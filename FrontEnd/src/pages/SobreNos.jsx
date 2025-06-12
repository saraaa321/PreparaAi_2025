import React from 'react';
import { Link } from "react-router-dom";
import "./css/SobreNos.css";


import logo2 from "../assets/logo2.png";
import sobren from "../assets/sobren.png";
import devs from "../assets/devs.png";
import polyteste from "../assets/polyteste.png";
import sara from "../assets/sara.png";
import giovana2 from "../assets/giovana2.png";
import edu from "../assets/edu.png";
import joao from "../assets/joao.png";
import ariel from "../assets/ariel.png";
import duda from "../assets/duda.png";


const SobreNos = () => {
  return (
    <div className="SobreNos">
      <header className="top-bar">
        <img src={logo2} alt="Gabarita Mente" className="logo" />
        <div className="top-buttons">
          <button className="btn">Sobre Nós</button>
          <Link to="/" className="btn sair">Voltar</Link>
        </div>
      </header>

      <main className="main-contente">
        <img src={sobren} alt="Sobre Nós" className="sobrenos" />
        <p className="p">
          Somos um grupo de estudantes que, após uma trajetória intensa de preparação conjunta para o vestibular, conquistou o primeiro lugar em nossas respectivas instituições de ensino superior. Com o desejo de retribuir e facilitar o caminho de outros vestibulandos, criamos este site com conteúdos, orientações e materiais de estudo de qualidade. Nosso objetivo é contribuir para que mais estudantes realizem o sonho da aprovação.
        </p>

        <img src={devs} alt="Desenvolvedores" className="devsIMG" />

        <div className="devs-container">
          <div className="devs">
            <img src={polyteste} alt="Polyana" className="devs-imgA" />
            <p className="tit">Polyana, 19 anos, aprovada em Medicina na USP de Ribeirão Preto</p>
            <p className="desc">
              Com apenas 19 anos, Polyana alcançou um dos sonhos mais desafiadores: foi aprovada em primeiro lugar no curso de Medicina da USP de Ribeirão Preto. Sua trajetória é marcada por disciplina, dedicação e amor pelos estudos. Agora, ela inspira outros estudantes a acreditarem no próprio potencial e a não desistirem, mesmo diante dos maiores desafios.
            </p>
          </div>

          <div className="devs">
            <img src={sara} alt="Sara" className="devs-img" />
            <p className="tit">Sara, 18 anos, aprovada em 1º lugar em Medicina na FAMEMA</p>
            <p className="desc">
              Aos 18 anos, Sara conquistou o primeiro lugar no curso de Medicina da FAMEMA, uma das instituições mais respeitadas do país. Sua jornada foi marcada por foco, organização e muita resistência. Com essa conquista, ela prova que, com esforço e determinação, é possível transformar grandes objetivos em realidade — e hoje é fonte de inspiração para quem está trilhando o mesmo caminho.
            </p>
          </div>

          <div className="devs">
            <img src={giovana2} alt="Giovana" className="devs-img" />
            <p className="tit">Giovana, 18 anos, aprovada em Astronomia na USP</p>
            <p className="desc">
              Com 18 anos, Giovana foi aprovada no curso de Astronomia da USP, realizando o sonho de estudar o universo em uma das melhores universidades do país. Sua paixão pela ciência, aliada à dedicação e curiosidade incansável, foi fundamental para essa conquista. Hoje, ela inspira outros estudantes a seguirem suas vocações e acreditarem que o céu nunca é o limite.
            </p>
          </div>
        </div>
        <br></br>

          <div className="devs-container2">
          <div className="devs">
            <img src={edu} alt="Eduardo" className="devs-img" />
            <p className="tit">Eduardo, 18 anos, aprovado em 1º lugar na Academia do Barro Branco</p>
            <p className="desc">
            Com apenas 18 anos, Eduardo garantiu o primeiro lugar na Academia do Barro Branco, referência na formação de oficiais da Polícia Militar. Sua conquista é resultado de muita disciplina, resiliência e comprometimento com seus objetivos. Hoje, ele é exemplo de que a dedicação diária pode levar a resultados extraordinários.            </p>
          </div>

          <div className="devs">
            <img src={joao} alt="Joao" className="devs-img" />
            <p className="tit">João, 18 anos, aprovado em 1º lugar em Administração na FGV-SP</p>
            <p className="desc">
            Aos 18 anos, João conquistou o primeiro lugar no curso de Administração da Fundação Getulio Vargas (FGV-SP), uma das instituições mais prestigiadas da América Latina. Com foco, estratégia e muita determinação, ele mostrou que é possível alcançar grandes resultados desde cedo. Sua história inspira outros jovens a acreditarem no próprio potencial e buscarem sempre a excelência.            </p>
          </div>

          <div className="devs">
            <img src={ariel} alt="Ariel" className="devs-img" />
            <p className="tit">Ariel, aprovado em 1º lugar em Design de Games no UNISAGRADO</p>
            <p className="desc">
            Ariel conquistou o primeiro lugar no curso de Design de Games do UNISAGRADO, unindo criatividade, técnica e paixão pelo universo dos jogos digitais. Sua trajetória reflete dedicação, inovação e vontade de transformar ideias em experiências interativas. Hoje, ele inspira outros jovens a acreditarem no poder da imaginação aliada ao esforço.            </p>
          </div>

          <div className="devs">
            <img src={duda} alt="Duda" className="devs-img" />
            <p className="tit">Maria Eduarda, 18 anos, aprovada em 1º lugar em Análise e Desenvolvimento de Sistemas na UNOESTE</p>
            <p className="desc">
            Com 18 anos, Maria Eduarda alcançou o primeiro lugar no curso de Análise e Desenvolvimento de Sistemas na UNOESTE. Apaixonada por tecnologia e resolução de problemas, ela se destacou pela dedicação aos estudos e pela busca constante por conhecimento. Sua conquista mostra que determinação e foco são fundamentais para abrir portas no mundo da tecnologia.            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SobreNos;



  
