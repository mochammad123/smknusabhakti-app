import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination, Toolbar } from "@mui/material";
import Swal from "sweetalert2";
import AddGalery from "./AddGalery";
import highSchoolApi from "../../../apis/highSchoolApi";
import TableListGaleries from "./TableListGaleries";

const MainGaleries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState([]);
  const [dataGalery, setDataGalery] = useState([]);
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
    fetchGaleries();
  }, [page]);

  // Get all data Blogs
  const fetchGaleries = async () => {
    setIsLoading(true);
    await highSchoolApi
      .get(`galeries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: page,
          search: keyword,
        },
      })
      .then((response) => {
        setDataGalery(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setValidation(error);
      });
  };

  const handleChangeKeyword = (event) => {
    setSetKeyword(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    fetchGaleries();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //   Add data blog
  const addGaleryHandler = async (dataGalery) => {
    await highSchoolApi
      .post("galery", dataGalery, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} added successfully`,
        });
        fetchGaleries();
      });
  };

  // Delete Data Blog
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

    await highSchoolApi
      .delete(`galery/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        fetchGaleries();
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} success deleted!`,
        });
      });
  };

  // update data blog
  const updateGaleryHandler = async (id, title, image) => {
    const filtered = dataGalery.data
      .filter((galery) => galery.id === id)
      .map((galery) => ({
        title: title,
        image: image,
      }));

    await highSchoolApi
      .post(`galery/${id}`, filtered[0], {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: `${response.data.data.title} updated successfully`,
        });
        fetchGaleries();
      });
  };

  return (
    <>
      <Toolbar />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 10 }}>
        <div className="mt-16">
          <AddGalery
            addGaleryHandler={addGaleryHandler}
            handleSubmitSearch={handleSubmitSearch}
            keyword={keyword}
            handleChangeKeyword={handleChangeKeyword}
          />
        </div>
        <Grid container>
          <TableListGaleries
            dataGalery={dataGalery}
            deleteGaleryHandler={deleteGaleryHandler}
            updateGaleryHandler={updateGaleryHandler}
          />
        </Grid>
        <div className="flex justify-center px-4">
          <Pagination
            sx={{ mt: 2 }}
            count={dataGalery.last_page}
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
