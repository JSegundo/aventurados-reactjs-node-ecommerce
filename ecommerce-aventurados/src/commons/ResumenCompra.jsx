import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const ResumenCompra = () => {
  let preTotal = 0;
  const [total, setTotal] = React.useState(0);
  const dataCarrito = useSelector((state) => state.dataCarrito);
  const dataUser = useSelector((state) => state.dataUser);

  React.useEffect(() => {
    if (!dataCarrito[0]) return setTotal(0)
    dataCarrito.map((cart) => {
      preTotal += cart.product.price * cart.amount;
    });
    setTotal(preTotal);
  }, [dataCarrito]);

  return (
    <Card
      sx={{
        maxWidth: 450,
        minWidth: 275,
        boxShadow: "0.1em 0.1em 0.8em grey",
        borderRadius: 4,
        padding: 2,
        borderBottom: "6px solid #131313",
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

// <Card
// sx={{
//   minWidth: 275,
//   boxShadow: "0.1em 0.1em 0.8em grey",
//   borderRadius: 5,
//   padding: 2,
// }}
// >
// <CardContent sx={{ display: "flex", flexDirection: "column" }}>
//   <Typography
//     sx={{ justifyContent: "center", fontSize: 30 }}
//     variant="h5"
//     color="black"
//     gutterBottom
//   >
//     Resumen de Compra
//   </Typography>
//   {dataCarrito
//     ? dataCarrito.map((cart, i) => (
//         <p>
//           {`${cart.product.name} -> $${cart.product.price} x ${cart.amount}`}
//         </p>
//       ))
//     : null}
//   <Typography variant="h6" component="div">
//     Productos
//   </Typography>
//   <br />
//   <Typography variant="h6" component="div">
//     Total
//   </Typography>
//   <p>${total}</p>
// </CardContent>
// </Card>

{
  /* <TableContainer component={Paper}>
<Table sx={{ minWidth: 300 }} aria-label="spanning table">
  <TableHead>
    <TableRow>
      <TableCell align="center" colSpan={3}>
        Details
      </TableCell>
      <TableCell align="right">Price</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Desc</TableCell>
      <TableCell align="right">Price.</TableCell>
      <TableCell align="right">Unit</TableCell>
      <TableCell align="right">Sum</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {dataCarrito.map((cart) => (
      <TableRow key={cart.id}>
        <TableCell>{cart.product.name}</TableCell>
        <TableCell align="right">{cart.product.price}</TableCell>
        <TableCell align="right">{cart.amount}</TableCell>
        <TableCell align="right">{(cart.product.price * cart.amount).toFixed(2)}</TableCell>
      </TableRow>
    ))}

    <TableRow>
      <TableCell rowSpan={3} />
      <TableCell colSpan={2}>Subtotal</TableCell>
      <TableCell align="right">{total.toFixed(2)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell align="right">{total.toFixed(2)}</TableCell>
    </TableRow>
  </TableBody>
</Table>
</TableContainer> */
}
