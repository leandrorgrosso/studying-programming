import styles from "@/styles/Aside.module.css";
import Image from "next/image";

const Aside = () => {
  return (
    <>
  <aside className={styles.aside}>
    {/* Aside */}
    <Image src="/imagem.png" alt="" width={300} height={300}/>
  </aside>
    </>
  )
};

export default Aside;
