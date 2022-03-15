import React, { useEffect, useState } from "react";
import Carrousel1 from "../commons/Carrousel1";
import Card from "../commons/Card";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/best")
      .then((res) => res.data)
      .then((res) => setBestSeller(res));
  }, []);

  return (
    <div>
      <Carrousel1 />
      <Typography
        variant="h4"
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      >
        Mas Vendidos
      </Typography>
      <Grid container spacing={5} wrap='wrap' sx={{display:'flex', justifyContent: 'center', marginTop: "1em" }}>
        {bestSeller.map((producto, i) => (
          <Grid item>
            <Card data={producto} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
