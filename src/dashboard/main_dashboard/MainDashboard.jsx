import { Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import Chart from "../Chart";
import Deposits from "../Deposits";
import Orders from "../Orders";
import MiniStatisticsCard from "./MiniStatisticsCard";

const MainDashboard = () => {
  return (
    <>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <MiniStatisticsCard />
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainDashboard;
