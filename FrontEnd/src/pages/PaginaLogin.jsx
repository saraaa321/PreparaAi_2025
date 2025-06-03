import React, { useState, useEffect } from 'react';
import './css/PaginaLogin.css';
import ImagemPoly from "../assets/poly.png";
import Login from "../assets/login.png";
import Logo from "../assets/logo.png";
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Logine from '../components/Logine';
import { loginWithGoogleAndSaveUser } from '../components/Loging';
import Cadastro from '../components/Cadastro';

const PaginaLogin = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate('/PagInicial');
      }
    });
    return () => unsubscribe();
  }, [navigate, setUser]);

  const handleGoogleLogin = async () => {
    if (loadingGoogle) return; // evita múltiplos popups
    setLoadingGoogle(true);
    setError(null);
    try {
      const user = await loginWithGoogleAndSaveUser();
      setUser(user);
      navigate('/PagInicial');
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      setError('Erro ao fazer login com o Google. Tente novamente.');
    } finally {
      setLoadingGoogle(false);
    }
  };

  const toggleForm = () => setIsLogin(!isLogin);

  

  return (
    <div className="login-page">
      <header className="cabeçalho">
        <div className="menu">
          <img src={Logo} alt="Logo" id="imagemLogo" />
        </div>
      </header>
      
      <main>
        <div className="image-section">
          <img src={ImagemPoly} alt="Capa" className="main-image" />
       </div>
        <div className="form-section">
          <img src={Login} alt="Login" className="logo" />
          <button
            className="google-login"
            onClick={handleGoogleLogin}
            disabled={loadingGoogle}
          >
            {loadingGoogle ? 'Entrando...' : 'Entrar com o Google'}
          </button>

          {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}

          {isLogin ? (
            <Logine setUser={setUser} />
          ) : (
            <Cadastro setUser={setUser} />
          )}

          <button className="al" onClick={toggleForm}>
            {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça Login'}
          </button>
        </div>
      </main>
      <footer className="rodape">
  <p>© 2025 Minha Plataforma</p>
</footer>

    </div>
    
  );
};

export default PaginaLogin;
