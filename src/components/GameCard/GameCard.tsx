import { Box, Typography } from "@mui/material";

interface GameCardProps {
  title: string;
  image: string;
}

export const GameCard: React.FC<GameCardProps> = ({ title, image }) => {
  return (
    <Box className="flex column justify-content-center">
      {/* Image */}
      <Box
        sx={{
          aspectRatio: "16/9",
          overflow: "hidden",
          height: "10rem",
          backgroundColor: "darkgrey",
          borderRadius: "0.5rem",
        }}
      >
        <Box
          component="img"
          src={`src/assets/${image}`}
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
    </Box>
  );
};
