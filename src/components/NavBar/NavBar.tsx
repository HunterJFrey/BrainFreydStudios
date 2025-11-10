import { AppBar, Box, Button, Toolbar } from "@mui/material";
import type React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { ThemeToggle } from "../../theme/ThemeToggle";
import fullLogo from "../../assets/fullLogo.png";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (pageRoute: string) => {
    navigate(pageRoute);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      style={{ borderRadius: 0, border: 0 }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Icon */}
        <Box
          component="img"
          src={fullLogo}
          loading="lazy"
          alt={`BrainFreydStudios Logo`}
          onClick={() => handleLinkClick("/")}
          sx={{
            width: "10rem",
            height: "3rem",
            objectFit: "cover",
            display: "block",
            cursor: "pointer",
          }}
        />
        {/* Nav Links */}
        <Box style={{ display: "flex", gap: "1.5rem" }}>
          <Button onClick={() => handleLinkClick("/games")}>Games</Button>
          <Button onClick={() => handleLinkClick("/about")}>About</Button>
          <Button onClick={() => handleLinkClick("/contact")}>Contact</Button>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
