import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";


const Fav = () => {
  // const [favoritos, setFavoritos] = useState([]);

  const dataFavorites = useSelector(state => state.dataFavorites)

 console.log(dataFavorites);

  return (
    <div>
      <Typography
        variant="h4"
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      >
        Favoritos
      </Typography>
      <Grid container spacing={5} wrap='wrap' sx={{display:'flex', justifyContent: 'center', marginTop: "1em" }}>
        { dataFavorites ? dataFavorites.map((producto, i) => (
          <Grid item>
            <Card data={producto.product} />
          </Grid>
        )) : <h1>No hay favoritos...</h1> }
      </Grid>
    </div>
  );
};

export default Fav;
