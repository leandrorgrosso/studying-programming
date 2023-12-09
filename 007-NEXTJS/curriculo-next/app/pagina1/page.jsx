import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Curriculo from '@/components/Curriculo';
import styles from "@/styles/Navbar.module.css";
import stylesApp from "@/styles/App.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <Curriculo/>
      <div className={stylesApp.foto}>
        <h2>Foto</h2>
        <Image src="/vercel.svg" alt="Minha Foto" width={200} height={300} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
