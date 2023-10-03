import Tabuleiro from "../components/Tabuleiro";
import styles from "../app/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tabuleiro />
    </div>
  );
}
