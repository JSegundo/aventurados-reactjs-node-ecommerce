import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ResumenCompra = () => {
  return (
    <Card sx={{ minWidth: 275, boxShadow: "0.1em 0.1em 0.8em grey", borderRadius: 5, padding:2}}>
      <CardContent sx={{display: 'flex', flexDirection:'column'}}>
        <Typography
          sx={{ justifyContent: 'center', fontSize: 30 }}
          variant="h5"
          color="black"
          gutterBottom
        >
          Resumen de Compra
        </Typography>
        <Typography variant="h6" component="div">
          Productos
        </Typography> 
        <br />
        <Typography variant="h6" component="div">
          Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResumenCompra;
