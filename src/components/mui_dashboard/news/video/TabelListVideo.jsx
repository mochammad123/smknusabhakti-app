import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";

const TabelListVideo = ({
  dataVideo,
  deleteVideoHandler,
  updateVideoHandler,
}) => {
  const [item, setItem] = useState("");
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const page = dataVideo.current_page;
  const perPage = dataVideo.per_page;
  let paginate = 0;

  if (page * perPage === 10) {
    paginate = 0;
  } else {
    paginate = page * perPage - 10;
  }

  const { id, title: newTitle, video: newVideo } = item;
  const [title, setTitle] = useState(newTitle);
  const [video, setVideo] = useState(newVideo);

  useEffect(() => {
    setTitle(newTitle);
    setVideo(newVideo);
  }, [newTitle, newVideo]);

  // close modal
  const handleCloseChange = (event) => {
    setShowModalUpdate(false);
    setTitle(newTitle);
    setVideo(newVideo);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await updateVideoHandler(id, title, video)
        .then((response) => {
          setIsLoading(false);
          setShowModalUpdate(false);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Opss...",
            text: error.response.data.message,
          });
          setIsLoading(false);
        });
    } catch (error) {}
  };

  return (
    <Grid container>
      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ paddingTop: 1, paddingBottom: 1, fontWeight: 600 }}
                width="15%"
              >
                #
              </TableCell>
              <TableCell
                sx={{ paddingTop: 1, paddingBottom: 1, fontWeight: 600 }}
                width="50%"
              >
                Title
              </TableCell>
              <TableCell
                sx={{ paddingTop: 1, paddingBottom: 1, fontWeight: 600 }}
                width="35%"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          {!dataVideo || dataVideo.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Data Not Found
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {dataVideo.data?.map((item, index) => {
                const { id, title } = item;
                return (
                  <TableRow
                    key={id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:hover": { background: "#EEEEEE" },
                    }}
                  >
                    <TableCell
                      sx={{ paddingTop: 1, paddingBottom: 1 }}
                      align="left"
                    >
                      {paginate + index + 1}
                    </TableCell>
                    <TableCell
                      sx={{ paddingTop: 1, paddingBottom: 1 }}
                      align="left"
                    >
                      {title}
                    </TableCell>
                    <TableCell
                      sx={{ paddingTop: 1, paddingBottom: 1 }}
                      align="left"
                    >
                      <button
                        className="btn btn-sm text-xs text-white rounded-full drop-shadow-2xl bg-sky-400 border-none hover:bg-sky-500 mr-4"
                        type="button"
                        onClick={() => {
                          setItem(item);
                          setShowModalUpdate(true);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm text-xs text-white rounded-full drop-shadow-2xl bg-red-400 border-none hover:bg-red-500"
                        type="button"
                        onClick={() => deleteVideoHandler(item.id)}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {showModalUpdate ? (
        <>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModalUpdate(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mt-2 text-center sm:text-left w-full">
                    <h4 className="text-lg font-medium text-gray-800 mb-5">
                      Update Video
                    </h4>
                    <hr className="mb-8" />
                    <form onSubmit={handleEdit}>
                      <p className="mt-2 mb-5 text-[15px] leading-relaxed text-gray-500">
                        title
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
                            onClick={handleCloseChange}
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
    </Grid>
  );
};

export default TabelListVideo;
