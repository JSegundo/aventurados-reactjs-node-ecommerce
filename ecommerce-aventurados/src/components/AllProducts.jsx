import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import axios from "axios";
import "../App.css";


const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => res.data)
      .then((res) => setAllProducts(res));
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={5}
        wrap="wrap"
        sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      >
        {allProducts.map((producto, i) => (
          <Grid item>
            <Card data={producto} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllProducts;