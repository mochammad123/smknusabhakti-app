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
      <div className="mt-0 lg:mt-20 md:mt-10">
        <div className="card bg-white drop-shadow-2xl">
          <figure className="w-full h-60 overflow-hidden">
            <img src={WatchUs} alt="" className="card-img" />
          </figure>
          <div className="card-body">
            <h2 className="line-clamp-1 text-lg font-bold mt-5">{title}</h2>
            <div className="card-actions">
              <button
                className="btn bg-sky-900 rounded-lg w-full border-none text-white hover:bg-sky-800 mt-10"
                onClick={() => {
                  setItem(item);
                  setShowModal(true);
                }}
              >
                Watching
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen lg:h-full px-4 py-8 ">
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
