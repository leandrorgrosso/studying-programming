// app/colunas/page.jsx

import Coluna1 from '@/components/Coluna1';
import Coluna2 from '@/components/Coluna2';
import Coluna3 from '@/components/Coluna3';
import styles from '@/components/Colunas.module.css';

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <div className={styles.container}>
        <div className={styles.column}>
          <Coluna1 />
        </div>
        <div className={styles.column}>
          <Coluna2 />
        </div>
        <div className={styles.column}>
          <Coluna3 />
        </div>
      </div>
    </div>
  );
};

export default Home;