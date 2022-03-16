import { Grid, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import CardCarrito from "../commons/CardCarrito";
import ResumenCompra from "../commons/ResumenCompra";
import PaymentForm from "../commons/PaymentsForm";
import axios from "axios";

const Carrito2 = ({ data }) => {
  const [changuito, setChanguito] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products/best")
      .then((res) => res.data)
      .then((res) => setChanguito(res));
  }, []);

  return (
    <>
      <Typography
        sx={{ padding: 5, fontSize: 50 }}
        align='center'
        variant="h5"
        color="black"
        gutterBottom
      >
        Tu Carrito
      </Typography>
      <Grid container columnSpacing={2}>
        <Grid item direction="column" xs={6}>
          <Grid container rowSpacing={5} justifyContent="center">
            {changuito.map((producto, i) => (
              <Grid item>
                <CardCarrito data={producto} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item direction="column" xs={6}>
          <Grid container rowSpacing={5} justifyContent="center">
            <Grid item xs={11}>
              <ResumenCompra productosCart={changuito} />
            </Grid>
            <Grid item xs={8}>
              <PaymentForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Carrito2;
