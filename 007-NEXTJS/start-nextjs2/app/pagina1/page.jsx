"use client";

import Header from "@/components/Header";
import { LoggedUserProvider } from "@/contexts/LoggedUserContext";
import Link from "next/link";

function Pagina1() {
  return (
    <>
      <LoggedUserProvider>
        <Header/>
        <div style={{ backgroundColor: "silver" }}>
          <nav>
            <ul>
              <li>
                <Link href="/pagina1">Pagina 1</Link>
              </li>
              <li>
                <Link href="/pagina2">Pagina 2</Link>
              </li>
              <li>
                <Link href="/pagina3">Pagina 3</Link>
              </li>
            </ul>
          </nav>
          <p></p>
        </div>
        <h1>Página 1</h1>
      </LoggedUserProvider>
    </>
  );
}

export default Pagina1;
