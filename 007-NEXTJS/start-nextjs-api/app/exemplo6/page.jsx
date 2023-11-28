"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // if (!resposta.ok) {
      //   throw new Error("Erro ao buscar usuários");
      // }

      const data = await resposta.json();
      setUsers(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <strong>{user.name}</strong>
            </p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.phone}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
