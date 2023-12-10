import Article from "@/components/Article";
import ArticleAcademico from "@/components/ArticleAcademico";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

import styles from "@/styles/App.module.css";

const Academico = () => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <div className={styles.main}>
          {/* <div>Pagina Academico</div> */}
          <Nav />
          <ArticleAcademico/>
          {/* <Article /> */}
          {/* <Aside /> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Academico;
