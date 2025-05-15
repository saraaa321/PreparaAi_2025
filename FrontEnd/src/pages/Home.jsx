import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Site Prepara Aí!</h1>
      <Link to="/quiz"><button>Começar o Quiz</button></Link>
      <Link to="/ranking"><button>Ver Ranking</button></Link>
    </div>
  );
}

export default Home;

