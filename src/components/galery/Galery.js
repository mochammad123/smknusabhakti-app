import React, { useState } from "react";
import Header from "../templates/Header";
import "./../major/major.css";
import newsData from "../data/galery.json";
import { Grid } from "@mui/material";
import CardGalery from "../templates/CardGalery";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Galery = () => {
  const [news, setNews] = useState(newsData);
  return (
    <>
      <Navbar />
      <div className="container wrapper2 flexSpaceCenter">
        <div className="row">
          <Header title="Galeri" />

          <Grid container mt={4} direction="row" spacing={2}>
            {news.map((newsD, index) => (
              <Grid item xs={4}>
                <CardGalery key={index} data={newsD} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Galery;
