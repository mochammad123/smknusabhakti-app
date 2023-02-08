import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WatchUs from "./../../../landing_page/assets/images/watchus.png";

const VideoPlay = ({ data }) => {
  const { title, video } = data;
  const [item, setItem] = useState("");
  const [titles, setTitles] = useState(title);
  const [videos, setVideos] = useState(video);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTitles(title);
    setVideos(video);
  }, [title, video]);

  return (
    <>
      <div className="card">
        <div className="card-head">
          <img src={WatchUs} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h1 className="line-clamp-1">{title}</h1>
        </div>
        <div className="">
          <button
            className="btn btn-success rounded-lg w-full"
            onClick={() => {
              setItem(item);
              setShowModal(true);
            }}
          >
            Tonton
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center h-full px-4 py-8 ">
              <div className="relative w-full h-full p-4 mx-auto bg-white rounded-md shadow-lg overflow-y-auto">
                <div
                  className="flex justify-end"
                  onClick={() => setShowModal(false)}
                >
                  <div className="cursor-pointer rounded-lg hover:bg-red-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 sm:flex">
                  <div className="mt-2 text-center sm:text-left w-full h-full">
                    <div className="flex justify-center lg:mr-20 lg:ml-20">
                      <iframe className="" src={videos} title={titles}></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default VideoPlay;
