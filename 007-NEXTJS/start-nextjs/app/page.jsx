import Receita from "../components/Receita";
import Quadrado from "../components/Quadrado";
import HeaderProps from "../components/HeaderProps";
import { Cartao } from "../components/Cartao";
import { listaPessoa } from "../data/listaPessoa";

function Home() {
  const lista = listaPessoa.map((pessoa) => <li>{pessoa.nome}</li>);
  const corPreferida = listaPessoa.filter((pessoa) => pessoa.cor === "roxo");
  return (
    <div>
      <div>Pagina Home</div>

      {/* <HeaderProps pedido="🍕 Pizza" sobremesa="🍦 Sorvete" /> */}
      {/* <HeaderProps pedido="🍔 Lanche" sobremesa="🍰 Bolo" /> */}

      {/* <Quadrado /> */}
      {/* <Receita/> */}

      {/* <Cartao textoDaFrase="Algum texto da frase" autorDaFrase="Autor da Frase"/> */}

      {/* {listaPessoa.length > 0 && ( */}
      {/* <ul> */}
      {/* {lista} */}
      {/* {listaPessoa.map((pessoa) => ( */}
      {/* <li key={pessoa.id}> */}
      {/* {pessoa.nome} - {pessoa.altura} */}
      {/* </li> */}
      {/* ))} */}
      {/* </ul> */}
      {/* )} */}

      {/* {corPreferida.length > 0 && ( */}
        {/* <> */}
          {/* <h1>Cor preferida</h1> */}
          {/* <ul> */}
            {/* {corPreferida.map((pessoa) => ( */}
              {/* <li key={pessoa.id}>{pessoa.nome}</li> */}
            {/* ))} */}
          {/* </ul> */}
        {/* </> */}
      {/* )} */}
    </div>
  );
}

export default Home;
