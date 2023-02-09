import React, { useEffect, useState } from "react";
import Header from "../templates/Header";
import "./../major/major.css";
import newsData from "../data/galery.json";
import { Grid, Pagination, Stack } from "@mui/material";
import CardGalery from "../templates/CardGalery";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";
import highSchoolApi from "../../../apis/highSchoolApi";

const Galery = () => {
  const [galeries, setGaleries] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setSetKeyword] = useState("");

  // Get all data Galery
  const fetchGalery = async () => {
    await highSchoolApi
      .get(`galeryallnews`, {
        params: {
          page: page,
          search: keyword,
        },
      })
      .then((response) => {
        setGaleries(response.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchGalery();
  }, [page]);

  const handleChangeKeyword = (event) => {
    setSetKeyword(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    fetchGalery();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <div className="container wrapper2 flexSpaceCenter text-black">
          <div className="row">
            <Header title="Galeri" />

            <div className="flex justify-center sm:justify-end mt-10">
              <form onSubmit={handleSubmitSearch}>
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

            <Grid container mt={4} direction="row" spacing={2}>
              {galeries.data?.map((galery, index) => (
                <Grid item xs={12} md={4}>
                  <CardGalery key={index} data={galery} />
                </Grid>
              ))}
            </Grid>

            <div className="flex justify-center mt-20">
              <Stack spacing={2}>
                <Pagination
                  count={galeries.last_page}
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
