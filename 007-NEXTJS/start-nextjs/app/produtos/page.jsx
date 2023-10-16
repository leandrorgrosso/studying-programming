"use client";

import styles from "@/app/produtos/produtos.module.css";
import { useState } from "react";

function Produtos() {
  let [listaProdutos, setListaProdutos] = useState([
    { nomeL: "Coxinha", precoL: 6.0 },
    { nomeL: "Pão de Queijo", precoL: 3.0 },
    { nomeL: "Bridadeiro", precoL: 1.5 },
  ]);

  const clickForm = (event) => {
    event.preventDefault();
    let nomeVar = event.target.nomeInput.value;
    let precoVar = event.target.precoInput.value;
    let produtoVar = { nomeL: nomeVar, precoL: precoVar };
    let novoArray = [...listaProdutos, produtoVar];
    setListaProdutos(novoArray);
  };

  return (
    <>
      <h1>Produtos</h1>

      <div className={styles.formProduto}>
        <form onSubmit={clickForm}>
          <label>Nome do Produto</label>
          <br />
          <input type="text" name="nomeInput" /> <br />
          <label>Preço do Produto</label>
          <br />
          <input type="text" name="precoInput" /> <br />
          <button type="submit">Cadastrar Produto</button>
        </form>
      </div>

      {listaProdutos.map((produto) => (
        <div className={styles.produtoComEstilo}>
          Nome: {produto.nomeL} <br />
          Preço: {produto.precoL} <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default Produtos;
