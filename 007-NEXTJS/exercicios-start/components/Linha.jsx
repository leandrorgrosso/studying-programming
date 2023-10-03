import styles from "@/components/linha.module.css"

const Linha = () => {
  return (
    <div className={styles.linha}>
    <div>Linha</div>
    <Casa/>
    <Casa preta/>
    <Casa/>
    <Casa preta/>
    <Casa/>
    <Casa preta/>
    <Casa/>
    <Casa preta/>
    </div>
  )
}

export default Linha