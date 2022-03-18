import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const ResumenCompra = () => {
  let preTotal = 0;
  const [total, setTotal] = React.useState(0)
  const dataCarrito = useSelector((state) => state.dataCarrito);
  const dataUser = useSelector((state) => state.dataUser);

  React.useEffect(() => {
    if (!dataCarrito[0]) return;
    dataCarrito.map((cart) => {
      console.log("el que suma => ", cart);
      preTotal += cart.product.price * cart.amount;
      console.log('el total =>',   total)
    });
    setTotal(preTotal)
  }, [dataCarrito]);

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: "0.1em 0.1em 0.8em grey",
        borderRadius: 5,
        padding: 2,
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ justifyContent: "center", fontSize: 30 }}
          variant="h5"
          color="black"
          gutterBottom
        >
          Resumen de Compra
        </Typography>
        {dataCarrito
          ? dataCarrito.map((cart, i) => (
              <p>
                {`${cart.product.name} -> $${cart.product.price} x ${cart.amount}`}
              </p>
            ))
          : null}
        <Typography variant="h6" component="div">
          Productos
        </Typography>
        <br />
        <Typography variant="h6" component="div">
          Total
        </Typography>
        <p>${total}</p>
      </CardContent>
    </Card>
  );
};

export default ResumenCompra;
