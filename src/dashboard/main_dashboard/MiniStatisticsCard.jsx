import { Card, Avatar, CardHeader, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";

const MiniStatisticsCard = () => {
  return (
    <>
      <Grid item xs={12} md={4} lg={4}>
        <Card sx={{ display: "flex" }} elevation="6">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "#1A1A40",
                    borderRadius: "5px",
                    width: 56,
                    height: 56,
                  }}
                  aria-label="recipe"
                  variant="square"
                >
                  <AssessmentIcon fontSize="large" />
                </Avatar>
              }
              title="Berita"
              subheader="12 Postingan"
              titleTypographyProps={{
                sx: {
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#1A1A40",
                },
              }}
              subheaderTypographyProps={{
                sx: { fontFamily: "Poppins", fontSize: 12 },
              }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Card sx={{ display: "flex" }} elevation="6">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "#FF4C29",
                    borderRadius: "5px",
                    width: 56,
                    height: 56,
                  }}
                  aria-label="recipe"
                  variant="square"
                >
                  <AssessmentIcon fontSize="large" />
                </Avatar>
              }
              title="Berita Video"
              subheader="12 Postingan"
              titleTypographyProps={{
                sx: {
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#FF4C29",
                },
              }}
              subheaderTypographyProps={{
                sx: { fontFamily: "Poppins", fontSize: 12 },
              }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Card sx={{ display: "flex" }} elevation="6">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "#29C7AC",
                    borderRadius: "5px",
                    width: 56,
                    height: 56,
                  }}
                  aria-label="recipe"
                  variant="square"
                >
                  <AssessmentIcon fontSize="large" />
                </Avatar>
              }
              title="Galeri"
              subheader="12 Postingan"
              titleTypographyProps={{
                sx: {
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: 24,
                  color: "#29C7AC",
                },
              }}
              subheaderTypographyProps={{
                sx: { fontFamily: "Poppins", fontSize: 12 },
              }}
            />
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default MiniStatisticsCard;
