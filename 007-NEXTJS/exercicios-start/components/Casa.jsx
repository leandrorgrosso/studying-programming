import styles from "@/components/casa.module.css"

const Casa = (props) => {
  return (
    <div 
        style={{backgroundColor: props.preta ? "black" : "white"}}    
        className={styles.casaTabuleiro}>Casa
    </div>
  )
}

export default Casa