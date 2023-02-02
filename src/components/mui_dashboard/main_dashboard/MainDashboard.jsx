import { Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import MiniStatisticsCard from "./MiniStatisticsCard";

const MainDashboard = () => {
  return (
    <>
      <Toolbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <MiniStatisticsCard />
        </Grid>
      </Container>
    </>
  );
};

export default MainDashboard;
