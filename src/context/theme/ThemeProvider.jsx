import React, { createContext, useContext, useState } from 'react';
import { THEMES } from '~/config';

const ThemeContext = createContext(null);

const Provider = ({ children }) => {
  const [theme, updateTheme] = useState(THEMES.light);

  const value = {
    theme,
    toggle: () =>
      updateTheme(theme === THEMES.light ? THEMES.dark : THEMES.light),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default Provider;
