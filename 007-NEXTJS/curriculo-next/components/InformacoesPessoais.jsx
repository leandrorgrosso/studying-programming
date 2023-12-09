const InformacoesPessoais = (props) => (
    <div>
      <h3>Informações Pessoais</h3>
      <p>Nome: {props.nome}</p>
      <p>Sexo: {props.sexo}</p>
      <p>Idade: {props.idade}</p>
      <p>Naturalidade: {props.naturalidade}</p>
      <p>Cidade: {props.cidade}</p>
      <p>UF: {props.uf}</p>
      <p>Email: {props.email}</p>
      <p>Telefone: {props.telefone}</p>
      <p>Sobre Mim: {props.textoSobre}</p>
    </div>
  );
  
  export default InformacoesPessoais;
  