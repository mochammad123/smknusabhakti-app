import React, { useEffect, useState } from "react";
import Header from "../../components/templates/Header";
import "./../major/major.css";
import { Grid, Pagination, Stack } from "@mui/material";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";
import highSchoolApi from "../../../apis/highSchoolApi";
import ReactHtmlParser from "react-html-parser";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import dateFormat, { i18n } from "dateformat";

i18n.monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const News = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setSetKeyword] = useState("");
  const [item, setItem] = useState("");
  const {
    id,
    title: newTitle,
    image: newImage,
    body: newBody,
    created_at: newCreated_at,
  } = item;
  const [title, setTitle] = useState(newTitle);
  const [filePreview, setFilePreview] = useState(newImage);
  const [body, setBody] = useState(newBody);
  const [created_at, setCreated_at] = useState(newCreated_at);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTitle(newTitle);
    setFilePreview(newImage);
    setBody(newBody);
    setCreated_at(newCreated_at);
  }, [newTitle, newImage, newBody, newCreated_at]);

  // Get all data Blogs

  const fetchBlog = async () => {
    await highSchoolApi
      .get(`blogallnews`, {
        params: {
          page: page,
          search: keyword,
        },
      })
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchBlog();
  }, [page]);

  const handleChangeKeyword = (event) => {
    setSetKeyword(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    fetchBlog();
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
            <Header title="Berita" />
            <div className="flex justify-end mt-10">
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

            <div className="grid grid-cols-1 justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-16">
              {news.data?.map((item, index) => {
                const { id, title, image, body, created_at } = item;
                const subString = body.substring(0, 50);
                return (
                  <Card
                    sx={{ maxWidth: "100%" }}
                    key={index}
                    elevation={6}
                    className="cursor-pointer"
                  >
                    <CardMedia
                      sx={{ height: 200 }}
                      image={image}
                      title={title}
                      className="bg-gray-200"
                    />
                    <CardContent>
                      <div className="flex justify-end">
                        <Typography
                          gutterBottom
                          color="text.secondary"
                          variant="caption"
                          component="div"
                        >
                          {dateFormat(created_at, "d, mmmm yyyy")}
                        </Typography>
                      </div>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        className="line-clamp-1"
                        sx={{ fontWeight: 600 }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="line-clamp-2 text-black"
                        sx={{ mt: 2 }}
                      >
                        {ReactHtmlParser(body)}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ mt: 2 }}>
                      <Button
                        size="small"
                        fullWidth
                        onClick={() => {
                          setItem(item);
                          setShowModal(true);
                        }}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </div>
            <div className="flex justify-center mt-20">
              <Stack spacing={2}>
                <Pagination
                  count={news.last_page}
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
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center h-full">
              <div className="relative w-full h-full p-4 mx-auto bg-white rounded-md shadow-lg overflow-y-auto">
                <div
                  className="flex justify-end"
                  onClick={() => setShowModal(false)}
                >
                  <div className="cursor-pointer rounded-lg hover:bg-red-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 sm:flex">
                  <div className="mt-2 w-full ml-0 mr-0 lg:mr-5 lg:ml-5 md:mr-5 md:ml-5 mb-3">
                    <div className="flex justify-center">
                      <img
                        src={filePreview}
                        alt="Preview Img"
                        style={{ marginTop: "10px" }}
                        className="bg-gray-200 rounded-md"
                      />
                    </div>
                    <div className="flex justify-center mt-5">
                      <h2 className="font-bold text-gray-800 mb-2 text-lg lg:text-3xl md:text-2xl">
                        {title}
                      </h2>
                    </div>
                    <hr className="mb-8" />
                    <div className="flex justify-end">
                      <Typography
                        gutterBottom
                        color="text.secondary"
                        variant="body2"
                        component="div"
                      >
                        {dateFormat(created_at, "d, mmmm yyyy")}
                      </Typography>
                    </div>
                    <div className="text-gray-800 mb-2 text-sm lg:text-lg md:text-base">
                      {ReactHtmlParser(body)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default News;
