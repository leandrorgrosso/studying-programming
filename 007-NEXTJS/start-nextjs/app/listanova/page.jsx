import { listaNova, listaNova1 } from "@/data/listaMinha";

// const lista = listaNova.map((aluno) => <li>{aluno.nome}</li>);
const corPreferida = listaNova.filter((variavelAqui) => variavelAqui.cor === "verde");

function BuscaLista() {
  return (
    <>
      <h1>Lista Nova</h1>
      <ul>
        {corPreferida.map((aluno) => (
        <li key={aluno.index}>
            {aluno.nome} - {aluno.cor}
        </li>
        ))}
      </ul>
    </>
  );
}

export default BuscaLista;
