"use client";

import { useState } from "react";

function UsuarioLogado() {
  const [nomeUsuario, setNomeUsuario] = useState(false);

  const clickBotao = () => {
    setNomeUsuario(!nomeUsuario);
  };

  return (
    <>
      <div>Mostra Usuario</div>

      <button onClick={clickBotao}>
        {nomeUsuario ? "Ocultar" : "Mostrar"}
      </button>
      {nomeUsuario && <div>Usuario Logado</div>}
    </>
  );
}

export default UsuarioLogado;
