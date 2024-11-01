// components/ThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextProps {
  isWarmTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isWarmTheme, setIsWarmTheme] = useState(false);
  const toggleTheme = () => setIsWarmTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isWarmTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
