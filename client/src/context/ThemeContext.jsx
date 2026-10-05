import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('p2p-skillexchange-theme') || localStorage.getItem('skillcycle-theme') || 'light';
  });

  const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    return theme === 'system' ? getSystemTheme() : theme;
  });

  const applyTheme = (activeTheme) => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleSystemChange = () => {
      if (theme === 'system') {
        const sys = getSystemTheme();
        setResolvedTheme(sys);
        applyTheme(sys);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else {
      mediaQuery.addListener(handleSystemChange);
    }

    const active = theme === 'system' ? getSystemTheme() : theme;
    setResolvedTheme(active);
    applyTheme(active);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemChange);
      } else {
        mediaQuery.removeListener(handleSystemChange);
      }
    };
  }, [theme]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('p2p-skillexchange-theme', newTheme);
    const active = newTheme === 'system' ? getSystemTheme() : newTheme;
    setResolvedTheme(active);
    applyTheme(active);
  };

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

