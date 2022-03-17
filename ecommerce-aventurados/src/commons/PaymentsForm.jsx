import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Card, Typography } from "@mui/material";

const PaymentForm = () => {
  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Card sx={{ boxShadow: "0.1em 0.1em 0.8em grey", borderRadius: 5, padding:3 }}>
        <Typography
          sx={{ justifyContent: 'center', fontSize: 30 }}
          variant="h5"
          color="black"
          gutterBottom
        >
          Finalizar Compra
        </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap",}}>
        <div>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Nombre del titular{" "}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange("amount")}
              label="Amount"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Numero de la tarjeta
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange("amount")}
              label="Amount"
            />
          </FormControl>
        </div>
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
          <Box
            sx={{
              marginTop: 2,
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
        </div>
      </Box>
    </Card>
  );
};

export default PaymentForm;
