import { listaPessoa } from "@/data/listaPessoa";

function ListaPropsMap() {

  const lista = listaPessoa.map((pessoa) => <li>{pessoa.nome}</li>);

  return (
    <>
      <div>ListaPropsMap</div>
      
      <ul>
        {lista}
      </ul>

      {listaPessoa.length > 0 && (
        <ul>
          {listaPessoa.map((pessoa) => (
            <li key={pessoa.id}>
              {pessoa.nome} - {pessoa.altura}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListaPropsMap