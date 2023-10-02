import Cabeca from "@/components/cabeca";
import styles from "./ex1.module.css";
import Pe from "@/components/pe";

function Padrao() {
    return (
<>
<div className={styles.cabec}>

<Cabeca logotipo="🍕" empresa="Empresa1" />
</div>

<h1 className={styles.hx} >Exercicio 1</h1>
<p className={styles.px}>PROPS</p>
<div className={styles.rodp}>
<Pe nome="desenvolvedor1" email="emaildesenv.teste.com"/>
</div>
</>

    )
}
export default Padrao