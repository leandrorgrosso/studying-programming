'use client'
import React, { useState } from 'react';
import styles from '@/styles/Formulario.module.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para lidar com os dados do formulário, por exemplo, enviar para um servidor.
    console.log('Dados do formulário:', formData);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="nome">
          Nome:
        </label>
        <input
          className={styles.input}
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="telefone">
          Telefone:
        </label>
        <input
          className={styles.input}
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="empresa">
          Empresa:
        </label>
        <input
          className={styles.input}
          type="text"
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button} type="submit">
        Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
