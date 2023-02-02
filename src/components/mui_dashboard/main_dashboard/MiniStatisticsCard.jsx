import { Card, Avatar, CardHeader, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AssessmentIcon from "@mui/icons-material/Assessment";
import highSchoolApi from "../../../apis/highSchoolApi";

const MiniStatisticsCard = () => {
  const [dataBlog, setDataBlog] = useState("");
  const [dataVideo, setDataVideo] = useState("");
  const [dataGalery, setDataGalery] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchBlogs();
    fetchVideos();
    fetchGaleries();
  }, []);

  // Get all data Videos
  const fetchBlogs = async () => {
    await highSchoolApi
      .get(`blognews`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataBlog(response.data.data);
      })
      .catch((error) => {});
  };

  // Get all data Videos
  const fetchVideos = async () => {
    await highSchoolApi
      .get(`videonews`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataVideo(response.data.data);
      })
      .catch((error) => {});
  };

  // Get all data Videos
  const fetchGaleries = async () => {
    await highSchoolApi
      .get(`galery`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataGalery(response.data.data);
      })
      .catch((error) => {});
  };

  return (
    <>
      <Grid item xs={12} md={4} lg={4}>
        <Card sx={{ display: "flex" }} elevation={6}>
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
              subheader={`${dataBlog.length} Postingan`}
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
        <Card sx={{ display: "flex" }} elevation={6}>
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
              subheader={`${dataVideo.length} Postingan`}
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
        <Card sx={{ display: "flex" }} elevation={6}>
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
              subheader={`${dataGalery.length} Postingan`}
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
