import {
  Button,
  Dialog,
  Grid,
  ImageListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Alert, AlertTitle} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavorite, getFavorite, removeFavorite } from "../state/favourites";
import { addCarrito } from "../state/carrito";
import "../App.css";

const SingleView = () => {
  const data = useSelector((state) => state.dataCard);
  const user = useSelector((state) => state.dataUser);
  const dataFavorite = useSelector((state) => state.dataFavorites);
  const [purchase, setPurchase] = React.useState(false);

  const favorites = dataFavorite.filter(
    (favorite) => favorite.product.id == data.id
  );

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFavorite({ userId: user.id, productId: data.id }));
    navigate(`/single/${data.id}`);
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite({ userId: user.id, productId: data.id }));
    navigate(`/single/${data.id}`);
  };

  const handleCarrito = () => {
    dispatch(addCarrito({ productId: data.id, userId: user.id, amount: 1 }));
    setPurchase(!purchase)
  };

  const closeDialog = () => {
    setPurchase(!purchase)
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.id) {
      navigate("/");
    }
  }, [data]);

  return (
    <Grid
      container
      spacing={5}
      paddingX={6}
      paddingTop={6}
      sx={{ height: "77vh" }}
    >
      <Grid item xs={6}>
        <Grid item xs={12} className="imageContainer-singleView">
          <ImageListItem className="imagelistitem">
            <img src={`${data.image}`} />
          </ImageListItem>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Grid content>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <h1>{data.name}</h1>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            paddingBottom={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack paddingBottom={3}>
              <Rating
                name="half-rating-read"
                defaultValue={data.rating}
                precision={0.5}
                readOnly
                size="large"
              />
            </Stack>

            <Typography
              sx={{ flexGrow: 1 }}
              gutterBottom
              variant="h6"
              // component="div"
            >
              $ {data.price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <p>{data.description}</p>
            </Box>
          </Grid>
          <Grid item xs={12} paddingTop={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: 350,
              }}
            >
              <Box>
                {favorites[0] ? (
                  <Button
                    onClick={handleRemoveFavorite}
                    sx={{
                      bgcolor: "#94d4ffcf",
                      // bgcolor: "#DBF227",
                      color: "black",
                      borderRadius: "8px",
                    }}
                    endIcon={<FavoriteIcon sx={{ color: "#004c97" }} />}
                    variant="contained"
                  >
                    quitar
                  </Button>
                ) : (
                  <Button
                    onClick={handleFavorite}
                    sx={{
                      bgcolor: "#94d4ffcf",
                      color: "black",
                      borderRadius: "8px",
                    }}
                    endIcon={<FavoriteBorderIcon sx={{ color: "#004c97" }} />}
                    variant="contained"
                  >
                    favoritos
                  </Button>
                )}
              </Box>
              <Box>
                <Button
                  onClick={handleCarrito}
                  sx={{
                    bgcolor: "#94d4ffcf",
                    color: "black",
                    borderRadius: "8px",
                  }}
                  endIcon={<ShoppingCartIcon sx={{ color: "black" }} />}
                  variant="contained"
                >
                  Agregar a Carrito
                </Button>
                <Dialog open={purchase} onClose={closeDialog} scroll='body'> 
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Se agrego al carrito correctamente — <strong>check it out!</strong>
                  </Alert>
                </Dialog>
              </Box>
            </Box>
          </Grid>
          <br></br>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleView;
