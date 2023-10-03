import styles from "../components/Linha.module.css";
import CasaTabuleiro from "./CasaTabuleiro";

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <CasaTabuleiro preta={props.preta} />
      <CasaTabuleiro preta={!props.preta} />
      <CasaTabuleiro preta={props.preta} />
      <CasaTabuleiro preta={!props.preta} />
      <CasaTabuleiro preta={props.preta} />
      <CasaTabuleiro preta={!props.preta} />
      <CasaTabuleiro preta={props.preta} />
      <CasaTabuleiro preta={!props.preta} />
    </div>
  );
}
