import React from "react";
import "./aboutMe.css";
import BackgroundImage from "./../../assets/images/background-1.png";
import ImageBackground from "./../../assets/images/15.png";

const AboutMe = ({ title, paragraph }) => {
  return (
    <>
      <div className="container wrapper2 flexSpaceCenter">
        <div className="row">
          <div className="card-item">
            <div className="card-main">
              <div className="card-image">
                <img src={BackgroundImage} alt="" className="card-img" />
              </div>
            </div>
            <div className="flexCenter">
              <div className="card-body2 flexCenter">
                <div className="card-title">
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="card-item2">
            <div className="leftSide">
              <div className="imageWrapper">
                <div className="card-main" style={{ height: "auto" }}>
                  <div className="card-image">
                    <img src={ImageBackground} alt="" className="card-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide flexCenter">
              <div className="card-main2">
                <div
                  className="headerHome"
                  style={{ textAlign: "justify", marginTop: "20px" }}
                >
                  <p style={{ textIndent: "45px" }}>{paragraph}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
