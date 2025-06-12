import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../firebaseConfig';
import './PaginaLogin.css';

const PaginaLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [isSignUp, setIsSignUp] = useState(false); // Estado para alternar entre login e cadastro

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isSignUp) {
                // Se for cadastro
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                setUser(userCredential.user);
                console.log("Usuário cadastrado:", userCredential.user);
            } else {
                // Se for login
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                setUser(userCredential.user);
                console.log("Usuário logado:", userCredential.user);
            }
        } catch (error) {
            console.error("Erro ao fazer login/cadastro:", error.message);
        }
    };

    return (
        <div>
            
        </div>
    );
};

export default PaginaLogin;
