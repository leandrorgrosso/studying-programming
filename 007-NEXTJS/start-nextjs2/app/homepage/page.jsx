"use client"

import React from 'react';
import { useUser } from '@/contexts/UserContext'; // Certifique-se de que o caminho esteja correto

function HomePage() {
  const { user } = useUser();

  return (
    <div>
      <h1>Página Inicial</h1>
      {user ? <p>Usuário logado como: {user}</p> : <p>Nenhum usuário logado.</p>}
    </div>
  );
}

export default HomePage;

