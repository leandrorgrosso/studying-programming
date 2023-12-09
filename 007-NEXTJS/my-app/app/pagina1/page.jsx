// App.jsx
import React from 'react';
import Header from '@/components/Header';
import Article from '@/components/Article';
import Nav from '@/components/Nav';
import Aside from '@/components/Aside';
import Footer from '@/components/Footer';

import styles from '@/styles/App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Nav />
        <Article />
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default App;
