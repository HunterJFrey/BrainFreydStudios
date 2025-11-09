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
          Indie games served hot from the frying pan of imagination!
        </Typography>
      </Box>
      {/* Our Games */}
      <Box className="flex column w-100 align-items-center gap-1">
        <Typography variant="h3">OUR GAMES</Typography>
        <Box className="flex row gap-4">
          {/* Game One */}
          <GameCard title="Pyresong" image="sampleGameImage.png" />
        </Box>
      </Box>
      {/* About Us */}
      <Box className="flex column w-100 align-items-center gap-1">
        <Typography variant="h3">ABOUT US</Typography>
        <Typography variant="subtitle1">
          BrainFreydStudios is a small team of developers, storywriters, and
          gamers based in the US. We craft and conjure games that we would want
          to play, and hope you will too!
        </Typography>
      </Box>
      {/* Contact */}
      <Box className="flex column w-100 align-items-center gap-1">
        <Typography variant="h3">CONTACT</Typography>
        <Typography variant="subtitle1">
          Got a wild idea, collaboration request, or just want to say hello?
        </Typography>
        <Typography variant="subtitle1">
          Send a raven:{" "}
          <a href="mailto:brainfreydstudios@gmail.com">
            brainfreydstudios@gmail.com
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
