import { createContext, PropsWithChildren, useContext, useState } from "react";

// ***************** Available Themes ******************* //

export const THEMES = {
  DARK: "dark" as const,
  LIGHT: "light" as const,
};

// ***************** Establish Types ******************* //

type ValueOf<T> = T[keyof T];

type Themes = ValueOf<typeof THEMES>;

type ThemeContext = {
  THEMES: typeof THEMES;
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

// ***************** Create Context ******************* //

export const ThemeContext = createContext<ThemeContext>({
  theme: THEMES.LIGHT,
  setTheme: () => {},
  THEMES,
});

// ***************** Custom Provider ******************* //

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Themes>(THEMES.LIGHT);

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        theme,
        THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// ***************** Context Hooks ******************* //

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
