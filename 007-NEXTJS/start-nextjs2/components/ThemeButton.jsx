import { useTheme } from '@/contexts/ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Mudar Tema ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  );
};

export default ThemeButton;
