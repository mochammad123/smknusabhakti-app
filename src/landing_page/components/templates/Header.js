import React from "react";
import BackgroundImage from "./../../assets/images/background-1.png";

const Header = ({ title }) => {
  return (
    <>
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
    </>
  );
};

export default Header;
