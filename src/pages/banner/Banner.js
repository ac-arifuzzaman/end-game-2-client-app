import { Card, CardMedia } from "@mui/material";
import React from "react";
import img from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          style={{ width: "100%", marginTop: 5 }}
          image={img}
          alt="green iguana"
        />
      </Card>
    </div>
  );
};

export default Banner;
