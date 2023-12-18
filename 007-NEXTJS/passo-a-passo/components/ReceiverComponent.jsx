// components/ReceiverComponent.jsx

// Declaração do componente funcional ReceiverComponent, que recebe as props como parâmetro
const ReceiverComponent = (props) => {
    // Extrai a propriedade 'data' das props
    const { data } = props;
  
    // Retorna um JSX representando a estrutura do ReceiverComponent
    return (
      <div>
        {/* Cabeçalho h2 indicando o nome do componente */}
        <h2>Receiver Component</h2>
        
        {/* Exibe a mensagem recebida do SenderComponent */}
        <p>Mensagem Recebida: {data.message}</p>
        
        {/* Exibe o valor recebido do SenderComponent */}
        <p>Valor Recebido: {data.value}</p>
      </div>
    );
  };
  
  // Exporta o componente ReceiverComponent para que possa ser utilizado em outros lugares
  export default ReceiverComponent;
  