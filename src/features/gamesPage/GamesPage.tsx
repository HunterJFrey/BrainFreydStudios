import {
  Box,
  Card,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import type React from "react";
import { FeaturedGameCard } from "../../components/GameCard/FeaturedGameCard";
import { GameCard } from "../../components/GameCard/GameCard";

export const GamesPage: React.FC = () => {
  return (
    <Box className="flex column mw-75" height="100%" width="100%" gap="1rem">
      {/* Featured Card */}
      <Box
        className="flex row w-100 justify-content-center"
        height="20rem"
        width="100%"
      >
        <FeaturedGameCard
          description={
            "Explore Cirrun, a continent steeped in a dark blood curse. Will you follow the path of the ancient gods, or forge your own fate?"
          }
          title={"Pyresong"}
        />
      </Box>
      {/* Tabs (All, Relesed, In Development, Prototypes) */}
      {/* Filtered game cards */}
      <Card
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={"All"}
          exclusive
          onChange={() => {}}
          aria-label="Platform"
        >
          <ToggleButton value="All">All</ToggleButton>
          <ToggleButton value="Released">Released</ToggleButton>
          <ToggleButton value="In Development">In Development</ToggleButton>
          <ToggleButton value="Prototypes">Prototypes</ToggleButton>
        </ToggleButtonGroup>
        {/* Grid of game cards */}
        <Grid container spacing={3}>
          <Grid key={"test"} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card sx={{ padding: "1rem" }}>
              <GameCard title={"Pyresong"} />
            </Card>
          </Grid>
          <Grid key={"test"} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <GameCard title={"Pyresong"} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default GamesPage;
