import React, { useState } from "react";
import "./../home/home.css";
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

const HomeNews = () => {
  const [news, setNews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Get all data Blogs

  const fetchBlog = async () => {
    await highSchoolApi
      .get(`blogallnews`)
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((error) => {});
  };

  useState(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <section className="container2 wrapper2 text-black">
        <div className="extraBold font60 title-name">
          <h1>Berita</h1>
        </div>
        <div className="grid grid-cols-1 justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
          {news.data?.slice(0, 3).map((item, index) => {
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
                    onClick={() => setShowModal(true)}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="mt-3 sm:flex">
                    <div className="mt-2 text-center sm:text-left w-full">
                      <h4 className="text-lg font-medium text-gray-800 mb-5">
                        Create Blog
                      </h4>
                      <hr className="mb-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};

export default HomeNews;
