import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
