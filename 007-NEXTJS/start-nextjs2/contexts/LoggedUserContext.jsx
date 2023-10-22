import { createContext, useContext, useState } from "react";

export const LoggedUserContext = createContext(null);

export const LoggedUserProvider = ({ children }) => {
  const [name, setName] = useState("123");

  return (
    <LoggedUserContext.Provider value={{ name, setName }}>
      {children}
    </LoggedUserContext.Provider>
  );
};

