// import { auth } from '../../firebaseConfig';
// import { signOut } from 'firebase/auth';

// function Logout({user}) {
//     return(
//         <>
//         <h2>Olá,{user.displayName}</h2>
//         <button onClick={() => signOut(auth)}>Sair</button>
//         </>
//     )
// };

// export default Logout;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

function Logout({ user }) {
  const navigate = useNavigate(); // Hook de navegação

  const handleLogout = async () => {
    try {
      await signOut(auth); // Fazendo logout do usuário
      console.log("Usuário deslogado");
      navigate('/'); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  return (
    <>
      <h2>Olá, {user.displayName}</h2>
      <button onClick={handleLogout}>Sair</button> {/* Chama a função de logout */}
    </>
  );
}

export default Logout;
