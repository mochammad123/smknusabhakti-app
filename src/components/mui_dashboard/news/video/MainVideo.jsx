import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination, Toolbar } from "@mui/material";
import AddVideo from "./AddVideo";
import TabelListVideo from "./TabelListVideo";
import useVideoApi from "../../../../apis/videoApi";
import NewsVideo from "../../../../landing_page/components/news/NewsVideo";

const MainVideo = () => {
  const { videos, isLoading, error, getVideos, getAllVideos } = useVideoApi();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  let lastPage = 1;

  if (videos != 0) {
    lastPage = videos.data.last_page;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    getVideos(page, keyword);
  };

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getVideos(newPage, keyword);
  };

  useEffect(() => {
    getVideos();
    getAllVideos();
  }, []);

  return (
    <>
      <Toolbar />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 10 }}>
        <div className="mt-16">
          <AddVideo
            handleSearch={handleSearch}
            keyword={keyword}
            handleChangeKeyword={handleChangeKeyword}
          />
        </div>
        <Grid container>
          <TabelListVideo />
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

export default MainVideo;
