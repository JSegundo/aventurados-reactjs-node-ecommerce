import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Card, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { deleteCarrito } from "../state/carrito";
import { useDispatch, useSelector } from "react-redux";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataCarrito = useSelector((state) => state.dataCarrito);
  const dataUser = useSelector((state) => state.dataUser);
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    creditNumber: "",
    numberOperation: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xkgqqnr",
        "template_9smiaf4",
        e.target,
        "xJPVUN02IJqFDYhoA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    dataCarrito.map( (cart) => {
      dispatch(deleteCarrito({cartId: cart.id, userId: dataUser.id}))
    })
  };

  

  return (
    <Card
      sx={{
        boxShadow: "0.1em 0.1em 0.8em grey",
        borderRadius: 4,
        padding: 3,
        borderBottom: "6px solid #131313",
        maxWidth: 450,
      }}
    >
      <Typography
        sx={{ justifyContent: "center", fontSize: 30 }}
        variant="h5"
        color="black"
        gutterBottom
      >
        Finalizar Compra
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <form onSubmit={sendEmail}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Nombre del titular{" "}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange("name")}
              label="Name"
              name="name"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Email </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange("email")}
              label="Email"
              name="email"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Numero de la tarjeta
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange("creditNumber")}
              label="Amount"
              name="creditNumber"
            />
          </FormControl>
          <div>
            <TextField
              label="Fecha de vencimiento"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">dd/mm/aaaa</InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Codigo de Seguridad"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">CVV</InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Documento"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">DNI</InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              disabled
              name="numberOperation"
              label="Numero de Operacion"
              defaultValue={parseInt(
                Math.random() * (100000 - 999000 + 1) + 999000
              )}
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                sx={{
                  width: "30%",
                  bgcolor: "#ff94c2",
                }}
                variant="contained"
              >
                Pagar
              </Button>
            </Box>
          </div>
        </form>
      </Box>
    </Card>
  );
};

export default PaymentForm;
