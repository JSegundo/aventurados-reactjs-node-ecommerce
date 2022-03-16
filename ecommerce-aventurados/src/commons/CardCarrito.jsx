import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid, Fab, Box, Button } from "@mui/material";
import { setCard } from "../state/dataCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card2 = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card
      key={data.id}
      sx={{
        height: "100%",
        width: "80%",
        boxShadow: "0.1em 0.1em 0.8em grey",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="experiencia"
      ></CardMedia>
      <CardContent>
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            defaultValue={data.rating}
            precision={0.5}
            readOnly
          />
        </Stack>
        <Typography
          sx={{ height: "2em" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {data.name}
        </Typography>
        <Typography
          sx={{ height: "5em" }}
          variant="h6"
          color="text.secondary"
        >
          {data.description}
        </Typography>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
            >
              ${data.price}
            </Typography>
          </Grid>
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
      </CardContent>
    </Card>
  );
};

export default Card2;
