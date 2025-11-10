/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { makeTheme } from "./Theme";

export const ThemeContext = createContext<{
  mode: "dark" | "light";
  setMode: Dispatch<SetStateAction<"dark" | "light">>;
}>({
  mode: "dark",
  setMode: () => {}, // default no-op
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
