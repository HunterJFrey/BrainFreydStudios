import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import type React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { ThemeToggle } from "../../theme/ThemeToggle";

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
        <Typography
          variant="h6"
          className="navbar-link"
          component="div"
          onClick={() => handleLinkClick("/")}
        >
          Icon
        </Typography>
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
