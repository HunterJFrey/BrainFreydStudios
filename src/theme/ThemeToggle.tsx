import { useContext } from "react";
import { ThemeContext } from "./AppThemeProvider";

export function ThemeToggle() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      style={{ marginLeft: 8 }}
    >
      {mode === "light" ? "🌙" : "☀️"}
    </button>
  );
}
