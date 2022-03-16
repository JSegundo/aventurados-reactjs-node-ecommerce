import { Grid, Box, Button } from "@mui/material";
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
    <Grid container paddingLeft={10} paddingRight={5} >
      <Grid item direction="column" sx={{ width: "50%" }}>
        {changuito.map((producto, i) => (
          <Grid item paddingBottom={5}>
            <CardCarrito data={producto} />
          </Grid>
        ))}
      </Grid>
      <Grid item display="flex" flexDirection="column" sx={{ width: "50%" }}>
        <ResumenCompra productosCart={changuito} />
        <PaymentForm />
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "30%",
              bgcolor: "#ff94c2",
            }}
            variant="contained"
          >
            Pagar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Carrito2;
