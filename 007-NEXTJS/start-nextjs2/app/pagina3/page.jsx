"use client"

import Link from 'next/link';

const Page3 = ({ valueFromPage1 }) => (
  <div>
    <h1>Página 3</h1>
    <p>Valor da Página 1: {valueFromPage1}</p>
    <Link href="/pagina1">Voltar para a Página 1</Link>
  </div>
);

Page3.getInitialProps = ({ query }) => {
  const { value } = query;
  return { valueFromPage1: value };
};

export default Page3;
