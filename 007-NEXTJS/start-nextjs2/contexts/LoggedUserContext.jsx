// import { createContext, useContext, useState } from "react";

// export const LoggedUserContext = createContext(null);

// export const LoggedUserProvider = ({ children }) => {
//   const [name, setName] = useState("132");

//   return (
//     <LoggedUserContext.Provider value={{ name, setName }}>
//       {children}
//     </LoggedUserContext.Provider>
//   );
// };



import React, { createContext, useContext, useState } from "react";

export const LoggedUserContext = createContext(null);

export const LoggedUserProvider = ({ children }) => {
  const [name, setName] = useState(""); // Inicialize o estado do nome como uma string vazia.

  const handleNameChange = (event) => {
    setName(event.target.value); // Atualize o estado do nome com o valor digitado pelo usuário.
  };

  return (
    <LoggedUserContext.Provider value={{ name, setName }}>
      {children}
      <div>
        <label htmlFor="name">Digite seu nome: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
    </LoggedUserContext.Provider>
  );
};
