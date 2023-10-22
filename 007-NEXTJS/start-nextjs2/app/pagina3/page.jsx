"use client";

import Link from "next/link";

function Pagina3() {
  return (
    <>
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
      </div>
      <h1>Página 3</h1>
    </>
  );
}

export default Pagina3;
