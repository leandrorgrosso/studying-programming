import { createContext, useState } from "react";

export const ThemeContexNovo = createContext(null);

export const ThemeContexNovoProvider = ({ children }) => {
    const [theme, setTheme] = useState(theme);

  return (
    <ThemeContexNovo.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContexNovo.Provider>
  );
};
