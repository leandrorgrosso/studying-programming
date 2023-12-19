import styles from "@/styles/ArticleAcademico.module.css";

const InformacoesAcademicas = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h2>Formação escolar</h2>
        <div className={styles.column}>
          <p>
            <b>Fundamental: </b>
            {props.fundamental}
          </p>
          <p>
            <b>Nome da escola: </b>
            {props.nomeDaEscola1}
          </p>
          <p>
            <b>Ano de Conclusão: </b>
            {props.anoDeConclusao1}
          </p>
        </div>

        <div className={styles.column}>
          <p>
            <b>Ensino médio: </b>
            {props.ensinoMedio}
          </p>
          <p>
            <b>Nome da escola: </b>
            {props.nomeDaEscola2}
          </p>
          <p>
            <b>Ano de Conclusão: </b>
            {props.anoDeConclusao2}
          </p>
        </div>

        <h2>Cursos extracurriculares</h2>
        <div className={styles.column}>
          <p>
            <b>Curso 1: </b>
            {props.curso1}
          </p>
          <p>
            <b>Data Conclusão: </b>
            {props.dataConclusao1}
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <b>Curso 2: </b>
            {props.curso2}
          </p>
          <p>
            <b>Data Conclusão: </b>
            {props.dataConclusao2}
          </p>
        </div>

        <div className={styles.column}>
          {/* Adicione mais colunas conforme necessário */}
        </div>
      </div>
    </>
  );
};

export default InformacoesAcademicas;
