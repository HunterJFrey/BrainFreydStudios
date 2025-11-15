import type React from "react";
import type { GameCardProps } from "./GameCard";
import { Box, Button, Card, Typography } from "@mui/material";
import sampleGameImage from "../../assets/sampleGameImage.png";

interface FeaturedGameCardProps extends GameCardProps {
  description: string;
}

export const FeaturedGameCard: React.FC<FeaturedGameCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Card sx={{ padding: "1rem" }}>
      <Box className="flex row" sx={{ borderRadius: "0.5rem", gap: "1.5rem" }}>
        {/* Image */}
        <Box
          component="img"
          src={sampleGameImage}
          loading="lazy"
          alt={`${title} Game Cover`}
          sx={{
            width: "100%",
            height: "18rem",
            objectFit: "cover",
            display: "block",
            borderRadius: "0.5rem",
          }}
        />
        {/* InfoBox (Column) */}
        <Box className="flex column justify-content-between">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h5">{description}</Typography>
          <Button>Explore Game</Button>
        </Box>
      </Box>
    </Card>
  );
};
