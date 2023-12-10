const InformacoesPessoais = (props) => (
    <div>
        <h3>Informações Pessoais</h3>
        <p><b>Nome: </b>{props.nome}</p>
        <p><b>Sexo: </b>{props.sexo}</p>
        <p><b>Idade: </b>{props.idade}</p>
        <p><b>Naturalidade: </b>{props.naturalidade}</p>
        <p><b>Cidade: </b>{props.cidade}</p>
        <p><b>UF: </b>{props.uf}</p>
        <p><b>Email: </b>{props.email}</p>
        <p><b>Telefone: </b>{props.telefone}</p>
        <p><b>Sobre Mim: </b>{props.textoSobre}</p>
    </div>
);

export default InformacoesPessoais;
