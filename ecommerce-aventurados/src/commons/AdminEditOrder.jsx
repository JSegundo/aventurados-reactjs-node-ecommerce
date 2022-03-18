import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getClickedOrder } from "../state/selectedOrder";

import {
  Button,
  TextField,
  Container,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100vw",
    heigth: "100vh",
    display: "flex",
    // marginTop: theme.spacing(1),
    //justifyContent: "space-evenly",
    // background: "aqua",
  },
  otherMargin: {
    marginTop: theme.spacing(10),
    // marginLeft: theme.spacing(10),
    // marginRight: theme.spacing(10),
  },
  imagenContainer: {
    display: "flex",
    width: "100%",
    heigth: "100%",
    // marginTop: theme.spacing(5),
    // marginRight: theme.spacing(10),
  },
  textoContainer: {
    width: "50%",
    heigth: "100%",
    // marginLeft: theme.spacing(5),
    marginTop: theme.spacing(10),
  },
  verticalAlignFLex: {
    display: "flex",
    alignItems: "center",
  },
  images: {
    width: 200,
    height: 150,
  },
  editBtn: {
    margin: 20,
  },
  dropSelect: {
    minWidth: 150,
    marginLeft: 50,
    paddingRight: 35,
    marginLeft: 25,
  },
  wrapperChanges: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-evenly",
  },
  wrapDropdown: {
    display: "flex",
  },
}));

const AdminEditOrder = () => {
  const { id } = useParams(); // id del producto seleccionado
  const dispatch = useDispatch();

  const order = useSelector((store) => store.selectedOrder);
  console.log(order); // producto seleccionado

  const classes = useStyles();

  return (
    <>
      {/* <img src={order.image} className={classes.images} /> */}
      <div className={classes.otherMargin}>
        <Container>
          <Grid className={classes.imagenContainer}>
        {/*     <img
              src={product.image}
              // alt={edit.name}
              style={{
                width: "50%",
                heigth: "100%",
                // marginLeft: theme.spacing(20),
              }}
            /> */}
            <Container>
              <Typography variant="h6" gutterBottom>
                {order.voucher}
              </Typography>
            </Container>
          </Grid>
          <Grid className={classes.mainContainer}>
            <Grid className={classes.textoContainer}>
              <Typography variant="h4" gutterBottom>
                Editar Order
              </Typography>
              <Grid>
                <form>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.name}
                        // onChange={handleChange}
                        // id="name"
                        label="amount"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.volume}
                        // onChange={handleChange}
                        // id="volume"
                        label="transaction"
                        fullWidth
                      />
                    </Grid>
                {/*     <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.brand}
                        // onChange={handleChange}
                        // id="brand"
                        // label=""
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.stock}
                        // onChange={handleChange}
                        // id="stock"
                        // label="Imagen"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.img}
                        // onChange={handleChange}
                        // id="img"
                        label="Imagen url"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.price}
                        // onChange={handleChange}
                        // id="price"
                        label="Precio"
                        fullWidth
                      />
                    </Grid>
                 */}    
                    {/* probando container para categorias y btn guardar*/}
                    <Grid className={classes.wrapperChanges}>
                      <Grid className={classes.wrapDropdown}>
                        <Box className={classes.verticalAlignFLex}>
                          <Typography variant="h6" gutterBottom>
                            Order :
                          </Typography>
                        </Box>
                        {/* <Select
                          className={classes.dropSelect}
                          // onChange={handleSelect}
                          // labelId="demo-simple-select-helper-label"
                          // id="demo-simple-select-helper"
                        >
                          <MenuItem value={"Cervezas"}>Cervezas</MenuItem>
                          <MenuItem value={"Gaseosas"}>Gaseosas</MenuItem>
                          <MenuItem value={"Aguas"}>Aguas</MenuItem>
                          <MenuItem value={"Aguas Saborizadas"}>
                            Aguas Saborizadas
                          </MenuItem>
                          <MenuItem value={"Bebidas Energizantes"}>
                            Bebidas Energizantes
                          </MenuItem>
                          <MenuItem value={"Bebidas Isotónicas"}>
                            Bebidas Isotónicas
                          </MenuItem>
                          <MenuItem value={"Vinos"}>Vinos</MenuItem>
                          <MenuItem value={"Leches"}>Leches</MenuItem>
                        </Select> */}
                      </Grid>

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.editBtn}
                      >
                        Confirmar cambios
                      </Button>
                    </Grid>
                    {/* probando container para categorias y btn guardar*/}
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AdminEditOrder;
