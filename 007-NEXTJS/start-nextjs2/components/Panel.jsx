import { useContext} from "react";
import { ThemeContexNovo } from "@/contexts/ThemeContexNovo";

function Panel({ title, children }) {
  const theme = useContext(ThemeContexNovo);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Panel;
