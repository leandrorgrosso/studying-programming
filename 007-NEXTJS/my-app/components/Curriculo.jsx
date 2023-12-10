import InformacoesPessoais from '@/components/InformacoesPessoais';

const Curriculo = () => {
  const informacoesPessoais = {
    nome: 'Seu Nome',
    sexo: 'Feminino',
    idade: 25,
    naturalidade: 'Sua Cidade',
    cidade: 'Sua Cidade',
    uf: 'SP',
    email: 'seu.email@example.com',
    telefone: '(11) 98765-4321',
    textoSobre:
      'Profissional da área de Análise e Desenvolvimento de Sistemas, apaixonado por transformar desafios em soluções inovadoras...',
  };

  return (
    <div>
      <h2>Meu Currículo</h2>
      <br />
      <InformacoesPessoais {...informacoesPessoais} />
    </div>
  );
};

export default Curriculo;
