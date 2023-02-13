import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination, Toolbar } from "@mui/material";
import Swal from "sweetalert2";
import highSchoolApi from "../../../../apis/highSchoolApi";
import AddVideo from "./AddVideo";
import TabelListVideo from "./TabelListVideo";
import useVideoApi from "../../../../apis/videoApi";

const MainVideo = () => {
  const { videos, isLoading, error, getVideos } = useVideoApi();
  const [isLoadings, setIsLoadings] = useState(false);
  const [validation, setValidation] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setSetKeyword] = useState("");

  const token = localStorage.getItem("token");
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  useEffect(() => {
    fetchVideo();
    getVideos();
  }, [page, getVideos]);

  // Get all data Videos
  const fetchVideo = async () => {
    setIsLoadings(true);
    await highSchoolApi
      .get(`videonew`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          search: keyword,
        },
      })
      .then((response) => {
        setDataVideo(response.data.data);
        setIsLoadings(false);
      })
      .catch((error) => {
        setValidation(error);
      });
  };

  //   Add data video
  const addVideoHandler = async (dataVideo) => {
    await highSchoolApi
      .post("videonews", dataVideo, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} added successfully`,
        });
        fetchVideo();
      });
  };

  const handleChangeKeyword = (event) => {
    setSetKeyword(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    fetchVideo();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Delete Data Blog
  const deleteVideoHandler = async (id) => {
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

    await highSchoolApi
      .delete(`videonews/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        fetchVideo();
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} success deleted!`,
        });
      });
  };

  // update data blog
  const updateVideoHandler = async (id, title, video) => {
    const filtered = dataVideo.data
      .filter((videos) => videos.id === id)
      .map((videos) => ({
        title: title,
        video: video,
      }));

    await highSchoolApi
      .post(`videonews/${id}`, filtered[0], {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} added successfully`,
        });
        fetchVideo();
      });
  };

  console.log(videos);

  return (
    <>
      <Toolbar />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 10 }}>
        <div className="mt-16">
          <AddVideo
            addVideoHandler={addVideoHandler}
            handleSubmitSearch={handleSubmitSearch}
            keyword={keyword}
            handleChangeKeyword={handleChangeKeyword}
          />
        </div>
        <Grid container>
          <TabelListVideo
            dataVideo={dataVideo}
            deleteVideoHandler={deleteVideoHandler}
            updateVideoHandler={updateVideoHandler}
          />
        </Grid>
        <div className="flex justify-center px-4">
          <Pagination
            sx={{ mt: 2 }}
            count={dataVideo.last_page}
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
