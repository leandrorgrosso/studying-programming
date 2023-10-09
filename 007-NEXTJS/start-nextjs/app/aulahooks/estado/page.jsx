"use client";

import { useState } from "react";

function EstadoComCampos() {
  const [nomeCampo, setNomeCampo] = useState("");

  const clickBotao = () => {
    alert(nomeCampo);
  };

  return (
    <>
      <div>Estado Com Campos</div>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nomeCampo}
        onChange={(event) => setNomeCampo(event.target.value)}
      />
      <p>Seu nome é: {nomeCampo}</p>
      <button onClick={clickBotao}>Campo Nome</button>
    </>
  );
}

export default EstadoComCampos;
