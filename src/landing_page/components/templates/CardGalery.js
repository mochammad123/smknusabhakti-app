import React, { useEffect, useState } from "react";
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

const CardGalery = ({ data }) => {
  const { title, image, created_at } = data;
  const [item, setItem] = useState("");
  const [titles, setTitles] = useState(title);
  const [images, setImages] = useState(image);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTitles(title);
    setImages(image);
  }, [title, image]);
  console.log(images);

  return (
    <>
      <Card sx={{ maxWidth: "100%" }} elevation={6} className="cursor-pointer">
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
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center h-full px-4 py-8 ">
              <div className="relative w-full h-full p-4 mx-auto bg-white rounded-md shadow-lg overflow-y-auto ">
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

                <div className="mt-3">
                  <div className="mt-2 text-center">
                    <div className="flex justify-center">
                      <img
                        src={images}
                        alt={titles}
                        style={{ marginTop: "10px" }}
                        className="bg-gray-200 rounded-md"
                      />
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

export default CardGalery;
