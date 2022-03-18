import React from "react";
import CardUser from "../commons/CardUser";
import Grid from "@mui/material/Grid";
import OrdersTable from "../commons/OrdersTable";

const Profile = () => {
  return (
    <Grid container alignItems="center" direction="column" rowSpacing={5}>
      <Grid item xs={12}>
        <CardUser />
      </Grid>
    </Grid>
  );
};

export default Profile;
