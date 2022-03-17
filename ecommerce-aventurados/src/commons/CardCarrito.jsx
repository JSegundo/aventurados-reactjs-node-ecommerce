import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Grid,
  Fab,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CardCarrito = ({ data }) => {
  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Card
      key={data.id}
      sx={{
        height: "100%",
        width: "100%",
        boxShadow: "0.1em 0.1em 0.8em grey",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={data.image}
        alt="experiencia"
      ></CardMedia>
      <CardContent>
        <Typography
          sx={{ height: "2em" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {data.name}
        </Typography>
        <Grid container  sx={{ alignItems: "center" }}>
          <Grid item xs={7}>
            <Typography gutterBottom variant="h4" component="div">
              ${data.price}
            </Typography>
          </Grid>
          <Grid item xs={5}>
          <Fab size="small" color="secondary" aria-label="add">
            <RemoveIcon />
          </Fab>
          <Box component="span" sx={{ p: 2 }}>
            1
          </Box>
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab disabled aria-label="like">
            <DeleteIcon sx={{ color: "black" }} />
          </Fab>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardCarrito;
