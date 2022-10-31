import React from "react";

const CardGalery = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-head">
          <img src={data.background} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h3>{data.date}</h3>
          <h1>{data.title}</h1>
        </div>
      </div>
    </>
  );
};

export default CardGalery;
