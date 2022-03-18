import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((props) => ({
  root: {
    textAlign: "center",
    backgroundColor: props.color,
  },
  texto: {
    fontSize: 18,
    color: props.font,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 22,
    color: props.font,
  },
}));

const AdminHeaderCards = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.root}>
      <Box display={"flex"}>
        {props.icono}
        <Typography className={classes.titulo}>{props.titulo}</Typography>
        <Typography className={classes.texto}>{props.texto}</Typography>
      </Box>
    </Button>
  );
};

export default AdminHeaderCards;
