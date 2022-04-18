import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
function ThemeContextProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggleDark = useCallback(
    () => {
      setDark((prev) => !prev);
    },
    [],
  );

  const contextValue = useMemo(() => ({
    dark,
    toggleDark,
  }), [dark, toggleDark]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
