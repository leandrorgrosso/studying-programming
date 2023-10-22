"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext({})

function PaginaPropsContexto() {
  const [name, setName] = useState("Usando Contexto React");

  function FilhoComponenteUm() {
    return <FilhoComponenteDois/>;
  }

  function FilhoComponenteDois() {
    const {setName} = useContext(AppContext)
    return (
      <button onClick={() => setName("texto aqui...")}>Cliqne no Botão</button>
    );
  }

  return (
    <AppContext.Provider value={{name,setName}}>      
      <h1>Página usando Contexto</h1>
      <div>{name}</div>
      <FilhoComponenteUm changeName={setName}/>
    </AppContext.Provider>
  );
}

export default PaginaPropsContexto;
