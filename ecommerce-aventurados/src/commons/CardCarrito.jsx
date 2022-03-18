import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid, Fab, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCarrito, addCarrito, subtractAmount } from "../state/carrito";

const CardCarrito = ({ data, user }) => {
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    amount: data.amount,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleRemoveCart = () => {
    dispatch(deleteCarrito({ userId: user, cartId: data.id }));
  };

  const handleRemoveAmount = () => {
    dispatch(subtractAmount({ userId: user, cartId: data.id }))
  };

  const handleAddAmount = () => {
    dispatch(addCarrito({ productId: data.product.id, userId: user}))
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
        image={data.product.image}
        alt="experiencia"
      ></CardMedia>
      <CardContent>
        <Typography
          sx={{ height: "2em" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {data.product.name}
        </Typography>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={7}>
            <Typography gutterBottom variant="h4" component="div">
              ${data.product.price}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              onClick={data.amount == 1 ? handleRemoveCart : handleRemoveAmount}
            >
              <RemoveIcon />
            </Fab>
            <Box component="span" sx={{ p: 2 }}>
              {data.amount}
            </Box>
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              onClick={handleAddAmount}
            >
              <AddIcon />
            </Fab>
            <Fab enable aria-label="like" onClick={handleRemoveCart}>
              <DeleteIcon sx={{ color: "black" }} />
            </Fab>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardCarrito;
