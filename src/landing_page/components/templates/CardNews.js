import React from "react";

const CardNews = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-head">
          <img src={data.data.image} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h3>{data.data.created_at}</h3>
          <h1>{data.data.title}</h1>
          <p>{data.data.body}</p>
          <div className="card-footer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#303030"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNews;
