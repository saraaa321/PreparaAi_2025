import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../firebaseConfig'; // Importando o Firebase
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import '../pages/css/PaginaLogin.css'; // Estilo específico para o login
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook de navegação

    const handleLogin = async (e) => {
        e.preventDefault();
      
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          setUser(user); // Definir o usuário no estado
          
          const userRef = doc(db, "usuarios", user.uid);
          const userSnap = await getDoc(userRef);
      
          if (!userSnap.exists()) {
            await setDoc(userRef, {
              nome: user.email, // ou outro campo, se tiver nome
              pontuacao: 0,
            });
          }
      
          alert("Login realizado com sucesso!");
          navigate('/PagInicial');
        } catch (error) {
          console.error("Erro ao fazer login: " + error.message);
          alert("Erro ao fazer login: " + error.message);
        }
      };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu Email"
                />
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua Senha"
                />
                <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
