
// import React, { useState } from 'react';
// import { auth, createUserWithEmailAndPassword } from '../../firebaseConfig';
// import { useNavigate } from 'react-router-dom';
// import '../pages/css/PaginaLogin.css';
// import { db } from "../../firebaseConfig"; // Firestore
// import { doc, setDoc } from "firebase/firestore";

// const Cadastro = ({ setUser }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [nome, setNome] = useState('');

//     const navigate = useNavigate();

//     const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

//     const handleCadastro = async (e) => {
//         e.preventDefault();

//         if (!email || !password || !confirmPassword || !nome) {
//             return alert("Preencha todos os campos.");
//         }
//         if (!validarEmail(email)) return alert("Digite um email válido.");
//         if (password.length < 6) return alert("A senha deve ter pelo menos 6 caracteres.");
//         if (password !== confirmPassword) return alert("As senhas não coincidem.");

//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // Criar documento do usuário no Firestore
//             const userRef = doc(db, "usuarios", user.uid);
//             await setDoc(userRef, {
//                 nome: nome,   // Garantir que o nome do usuário seja salvo corretamente
//                 email: email,
//                 pontuacao: 0
//             });

//             setUser(user);
//             alert("Usuário cadastrado com sucesso!");
//             navigate('/PagInicial');
//         } catch (error) {
//             if (error.code === 'auth/email-already-in-use') {
//                 alert("Este e-mail já está em uso.");
//             } else {
//                 alert("Erro ao cadastrar: " + error.message);
//             }
//         }
//     };

//     return (
//         <div className="cadastro-container">
//             <h1>Cadastrar</h1>
//             <form onSubmit={handleCadastro}>
//                 <label>Nome:</label>
//                 <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
//                 <label>Email:</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <label>Senha:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <label>Confirmar Senha:</label>
//                 <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                 <button type="submit" className="login-button">Cadastrar</button>
//             </form>
//         </div>
//     );
// };

// export default Cadastro;



import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../pages/css/PaginaLogin.css';
import { db } from "../../firebaseConfig"; // Firestore
import { doc, setDoc } from "firebase/firestore";

const Cadastro = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nome, setNome] = useState('');

    const navigate = useNavigate();

    const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleCadastro = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword || !nome) {
            return alert("Preencha todos os campos.");
        }
        if (!validarEmail(email)) return alert("Digite um email válido.");
        if (password.length < 6) return alert("A senha deve ter pelo menos 6 caracteres.");
        if (password !== confirmPassword) return alert("As senhas não coincidem.");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Criar documento do usuário no Firestore
            const userRef = doc(db, "usuarios", user.uid);
            const hojeStr = new Date().toISOString().split("T")[0];

            await setDoc(userRef, {
                nome: nome,
                email: email,
                pontuacao: 0,
                ranking: 0,
                ofensiva: 1,
                semana: 0,
                ultimaAbertura: hojeStr,
            });


            setUser(user);
            alert("Usuário cadastrado com sucesso!");
            navigate('/PagInicial');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Este e-mail já está em uso.");
            } else {
                alert("Erro ao cadastrar: " + error.message);
            }
        }
    };

    return (
        <div className="cadastro-container">
            <h1>Cadastrar</h1>
            <form onSubmit={handleCadastro}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Senha:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Confirmar Senha:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" className="login-button">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;
