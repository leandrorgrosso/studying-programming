import Receita from "../components/Receita";
import Quadrado from "../components/Quadrado";
import HeaderProps from "../components/HeaderProps";

function Home(){
  return (
    <div>
      <div>Home</div>

      <HeaderProps pedido="🍕 Pizza" sobremesa="🍦 Sorvete" />
      <HeaderProps pedido="🍔 Lanche" sobremesa="🍰 Bolo" />

      {/* <Quadrado /> */}
      <Receita/>

    </div>
  );
};

export default Home;
