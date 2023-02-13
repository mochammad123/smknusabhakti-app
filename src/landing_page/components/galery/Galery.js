import React, { useEffect, useState } from "react";
import Header from "../templates/Header";
import "./../major/major.css";
import { Grid, Pagination, Stack } from "@mui/material";
import CardGalery from "../templates/CardGalery";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";
import useGaleryApi from "../../../apis/galeryApi";

const Galery = () => {
  const { galeries, isLoading, error, getAllGaleries } = useGaleryApi();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  let lastPage = 1;

  if (galeries != 0) {
    lastPage = galeries.data.last_page;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    getAllGaleries(page, keyword);
  };

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getAllGaleries(newPage, keyword);
  };

  useEffect(() => {
    getAllGaleries();
  }, []);

  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <div className="container wrapper2 flexSpaceCenter text-black">
          <div className="row">
            <Header title="Galeri" />

            <div className="flex justify-center sm:justify-end mt-10">
              <button
                className="btn mr-5 bg-green-300 hover:bg-green-400 border-none"
                onClick={() => getAllGaleries()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
              <form onSubmit={handleSearch}>
                <div className="form-control">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search…"
                      className="input input-bordered input-info bg-white"
                      value={keyword}
                      onChange={handleChangeKeyword}
                    />
                    <button className="btn btn-square bg-sky-800 border-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {!galeries || galeries == 0 ? (
              <div className="flex justify-center mt-10">
                <p>Tidak Ada Galeri</p>
              </div>
            ) : galeries && galeries.data && galeries.data.data.length == 0 ? (
              <div className="flex justify-center mt-10">
                <p>Tidak Ada Galeri</p>
              </div>
            ) : (
              <Grid container mt={4} direction="row" spacing={2}>
                {galeries.data.data.map((galery, index) => (
                  <Grid item xs={12} md={4}>
                    <CardGalery key={index} data={galery} />
                  </Grid>
                ))}
              </Grid>
            )}

            <div className="flex justify-center mt-20">
              <Stack spacing={2}>
                <Pagination
                  count={lastPage}
                  page={page}
                  onChange={handleChangePage}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Galery;
