import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination, Toolbar } from "@mui/material";
import Swal from "sweetalert2";
import AddGalery from "./AddGalery";
import highSchoolApi from "../../../apis/highSchoolApi";
import TableListGaleries from "./TableListGaleries";
import useGaleryApi from "../../../apis/galeryApi";

const MainGaleries = () => {
  const { galeries, isLoading, error, getGaleries, getAllGaleries } =
    useGaleryApi();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  let lastPage = 1;

  if (galeries != 0) {
    lastPage = galeries.data.last_page;
  }

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    getGaleries(page, keyword);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getGaleries(newPage, keyword);
  };

  useEffect(() => {
    getGaleries();
    getAllGaleries();
  }, []);

  return (
    <>
      <Toolbar />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 10 }}>
        <div className="mt-16">
          <AddGalery
            handleSubmitSearch={handleSubmitSearch}
            keyword={keyword}
            handleChangeKeyword={handleChangeKeyword}
          />
        </div>
        <Grid container>
          <TableListGaleries />
        </Grid>
        <div className="flex justify-center px-4">
          <Pagination
            sx={{ mt: 2 }}
            count={lastPage}
            page={page}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            variant="outlined"
            color="primary"
          />
        </div>
      </Container>
    </>
  );
};

export default MainGaleries;
