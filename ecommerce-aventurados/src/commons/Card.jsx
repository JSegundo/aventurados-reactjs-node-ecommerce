import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid } from "@mui/material";
import { setCard } from "../state/dataCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../App.css";

const Card2 = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataFavorite = useSelector((state) => state.dataFavorites);

  const favorites = dataFavorite.filter(
    (favorite) => favorite.product.id == data.id
  );

  const handleClick = () => {
    dispatch(setCard(data));
    navigate(`/single/${data.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      key={data.id}
      sx={{
        height: "20rem",
        // width: "18rem",
        width: "16rem",
        boxShadow: "0.1em 0.1em 0.8em grey",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="experiencia"
      />
      <CardContent>
        <Stack spacing={1} className="estrellitas">
          <Rating
            name="half-rating-read"
            defaultValue={data.rating}
            precision={0.5}
            readOnly
            className="estrellitas"
          />
        </Stack>
        <Typography
          sx={{ height: "1.em" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {data.name}
        </Typography>
        <Typography
          sx={{ height: "5em" }}
          variant="body2"
          color="text.secondary"
        >
          {data.description}
        </Typography>
        <Grid container sx={{ alignItems: "center" }}>
          <Typography
            sx={{ flexGrow: 1 }}
            gutterBottom
            variant="h6"
            component="div"
          >
            ${data.price}
          </Typography>
          {favorites[0] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Card2;
