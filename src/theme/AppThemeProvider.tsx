import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState, type SetStateAction } from "react";
import { makeTheme } from "./Theme";
import React from "react";

export const ThemeContext = createContext({
  mode: "dark",
  setMode: React.Dispatch<SetStateAction<"dark" | "light">>,
});

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useMemo(() => makeTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
