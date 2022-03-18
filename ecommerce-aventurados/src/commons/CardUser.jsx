import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { Typography, Grid } from "@mui/material";
const CardUser = () => {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  const data = useSelector((state) => state.dataUser);

  return (
    <Grid container alignItems="center" direction="column">
      <AccountCircleIcon sx={{ width: "20vw", height: "20vh" }} />
      <Div>
        {data.name} {data.lastName}
      </Div>
      <Div>{data.email}</Div>
    </Grid>
  );
};

export default CardUser;
