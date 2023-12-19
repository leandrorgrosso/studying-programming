import styles from "@/styles/ArticleAcademico.module.css";
import FormacaoEscolar from "@/components/FormacaoEscolar";

const ArticleAcademico = () => {
  return (
    <>
      <article className={styles.article}>
        <FormacaoEscolar />
      </article>
    </>
  );
};

export default ArticleAcademico;
