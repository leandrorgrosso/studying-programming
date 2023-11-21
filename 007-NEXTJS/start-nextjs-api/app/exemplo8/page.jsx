"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  const getAddress = async () => {
    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!resposta.ok) {
        throw new Error("Erro ao buscar endereço");
      }

      const data = await response.json();
      setAddress(data);
    } catch (error) {
      console.error("Erro ao buscar endereço:", error.message);
      alert("erro pelo alert");
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setCep(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getAddress();
  };

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Consulta de Endereço por CEP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          CEP:
          <input type="text" value={cep} onChange={handleInputChange} />
        </label>
        <button type="submit">Buscar Endereço</button>
      </form>
      <div>
        {loading && <div className={styles.loader}>Carregando...</div>}
        {!loading && address && (
          <div>
            <h2>Endereço Encontrado:</h2>
            <label>
              <strong>CEP:</strong>
              <input type="text" value={address.cep} readOnly />
            </label>
            <label>
              <strong>Logradouro:</strong>
              <input type="text" value={address.logradouro} readOnly />
            </label>
            <label>
              <strong>Bairro:</strong>
              <input type="text" value={address.bairro} readOnly />
            </label>
            <label>
              <strong>Cidade:</strong>
              <input type="text" value={address.localidade} readOnly />
            </label>
            <label>
              <strong>Estado:</strong>
              <input type="text" value={address.uf} readOnly />
            </label>
          </div>
        )}
        {!loading && !address && (
          <div className={styles.errorMessage}>Nenhum endereço encontrado</div>
        )}
      </div>
    </div>
  );
};

export default Home;
