"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await resposta.json();
    setUsers(json);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
