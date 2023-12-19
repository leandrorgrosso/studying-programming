import InformacoesAcademicas from "@/components/InformacoesAcademicas";

const FormacaoEscolar = () => {
  const informacoesAcademicas = {
    fundamental: "01/12/23",
    nomeDaEscola1: "Escola ...",
    anoDeConclusao1: "01/12/23",
    ensinoMedio: "Estudo do ensino médio",
    nomeDaEscola2: "Estudei",
    anoDeConclusao2: "01/12/23",
    curso1: "Curso 1",
    dataConclusao1: "01/12/23",
    curso2: "Curso 2",
    dataConclusao2: "01/12/23",
  };

  return (
    <div>
      {/* <h2>Formação Escolar</h2> */}
      <br />
      <InformacoesAcademicas {...informacoesAcademicas} />
    </div>
  );
};

export default FormacaoEscolar;
