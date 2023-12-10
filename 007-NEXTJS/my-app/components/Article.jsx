import styles from "@/styles/Article.module.css";
import Curriculo from "./Curriculo";

const Article = () => {
  return (
    <>
      <article className={styles.article}>
        {/* Article */}
        <Curriculo />
      </article>
    </>
  );
};

export default Article;
