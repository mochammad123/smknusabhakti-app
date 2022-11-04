import React from "react";

const VideoPlay = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-head">
          <iframe
            className="our-videos"
            style={{ maxHeight: "50vh" }}
            src={data.video}
            title={data.title}
          />
        </div>
        <div className="card-body">
          <h1>{data.title}</h1>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
