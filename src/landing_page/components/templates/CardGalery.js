import React from "react";
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
  const { id, title, image, created_at } = data;
  return (
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
    </Card>
  );
};

export default CardGalery;
