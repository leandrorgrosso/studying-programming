"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);

    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await resposta.json();
      setUsers(data);
    } catch (error) {
      console.log("Erro no Fecth API");
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Usuários</h1>
      <div>
        {loading && <div className={styles.loader}>Carregando...</div>}
        {!loading && users.length > 0 && (
          <ul className={styles.userList}>
            {users.map((item) => (
              <li key={item.id} className={styles.userItem}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
        {!loading && users.length === 0 && (
          <div className={styles.errorMessage}>Não há usuários para exibir</div>
        )}
      </div>
    </div>
  );
};

export default Home;
