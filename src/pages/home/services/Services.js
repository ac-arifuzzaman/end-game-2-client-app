import { Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Service from "../service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("https://floating-gorge-61503.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2>this is services :: {services.length}</h2>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </Grid>
        </Box>
        <Button
          sx={{ background: "#0b142c", marginTop: 1 }}
          variant="contained"
        >
          More Product
        </Button>
      </Container>
    </div>
  );
};

export default Services;
