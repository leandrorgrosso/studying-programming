// pages/index.js

// Importa o componente SenderComponent de um caminho relativo definido pelo alias '@'
import SenderComponent from '@/components/SenderComponent';

// Declaração do componente funcional Home
const Home = () => {
  // Retorna um JSX representando a estrutura da página inicial
  return (
    <div>
      {/* Cabeçalho h1 indicando o título da página */}
      <h1>Página Inicial</h1>
      
      {/* Renderiza o componente SenderComponent na página */}
      <SenderComponent />
    </div>
  );
};

// Exporta o componente Home para que possa ser utilizado como a página inicial da aplicação
export default Home;
