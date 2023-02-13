import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination, Toolbar } from "@mui/material";
import Swal from "sweetalert2";
import AddBlog from "./AddBlog";
import highSchoolApi from "../../../../apis/highSchoolApi";
import TableListBlog from "./TableListBlog";

const MainBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState([]);
  const [dataBlog, setDataBlog] = useState([]);
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
    fetchBlogs();
  }, [page]);

  // Get all data Blogs
  const fetchBlogs = async () => {
    setIsLoading(true);
    await highSchoolApi
      .get(`blognew`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          search: keyword,
        },
      })
      .then((response) => {
        setDataBlog(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setValidation(error);
      });
  };

  //   Add data blog
  const addBlogHandler = async (dataBlog) => {
    await highSchoolApi
      .post("blognews", dataBlog, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} added successfully`,
        });
        fetchBlogs();
      });
  };

  const handleChangeKeyword = (event) => {
    setSetKeyword(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    fetchBlogs();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Delete Data Blog
  const deleteBlogHandler = async (id) => {
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
      .delete(`blognews/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        fetchBlogs();
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} success deleted!`,
        });
      });
  };

  // update data blog
  const updateBlogHandler = async (id, title, body, image) => {
    const filtered = dataBlog.data
      .filter((blog) => blog.id === id)
      .map((blog) => ({
        title: title,
        body: body,
        image: image,
      }));

    await highSchoolApi
      .post(`blognews/${id}`, filtered[0], {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} added successfully`,
        });
        fetchBlogs();
      });
  };

  return (
    <>
      <Toolbar />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 10 }}>
        <div className="mt-16">
          <AddBlog
            addBlogHandler={addBlogHandler}
            handleSubmitSearch={handleSubmitSearch}
            keyword={keyword}
            handleChangeKeyword={handleChangeKeyword}
          />
        </div>
        <Grid container>
          <TableListBlog
            dataBlog={dataBlog}
            deleteBlogHandler={deleteBlogHandler}
            updateBlogHandler={updateBlogHandler}
          />
        </Grid>
        <div className="flex justify-center px-4">
          <Pagination
            sx={{ mt: 2 }}
            count={dataBlog.last_page}
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
