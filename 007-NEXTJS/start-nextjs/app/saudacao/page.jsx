import styles from "./saudacao.module.css";

// const horaCompleta = new Intl.DateTimeFormat("pt-BR", {
//     timeStyle: "short",
//     hour12: false,
// }).format();
const horaCompleta = new Date()

const aHora = new Date().getHours();
let minhaSaudacao = "";

if (aHora >= 0 && aHora < 12) {
    minhaSaudacao = "Bom dia";
} else if (aHora >= 12 && aHora < 18) {
    minhaSaudacao = "Boa tarde";
} else if (aHora >= 18 && aHora <= 23) {
    minhaSaudacao = "Boa noite";
}

function Saudacao() {
    return (
        <>
            <div className={styles.configuracao}>
                {/* <div className={styles.hora}>00:00</div> */}
                {/* <div className={styles.textoSaudacao}>Saudação</div> */}
                <div className={styles.hora}>{horaCompleta}</div>
                <div className={styles.textoSaudacao}>{minhaSaudacao}</div>
            </div>
        </>
    );
}

export default Saudacao;