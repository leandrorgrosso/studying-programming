const estudantesLista = [
  { nome: "Aluno 1", idade: 12 },
  { nome: "Aluno 2", idade: 17 },
  { nome: "Aluno 3", idade: 15 },
  { nome: "Aluno 4", idade: 12 },
  { nome: "Aluno 5", idade: 17 },
];

const lista = estudantesLista.map((aluno) => <li>{aluno.nome}</li>);

const AulaListaProps = () => {

  return (
    <>
      <h1>Aula de Lista com Props</h1>

      <h1>{new Date().toLocaleTimeString()}</h1>
      <ul>{lista}</ul>
    </>
  );
};

export default AulaListaProps;
