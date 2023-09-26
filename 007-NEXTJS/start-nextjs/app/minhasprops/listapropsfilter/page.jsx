import { listaPessoa } from "@/data/listaPessoa";

function ListaPropsFilter() {
  const corPreferida = listaPessoa.filter((pessoa) => pessoa.cor === "roxo");

  return (
    <>
      <div>ListaPropsFilter</div>

      {corPreferida.length > 0 && (
        <>
          <h1>Filtro pela Cor preferida</h1>
          <ul>
            {corPreferida.map((pessoa) => (
              <li key={pessoa.id}>{pessoa.nome}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ListaPropsFilter;
