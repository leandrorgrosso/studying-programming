import styles from "../estilonext/estilo.module.css";

export default function EstiloIntegrado() {
  return (
    <>
      <div id={styles.integracaoComId}>
        <div className={styles.azul}>#01 Texto com estilo Integrado</div>
        <div className={styles.verde}>#02 Texto com estilo Integrado</div>
        <div className={styles.vermelho}>#03 Texto com estilo Integrado</div>
        <div>#04 Texto com estilo Integrado</div>
      </div>
    </>
  );
}
