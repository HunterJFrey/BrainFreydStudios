import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { AppThemeProvider } from "./theme/AppThemeProvider.tsx";
import "./global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </HashRouter>
  </StrictMode>
);
