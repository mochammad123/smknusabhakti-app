import React, { useEffect, useState } from "react";
import useVideoApi from "../../../../apis/videoApi";

const AddVideo = ({ keyword, handleChangeKeyword, handleSearch }) => {
  const { isLoading, error, getVideos, getAllVideos, createVideo } =
    useVideoApi();
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCreate = async (event) => {
    event.preventDefault();
    await createVideo({ title, video })
      .then((response) => {
        setTitle("");
        setVideo("");
        setShowModal(false);
        getAllVideos();
        getVideos();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getVideos();
    getAllVideos();
  }, []);

  return (
    <div className="flex justify-end px-4">
      <div className="w-1/3">
        <div className="relative mx-auto text-gray-600 mr-10">
          <form onSubmit={handleSearch}>
            <input
              className="input input-bordered input-info input-md border-2 border-sky-500 w-full bg-white px-5 pr-16 rounded-lg text-sm"
              type="search"
              name="search"
              placeholder="Search"
              value={keyword}
              onChange={handleChangeKeyword}
            />
            <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div>
        <button
          className="btn btn-info mb-10 rounded-full drop-shadow-lg hover:bg-sky-50"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Video
        </button>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="mt-3 sm:flex">
                    <div className="mt-2 text-center sm:text-left w-full">
                      <h4 className="text-lg font-medium text-gray-800 mb-5">
                        Create Blog
                      </h4>
                      <hr className="mb-8" />
                      <form onSubmit={handleCreate}>
                        <p className="mt-2 mb-5 text-[15px] leading-relaxed text-gray-500">
                          Title
                        </p>
                        <input
                          type="text"
                          placeholder="Title"
                          className="input input-bordered w-full bg-white text-black mb-10"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <p className="mt-2 mb-5 text-[15px] leading-relaxed text-gray-500">
                          Link Video
                        </p>
                        <input
                          type="text"
                          placeholder="https://youtube/..."
                          className="input input-bordered w-full bg-white text-black mb-10"
                          value={video}
                          onChange={(e) => setVideo(e.target.value)}
                        />
                        {isLoading ? (
                          <button className="btn loading mt-3 w-full bg-gray-200 text-black">
                            loading
                          </button>
                        ) : (
                          <div className="items-center gap-2 mt-3 sm:flex">
                            <button className="w-full mt-2 p-2.5 flex-1 text-white bg-sky-600 rounded-md outline-none ring-offset-2 ring-sky-800 focus:ring-2">
                              Add
                            </button>
                            <button
                              className="w-full mt-2 p-2.5 text-red-700 flex-1 rounded-md outline-none border ring-offset-2 ring-red-700 focus:ring-2"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default AddVideo;
