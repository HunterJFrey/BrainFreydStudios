import { Box, Button, Typography } from "@mui/material";
import sampleGameImage from "../../assets/sampleGameImage.png";

export interface GameCardProps {
  title: string;
  image?: string;
}

export const GameCard: React.FC<GameCardProps> = ({ title }) => {
  return (
    <Box className="flex column justify-content-center">
      {/* Image */}
      <Box
        sx={{
          overflow: "hidden",
          height: "10rem",
          backgroundColor: "darkgrey",
          borderRadius: "0.5rem",
        }}
      >
        <Box
          component="img"
          src={sampleGameImage}
          loading="lazy"
          alt={`${title} Game Cover`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      {/* Title */}
      <Typography variant="h4">{title}</Typography>
      {/* Tagline/Genre */}
      {/* View Details */}
      <Button>VIEW DETAILS</Button>
    </Box>
  );
};
