import { Grid, Typography } from "@mui/material";
import { React, useState, useEffect } from "react";
import CardCarrito from "../commons/CardCarrito";
import ResumenCompra from "../commons/ResumenCompra";
import PaymentForm from "../commons/PaymentsForm";
import { useDispatch, useSelector } from "react-redux";
import { getCarrito } from "../state/carrito";
import { Container } from "@mui/material";

const Carrito2 = ({ data }) => {
  const dataCarrito = useSelector((state) => state.dataCarrito);
  const dataUser = useSelector((state) => state.dataUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataUser) return;
    if (!dataUser.id) return;
    dispatch(getCarrito({ userId: dataUser.id }));
  }, [dataUser]);

  return (
    <>
      <Typography
        sx={{ padding: 2, fontSize: 28 }}
        align="center"
        variant="h5"
        color="black"
        gutterBottom
      >
        Tu Carrito
      </Typography>
      <Grid container columnSpacing={2}>
        <Grid item direction="column" xs={6}>
          <Grid container rowSpacing={5} justifyContent="center">
            {dataCarrito[0] ? (
              dataCarrito.map((cart, i) => (
                <Grid item key={cart.id}>
                  <Container>
                    <CardCarrito data={cart} user={dataUser.id} />
                  </Container>
                </Grid>
              ))
            ) : (
              <h1>Not found</h1>
            )}
          </Grid>
        </Grid>

        <Grid item direction="column" xs={6}>
          <Grid container rowSpacing={5} justifyContent="center">
            <Grid item xs={8} spacing={0} justifyContent="center">
              <ResumenCompra />
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
