import React from "react";

const VideoPlay = ({ data }) => {
  const { id, title, video } = data;
  return (
    <>
      <div className="card">
        <div className="card-head">
          <iframe
            className="our-videos"
            style={{ maxHeight: "50vh" }}
            src={video}
            title={title}
          ></iframe>
        </div>

        <div className="card-body">
          <h1 className="line-clamp-1">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
