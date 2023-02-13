import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import useGaleryApi from "../../../apis/galeryApi";

const TableListGaleries = () => {
  const {
    galeries,
    isLoading,
    error,
    getGaleries,
    getAllGaleries,
    deleteGalery,
    updateGalery,
  } = useGaleryApi();
  const [item, setItem] = useState("");
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  let page = 0;
  let perPage = 0;
  let paginate = 0;

  const { id, title: newTitle, image: newImage } = item;
  const [title, setTitle] = useState(newTitle);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [filePreview, setFilePreview] = useState(newImage);

  useEffect(() => {
    setTitle(newTitle);
    setFilePreview(newImage);

    if (galeries != 0) {
      page = galeries.data.current_page;
      perPage = galeries.data.per_page;
    }

    if (page * perPage === 10) {
      paginate = 0;
    } else {
      paginate = page * perPage - 10;
    }
  }, [newTitle, newImage]);

  useEffect(() => {
    getGaleries();
    getAllGaleries();
  }, []);

  // Handle change image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // close modal
  const handleCloseChange = (event) => {
    setShowModalUpdate(false);
    setTitle(newTitle);
    setImage("");
    setPreview("");
  };

  // update data blog
  const updateGaleryHandler = async (id, title, image) => {
    const filtered = galeries.data.data
      .filter((galeries) => galeries.id === id)
      .map((galeries) => ({
        title: title,
        image: image,
      }));

    await updateGalery(id, filtered[0]).then((response) => {
      setShowModalUpdate(false);
      getAllGaleries();
      getGaleries();
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = async () => {
        try {
          const base64 = reader.result.split(",")[1];
          await updateGaleryHandler(id, title, base64);
        } catch (error) {}
      };
    } else {
      try {
        await updateGaleryHandler(id, title);
      } catch (error) {}
    }
  };

  // delete video
  const deleteGaleryHandler = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await deleteGalery(id).then((response) => {
      getGaleries();
      getAllGaleries();
    });
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
          {!galeries || galeries == 0 ? (
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Data Not Found
                </TableCell>
              </TableRow>
            </TableBody>
          ) : galeries && galeries.data && galeries.data.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Data Not Found
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {galeries.data.data.map((item, index) => {
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
                        onClick={() => deleteGaleryHandler(item.id)}
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
                      Update Galery
                    </h4>
                    <hr className="mb-8" />
                    <form onSubmit={handleEdit}>
                      <p className="mt-2 mb-5 text-[15px] leading-relaxed text-gray-500">
                        Title
                      </p>
                      <input
                        type="text"
                        placeholder="Category Name"
                        className="input input-bordered w-full bg-white text-black mb-10"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <p className="mt-2 mb-2 text-[15px] leading-relaxed text-gray-500">
                        Image
                      </p>
                      {preview ? (
                        <>
                          <div className="flex justify-center">
                            <img
                              src={preview}
                              alt="Preview Img"
                              style={{ width: 100, marginTop: "10px" }}
                              className="bg-gray-200 rounded-md"
                            />
                          </div>
                          <div className="flex justify-center">
                            <Typography sx={{ marginBottom: "10px" }}>
                              Preview
                            </Typography>
                          </div>
                        </>
                      ) : filePreview ? (
                        <>
                          <div className="flex justify-center">
                            <img
                              src={filePreview}
                              alt="Preview Img"
                              style={{ width: 100, marginTop: "10px" }}
                              className="bg-gray-200 rounded-md"
                            />
                          </div>
                          <div className="flex justify-center">
                            <Typography sx={{ marginBottom: "10px" }}>
                              Preview
                            </Typography>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="file-input file-input-bordered border-gray-400 file-input-md bg-white w-full hover:border-black"
                        onChange={handleImageChange}
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

export default TableListGaleries;
