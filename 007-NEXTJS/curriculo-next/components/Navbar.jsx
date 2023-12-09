import Link from 'next/link';
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
        <li>
          <Link href="/pagina1">Início</Link>
        </li>
        <li>
          <Link href="/academico">Acadêmico</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
