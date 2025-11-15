import { Box, Button, Typography } from "@mui/material";
import fullLogo from "../../assets/fullLogo.png";
import blankPhoto from "../../assets/blankPhoto.png";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (pageRoute: string) => {
    navigate(pageRoute);
  };

  return (
    <Box className="flex column mw-75" height="100%" width="100%" gap="1.5rem">
      {/* Logo */}
      <Box className="flex row w-100 justify-content-center">
        <Box
          component="img"
          src={fullLogo}
          loading="lazy"
          alt={`BrainFreydStudios Logo`}
          sx={{
            height: "15rem",
            width: "60%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      {/* Studio Description */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      {/* Team */}
      <Box className="flex row w-100" marginTop="2rem">
        <Typography variant="h4">Meet the Team</Typography>
      </Box>
      <Box className="flex row">
        <Box className="flex column">
          {/* Avatar */}
          <Box
            component="img"
            src={blankPhoto}
            loading="lazy"
            alt={`Team member photo`}
            sx={{
              height: "10rem",
              objectFit: "cover",
              display: "block",
              borderRadius: "0.5rem",
            }}
          />
          {/* Name */}
          <Typography>Alec F</Typography>
          {/* Role */}
          <Typography>Founder</Typography>
        </Box>
      </Box>
      {/* CTA - Browse our Wares */}
      <Button
        sx={{ width: "50%", alignSelf: "center" }}
        onClick={() => handleLinkClick("/games")}
      >
        Browse Our Wares
      </Button>
    </Box>
  );
};

export default AboutPage;
