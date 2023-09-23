import styles from "../components/cartao.module.css";

export function Cartao(props) {
  if (props.autorDaFrase) {
    return (
      <div className={styles.meuCard}>
        <h2>Texto do cartão {props.textoDaFrase}</h2>
        <p>Paragrafo do meu cartão{props.autorDaFrase}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.meuCard}>
        <h2>Texto do cartão {props.textoDaFrase}</h2>
        <p>Paragrafo do meu cartão - Autor Desconhecido</p>
      </div>
    );
  }
}
