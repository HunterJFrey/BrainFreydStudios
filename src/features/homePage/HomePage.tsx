import { Box, Typography } from "@mui/material";
import type React from "react";
import { GameCard } from "../../components/GameCard/GameCard";

export const HomePage: React.FC = () => {
  return (
    <Box className="flex column mw-75 gap-4">
      {/* Headline */}
      <Box className="flex column w-100 align-items-center gap-1">
        <Typography variant="h3">CRAFTING ENCHANTING WORLDS</Typography>
        <Typography variant="subtitle1">
          BrainFreydStudios is an indie studio focused on creating captivating
          and imaginative worlds.
        </Typography>
      </Box>
      {/* Our Games */}
      <Box className="flex column w-100 align-items-center gap-1">
        <Typography variant="h3">OUR GAMES</Typography>
        <Box className="flex row gap-4">
          {/* Game One */}
          <GameCard title="TEst" image="sampleGameImage.png" />
          {/* Game Two */}
          <Box className="flex column justify-content-center">
            {/* Image */}
            <Box
              sx={{
                height: "10rem",
                backgroundColor: "darkgrey",
                borderRadius: "0.5rem",
              }}
            ></Box>
            {/* Title */}
            <Typography variant="h4">Title One</Typography>
          </Box>
          {/* Game Three */}
          <Box className="flex column justify-content-center">
            {/* Image */}
            <Box
              sx={{
                height: "10rem",
                backgroundColor: "darkgrey",
                borderRadius: "0.5rem",
              }}
            ></Box>
            {/* Title */}
            <Typography variant="h4">Title One</Typography>
          </Box>
          {/* Game Four */}
          <Box className="flex column justify-content-center">
            {/* Image */}
            <Box
              sx={{
                height: "10rem",
                backgroundColor: "darkgrey",
                borderRadius: "0.5rem",
              }}
            ></Box>
            {/* Title */}
            <Typography variant="h4">Title One</Typography>
          </Box>
        </Box>
      </Box>
      {/* Contact */}
      <Box className="flex column w-100 align-items-center gap-1">
        <Typography variant="h3">CONTACT</Typography>
        <Typography variant="subtitle1">brainfreydstudios@gmail.com</Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
