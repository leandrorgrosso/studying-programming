import { LoggedUserContext } from "@/contexts/LoggedUserContext";
import { useContext } from "react";


function Header() {
  const loggedUserCtx = useContext(LoggedUserContext);

  const { name } = useContext(LoggedUserContext);

  const handleLogout = () => {
    loggedUserCtx?.setName("");
  };

  return (
    <header>
      {loggedUserCtx?.name && (
        <>
        <h2>Seu nome é: {name}</h2>
          <p>Usuario Logado: {loggedUserCtx?.name}</p>
          <button onClick={handleLogout}>Sair</button>
        </>
      )}
      {(!loggedUserCtx || loggedUserCtx.name === "") && (
        <p>Usuario deslogado</p>
      )}
    </header>
  );
}

export default Header;
