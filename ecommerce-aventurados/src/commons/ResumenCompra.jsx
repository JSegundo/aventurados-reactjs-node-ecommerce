import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ResumenCompra = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
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
