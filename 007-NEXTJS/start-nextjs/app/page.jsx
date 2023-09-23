import Receita from "../components/Receita";
import Quadrado from "../components/Quadrado";
import HeaderProps from "../components/HeaderProps";
import { Cartao } from "../components/Cartao";

function Home(){
  return (
    <div>
      <div>Pagina Home</div>

      {/* <HeaderProps pedido="🍕 Pizza" sobremesa="🍦 Sorvete" /> */}
      {/* <HeaderProps pedido="🍔 Lanche" sobremesa="🍰 Bolo" /> */}

      {/* <Quadrado /> */}
      {/* <Receita/> */}

      <Cartao textoDaFrase="Algum texto da frase" autorDaFrase="Autor da Frase"/>

    </div>
  );
};

export default Home;
