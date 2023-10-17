"use client"

// page1.js
import { useState } from 'react';
import Link from 'next/link';

export default function Page1() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Link href={{ pathname: '/pagina2', query: { inputValue } }}>
        Navegar para a página 2
      </Link>
      <Link href={{ pathname: '/pagina3', query: { inputValue } }}>
        Navegar para a página 3
      </Link>
    </div>
  );
}
