"use client";

import { useState } from "react";

import Form from "@/components/Form";
import { ThemeContexNovo } from "@/contexts/ThemeContexNovo";

export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContexNovo.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
      <h2>Exemplo de Video</h2>
      <h2>Usando Video do You Tube</h2>
      <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/JJS9x54pIgQ?si=mg63yFhDOFuOz4--"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2>Usando vide da Pasta Local Public</h2>
      <video width="320" height="240" controls>
  <source src="/SENAI2022.mp4" type="video/mp4"/>
      </video>
    </ThemeContexNovo.Provider>
  );
}

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContexNovo);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContexNovo);
//   const className = 'button-' + theme;
//   return (
//     <button className={className}>
//       {children}
//     </button>
//   );
// }
