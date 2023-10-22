"use client"

import { UserProvider } from '@/context/UserContext';
import LoginLogout from '@/components/LoginLogout';

function Home() {
  return (
    <UserProvider>
      <div>
        <h1>Exemplo de Context API com Next.js</h1>
        <LoginLogout />
      </div>
    </UserProvider>
  );
}

export default Home