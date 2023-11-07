// import { useUser } from "@/contexts/UserContext";

// function LoginLogout() {
//   const { user, login, logout } = useUser();

//   return (
//     <div>
//       {user ? (
//         <div>
//           <p>Usuário logado como: {user}</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <p>Nenhum usuário logado.</p>
//           <button onClick={() => login("usuario123")}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginLogout;


import { useUser } from '@/contexts/UserContext';
import { useState } from 'react';

function LoginLogout() {
  const { user, login, logout } = useUser();
  const [name, setName] = useState(''); // Adicione o estado do nome

  const handleNameChange = (event) => {
    setName(event.target.value); // Atualize o estado do nome conforme o usuário digita
  };

  const handleLogin = () => {
    login(name); // Faça o login com o nome fornecido pelo usuário
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Usuário logado como: {user}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Nenhum usuário logado.</p>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleNameChange}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginLogout;
