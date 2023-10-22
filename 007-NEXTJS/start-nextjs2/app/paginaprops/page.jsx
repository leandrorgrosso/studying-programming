"use client";

import { useState } from "react";

function PaginaProps() {
  const [name, setName] = useState("Usando Com Props");

  function FilhoComponenteUm({changeName}) {
    return <FilhoComponenteDois changeName={changeName}/>;
  }

  function FilhoComponenteDois({changeName}) {
    return (
      <button onClick={() => changeName("texto aqui...")}>Cliqne no Botão</button>
    );
  }

  return (
    <>      
      <h1>Página com Props</h1>
      <div>{name}</div>
      <FilhoComponenteUm changeName={setName}/>
    </>
  );
}

export default PaginaProps;
