import React, { useState } from "react";
import Header from "../../components/templates/Header";
import "./../major/major.css";
import newsData from "./../data/news.json";
import newsHeaderData from "./../data/newsheader.json";
import CardNews from "../templates/CardNews";
import { Grid } from "@mui/material";
import HeaderCardNews from "../templates/HeaderCardNews";
import Footer from "../footer/Footer";
import NavbarMenu from "../nav/NavbarMenu";

const News = () => {
  const [news, setNews] = useState(newsData);
  const [newsHeader, setNewsHeader] = useState(newsHeaderData);
  return (
    <>
      <NavbarMenu />
      <div className="container wrapper2 flexSpaceCenter">
        <div className="row">
          <Header title="Berita" />

          {newsHeader.map((newsD, index) => (
            <HeaderCardNews key={index} data={newsD} />
          ))}

          <Grid container mt={4} direction="row" spacing={2}>
            {news.map((newsD, index) => (
              <Grid item xs={4}>
                <CardNews key={index} data={newsD} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
