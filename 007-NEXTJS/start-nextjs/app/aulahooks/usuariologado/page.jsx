"use client";

import { useState } from "react";

function UsuarioLogado() {
  const [nomeUsuario, setNomeUsuario] = useState(false);

  const [nome, setNome] = useState("Seu nome Aqui!!!")

  const clickBotao = () => {
    setNomeUsuario(!nomeUsuario);
  };

  const clickNome = ()=>{
    let nomeInput = prompt("Digite um nome")
    setNome(nomeInput)
  }

  return (
    <>
      <div>
        <h1>Nome: {nome}</h1>
        <button onClick={clickNome}>Nome digitado no input do Prompt</button>
      </div><br />
      <div>Mostra Usuario</div>

      <button onClick={clickBotao}>
        {nomeUsuario ? "Ocultar" : "Mostrar"}
      </button>
      {nomeUsuario && 
        <div>
          <p>Usuario Logado</p>
        <img src="/usuario.png"/>
        </div>
      }
    </>
  );
}

export default UsuarioLogado;
