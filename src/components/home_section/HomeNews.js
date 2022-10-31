import React, { useState } from "react";
import "./../home/home.css";
import CardNews from "../templates/CardNews";
import newsData from "./../data/news.json";

const HomeNews = () => {
  const [news, setNews] = useState(newsData);

  return (
    <>
      <section className="container2 wrapper2">
        <div className="extraBold font60 title-name">
          <h1>Berita</h1>
        </div>
        <div className="card-grid">
          {news.map((newsD, index) => (
            <CardNews key={index} data={newsD} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeNews;
