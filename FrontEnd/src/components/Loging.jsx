// import { auth } from '../../firebaseConfig';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { db } from '../../firebaseConfig';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import React from 'react';

// function Loging() {
//   const navigate = useNavigate();

//   const loginGoogle = async () => {
//     console.log("Botão clicado");
//     const provider = new GoogleAuthProvider();
  
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
  
//       console.log("User info:", user);
//     console.log("Nome:", user.displayName);
//     console.log("Email:", user.email);
  
//       const userRef = doc(db, "usuarios", user.uid);
//       const userSnap = await getDoc(userRef);
//       console.log("Documento existente?", userSnap.exists());

  
//       if (!userSnap.exists()) {
//         console.log("Tentando salvar usuário no Firestore...");
//         try {
//           await setDoc(userRef, {
//             nome: user.displayName || user.email.split('@')[0] || "Usuário Google",
//             email: user.email,
//             pontuacao: 0,
//             ranking: 0
//           });
//         console.log("Documento criado com sucesso.");
//       } catch (error) {
//         console.error("Erro ao salvar usuário:", error);
//         alert("Erro ao salvar os dados do usuário no Firestore.");
//       }
//       console.error("Código do erro:", error.code);
//   console.error("Mensagem do erro:", error.message);
//     }
  
//       navigate('/PagInicial');
//     } catch (error) {
//       console.error("Erro ao fazer login com o Google:", error);
//       alert("Erro ao logar com o Google. Tente novamente.");
//     }
//   };

//   return (
//     <div>
//       <button onClick={loginGoogle}>Entrar com Google</button>
//     </div>
//   );
// }

// export default Loging;

import { auth, db } from '../../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const loginWithGoogleAndSaveUser = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const userRef = doc(db, "usuarios", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      nome: user.displayName || user.email.split('@')[0] || "Usuário Google",
      email: user.email,
      pontuacao: 0,
      ranking: 0
    });
  }

  return user;
};
