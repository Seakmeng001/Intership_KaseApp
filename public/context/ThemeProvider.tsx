import React, { useState } from 'react';
import ThemeContext from './ThemeContext';


interface ThemeContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme } as ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  )

};

export default ThemeProvider;