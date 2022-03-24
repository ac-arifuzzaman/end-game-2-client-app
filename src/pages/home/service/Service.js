import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const Service = ({ service }) => {
  const { name, price, quantity } = service;
  return (
    // <div>
    //   <Grid item xs={2} sm={4} md={6}>
    //     <Grid item xs={2} sm={4} md={12}>
    //       <h2>this is service {name}</h2>
    //     </Grid>
    //   </Grid>
    // </div>
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <p>
              <small>{price}</small>
            </p>
            <p>
              <small>{quantity}</small>
            </p>
          </CardContent>
          {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </Grid>
    </>
  );
};

export default Service;
