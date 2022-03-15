import React, { useState } from "react";
import { Grid, responsiveFontSizes, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import GroupIcon from "@mui/icons-material/Group";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import BentoSharpIcon from "@mui/icons-material/BentoSharp";
import AdminHeaderCards from "../components/AdminHeaderCards";

import AdminAllUsers from "../components/AdminAllUsers";
import AdminAllProducts from "../components/AdminAllProducts";
// import AdminContent from "../components/AdminContent";

const useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
    width: "80%",
    margin: "0 auto",
  },

  iconos: {
    color: "blue",
  },
  title: {
    fontSize: 30,
  },
}));

const AdminProfile = () => {
  const classes = useStyles();

  const [clicked, setClicked] = useState("products");

  return (
    <div className={classes.root}>
      <Typography variant="h1" color="secondary" className={classes.title}>
        Admin
      </Typography>
      {/* navigation */}
      <Grid container spacing={4}>
        <Grid
          onClick={() => setClicked("users")}
          className={classes.gridStyle}
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          xl={3}
        >
          <AdminHeaderCards
            icono={<GroupIcon className={classes.iconos} />}
            titulo={"Users"}
            border={"blue"}
          />
        </Grid>
        <Grid
          className={classes.gridStyle}
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          xl={3}
        >
          <AdminHeaderCards
            icono={<InventorySharpIcon className={classes.iconos} />}
            titulo={"Orders"}
          />
        </Grid>
        <Grid
          className={classes.gridStyle}
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          xl={3}
        >
          <AdminHeaderCards
            icono={<CategorySharpIcon className={classes.iconos} />}
            titulo={"Categorys"}
          />
        </Grid>
        <Grid
          onClick={() => setClicked("products")}
          className={classes.gridStyle}
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          xl={3}
        >
          <AdminHeaderCards
            icono={<BentoSharpIcon className={classes.iconos} />}
            titulo={"Products"}
          />
        </Grid>
      </Grid>
      {/* navigation */}

      <Box>
        {clicked === "users" && <AdminAllUsers />}
        {clicked === "products" && <AdminAllProducts />}
      </Box>
    </div>
  );
};

export default AdminProfile;
