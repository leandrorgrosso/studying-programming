import styles from "../components/CasaTabuleiro.module.css";

export default function CasaTabuleiro(props) {
  return (
    <div
      style={{
        backgroundColor: props.preta ? "black" : "white",
      }}
      className={styles.casaTabuleiro}
    ></div>
  );
}
