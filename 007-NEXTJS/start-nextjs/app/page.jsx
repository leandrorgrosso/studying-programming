import Receita from "../components/Receita";
import Quadrado from "../components/Quadrado";
import HeaderProps from "../components/HeaderProps";
import { Cartao } from "../components/Cartao";
import { listaPessoa } from "../data/listaPessoa";

function Home() {
  const lista = listaPessoa.map((pessoa) => <li>{pessoa.nome}</li>);
  return (
    <div>
      <div>Pagina Home</div>

      {/* <HeaderProps pedido="🍕 Pizza" sobremesa="🍦 Sorvete" /> */}
      {/* <HeaderProps pedido="🍔 Lanche" sobremesa="🍰 Bolo" /> */}

      {/* <Quadrado /> */}
      {/* <Receita/> */}

      {/* <Cartao textoDaFrase="Algum texto da frase" autorDaFrase="Autor da Frase"/> */}

      {listaPessoa.length > 0 && (
        <ul>
          {/* {lista} */}
          {listaPessoa.map((pessoa) => (
            <li key={pessoa.id}>
              {pessoa.nome} - {pessoa.altura}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
