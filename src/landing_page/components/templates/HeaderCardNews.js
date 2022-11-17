import React from "react";

const HeaderCardNews = ({ data }) => {
  return (
    <>
      <div className="card" style={{ marginTop: 70 }}>
        <div className="card-head1">
          <img src={data.background} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h3>{data.date}</h3>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
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

export default HeaderCardNews;
