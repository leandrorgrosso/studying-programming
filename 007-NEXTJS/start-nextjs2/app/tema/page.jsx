"use client"

import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeButton from '@/components/ThemeButton';

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API com Next.js</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}
