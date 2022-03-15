import React from "react";
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((props) => ({
  root: {
    textAlign: "center",
    backgroundColor: props.color,
    border: "4px solid blue",
    borderRadius: 12,
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
    <Card className={classes.root}>
      <CardContent>
        {props.icono}
        <Typography className={classes.titulo}>{props.titulo}</Typography>
        <Typography className={classes.texto}>{props.texto}</Typography>
      </CardContent>
    </Card>
  );
};

export default AdminHeaderCards;
