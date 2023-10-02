function Receita(props) {
  const meuBolo = {
    nomeDoBolo: "Prestigio",
    imagemUrl:
      "https://cooknenjoy.com/wp-content/uploads/2021/09/BOLO-GELADO-PRESTI%CC%81GIO3-1-scaled.jpg",
    sabor: ["Chocolate", "Morango"],
  };

  return (
    <div>
      <h1>{props.nomeDoBolo}</h1>
      <img src={props.imagemUrl} alt={props.nomeDoBolo} width={200} />

      <div>Minhas Receitas</div>

      <h1>Bolo Prestigio</h1>
      <img
        src="https://cooknenjoy.com/wp-content/uploads/2021/09/BOLO-GELADO-PRESTI%CC%81GIO3-1-scaled.jpg"
        alt="Bolo Prestigio"
        width={200}
      />
      <ul>
        <li>{meuBolo.sabor[0]}</li>
        <li>{meuBolo.sabor[1]}</li>
      </ul>
      {/* <h3>Ingredientes</h3> */}
      {/* <ul> */}
      {/* <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li> */}
      {/* </ul> */}
    </div>
  );
}

export default Receita;
