import styles from "@/app/saudacao/saudacao.module.css";
let minhaSaudacao = "";
const aHora = new Date().getHours();
const aMinuto = new Date().getMinutes().toLocaleString(2)

if (aHora >= 6 && aHora < 12) {
    minhaSaudacao = "Bom dia";
} else if (aHora >= 12 && aHora < 18) {
    minhaSaudacao = "Boa tarde";
} else if (aHora >= 18 && aHora <= 23) {
    minhaSaudacao = "Boa noite";
}else if (aHora > 0 && aHora < 6 ) {
    minhaSaudacao = "Vai Dormir!!!";
}

function Horas() {   
    return (
        <>

        <div className={styles.configuracao}>                
                <div className={styles.hora}>{aHora}:{aMinuto}</div>
                <div className={styles.textoSaudacao}>{minhaSaudacao}</div>
        </div>
        </>
    )
}
export default Horas;