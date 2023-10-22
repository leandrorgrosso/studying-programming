import { LoggedUserContext } from "@/contexts/LoggedUserContext";
import { useContext } from "react";

function Header() {
  const loggedUserCtx = useContext(LoggedUserContext);

  return (
    <>
      <p>Usuario Logado: {loggedUserCtx.name}</p>
    </>
  );
}

export default Header;
