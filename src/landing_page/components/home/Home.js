import React from "react";
import "./../home/home.css";
import HomeWelcome from "../home_section/HomeWelcome";
import HomeProfile from "../home_section/HomeProfile";
import HomeMajor from "../home_section/HomeMajor";
import HomeNews from "../home_section/HomeNews";
import HomeCallMe from "../home_section/HomeCallMe";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <HomeWelcome />

        <HomeProfile />

        <HomeMajor />

        <HomeNews />

        <HomeCallMe />
      </div>
    </>
  );
};

export default Home;
