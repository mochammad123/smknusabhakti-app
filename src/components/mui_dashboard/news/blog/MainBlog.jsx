import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination, Toolbar } from "@mui/material";
import AddBlog from "./AddBlog";
import TableListBlog from "./TableListBlog";
import useBlogApi from "../../../../apis/blogApi";

const MainBlog = () => {
  const { blogs, isLoading, error, getBlogs, getAllBlogs } = useBlogApi();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  let lastPage = 1;

  if (blogs != 0) {
    lastPage = blogs.data.last_page;
  }

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    getBlogs(page, keyword);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getBlogs(newPage, keyword);
  };

  useEffect(() => {
    getBlogs();
    getAllBlogs();
  }, []);

  return (
    <>
      <Toolbar />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 10 }}>
        <div className="mt-16">
          <AddBlog
            handleSubmitSearch={handleSubmitSearch}
            keyword={keyword}
            handleChangeKeyword={handleChangeKeyword}
          />
        </div>
        <Grid container>
          <TableListBlog />
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

export default MainBlog;
