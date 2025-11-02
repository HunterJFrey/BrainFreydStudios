import { Box, Container } from "@mui/material";
import React from "react";
import { NavBar } from "./NavBar/NavBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <NavBar />

      <Box
        component="main"
        sx={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Container sx={{ py: 2, flex: 1 }}>{children}</Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
