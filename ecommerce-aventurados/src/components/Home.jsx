import React, { useEffect, useState } from "react";
import Carrousel1 from "../commons/Carrousel1";
import Card from "../commons/Card";
import Grid from "@mui/material/Grid";
import { Container, Typography, Button } from "@mui/material";
import axios from "axios";
import "../App.css";

const Home = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/best")
      .then((res) => res.data)
      .then((res) => setBestSeller(res));
  }, []);

  return (
    <>
      {/* <h1 className="mainTitle">
        Some People Excel At AVENTURADOS And Some Don't - Which One Are You?
      </h1> */}

      <div className="slide">
        <Carrousel1 />
        {/* <Button>IR A CATEGORIA</Button> */}
      </div>
      <h1 className="mainTitle">AVENTURADOS</h1>
      <div className="container">
        <div className="back-img">
          <Typography
            variant="h4"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "0.5em",
              color: "white",
            }}
          >
            Mas Vendidos
          </Typography>
        </div>
      </div>
      <Grid
        container
        spacing={5}
        wrap="wrap"
        sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      >
        {bestSeller.map((producto, i) => (
          <Grid item>
            <Card data={producto} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
