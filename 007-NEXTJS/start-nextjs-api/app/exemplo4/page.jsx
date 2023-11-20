"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true)

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
    <>
      <h1>Lista de Usuários</h1>
      <div>
        {loading && "Carregando..."}
        {!loading && users.length > 0 && (
          <ul>
            {users.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
        {!loading && users.length === 0 && "Não há usuários para exibir"}
      </div>
    </>
  );
};

export default Home;
