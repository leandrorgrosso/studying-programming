import { useContext} from "react";
import { ThemeContexNovo } from "@/contexts/ThemeContexNovo";

function Button({ children }) {
  const theme = useContext(ThemeContexNovo);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}

export default Button;
