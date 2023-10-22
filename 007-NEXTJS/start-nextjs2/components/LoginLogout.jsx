import { useUser } from '@/context/UserContext';

const LoginLogout = () => {
  const { user, login, logout } = useUser();

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
          <button onClick={() => login('usuario123')}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginLogout;
