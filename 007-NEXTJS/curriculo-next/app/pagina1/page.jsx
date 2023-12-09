import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/Navbar.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div>
        <p>Bem-vindo ao meu site!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
