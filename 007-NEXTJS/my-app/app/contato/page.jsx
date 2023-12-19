import Article from "@/components/Article";
import ArticleAcademico from "@/components/ArticleAcademico";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

import styles from "@/styles/App.module.css";



import Formulario from "@/components/Formulario";

const Contato = () => {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <div className={styles.main}>
          
          <Nav />
          <div>
            <h1>Meu Formulário</h1>
            <Formulario />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contato;
