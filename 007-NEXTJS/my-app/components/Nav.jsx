import Link from "next/link";
import styles from "@/styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        {/* Nav */}
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
    </>
  );
};

export default Nav;
