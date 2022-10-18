import React, { useState } from "react";
import Header from "../../components/templates/Header";
import "./../major/major.css";
import newsData from "./../data/newsvideo.json";
import { Grid } from "@mui/material";
import VideoPlay from "../templates/VideoPlay";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const NewsVideo = () => {
  const [news, setNews] = useState(newsData);
  return (
    <>
      <Navbar />
      <div className="container wrapper2 flexSpaceCenter">
        <div className="row">
          <Header title="Berita Video" />

          <Grid container mt={4} direction="row" spacing={2}>
            {news.map((newsD, index) => (
              <Grid item xs={12} md={4}>
                <VideoPlay key={index} data={newsD} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsVideo;
