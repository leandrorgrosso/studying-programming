"use client";

import { useState } from "react";

function PaginaProps() {
  const [name, setName] = useState("Usando Com Props");

  function FilhoUm({changeName}) {
    return <FilhoDois changeName={changeName}/>;
  }

  function FilhoDois({changeName}) {
    return (
      <button onClick={() => changeName("texto aqui...")}>Cliqne no Botão</button>
    );
  }

  return (
    <>      
      <h1>Página com Props</h1>
      <div>{name}</div>
      <FilhoUm changeName={setName}/>
    </>
  );
}

export default PaginaProps;
