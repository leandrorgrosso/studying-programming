import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    // <footer className={styles.footer}>
    //   <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
    // </footer>
    <footer className={styles.footer}>
      <div className={styles.column}>Column 1</div>
      <div className={styles.column}>Column 2</div>
      <div className={styles.column}>Column 3</div>
    </footer>
  );
};

export default Footer;
