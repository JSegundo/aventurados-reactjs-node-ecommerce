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
    dispatch(subtractAmount({ userId: user, cartId: data.id }));
  };

  const handleAddAmount = () => {
    dispatch(addCarrito({ productId: data.product.id, userId: user }));
  };

  return (
    <Card
      key={data.id}
      sx={{
        height: "300px",
        width: "250px",
        boxShadow: "0.1em 0.1em 0.8em grey",
        borderRadius: "10px",
        margin: " 0 15px 0 0",
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
          sx={{ height: "1.8em" }}
          gutterBottom
          variant="h3"
          component="div"
          fontSize={"1.2rem"}
        >
          {data.product.name}
        </Typography>
        <Grid
          container
          sx={{
            width: "100%",
            // alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize={"1rem"}
            >
              ${data.product.price}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            width={"100%"}
            sx={{ width: "100%" }}
            justifyContent={'space-between'}
            
          >
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              onClick={data.amount == 1 ? handleRemoveCart : handleRemoveAmount}
              fontSize={"1rem"}
              width={"45"}
              height="45"
            >
              <RemoveIcon fontSize={"1rem"} />
              {/* <RemoveIcon fontSize={"1rem"} /> */}
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

            <Fab enable aria-label="like" onClick={handleRemoveCart} padding={5}>
              <DeleteIcon sx={{ color: "black", fontSize: "1rem" }} />

            </Fab>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardCarrito;
