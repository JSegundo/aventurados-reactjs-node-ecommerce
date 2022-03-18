import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getClickedCategory } from "../state/selectedCategory";

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

const AdminEditCategory = () => {
  const { id } = useParams(); // id del producto seleccionado
  const dispatch = useDispatch();

  const category = useSelector((store) => store.selectedCategory);
  console.log(category); 

  const classes = useStyles();

  return (
    <>
      {/* <img src={category.image} className={classes.images} /> */}
      <div className={classes.otherMargin}>
        <Container>
          <Grid className={classes.imagenContainer}>
            <img
              src={category.image}
              // alt={edit.name}
              style={{
                width: "50%",
                heigth: "100%",
                // marginLeft: theme.spacing(20),
              }}
            />
            <Container>
              <Typography variant="h6" gutterBottom>
                {category.name}
              </Typography>
            </Container>
          </Grid>
          <Grid className={classes.mainContainer}>
            <Grid className={classes.textoContainer}>
              <Typography variant="h4" gutterBottom>
                Editar categoria
              </Typography>
              <Grid>
                <form>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.name}
                        // onChange={handleChange}
                        // id="name"
                        label="Nombre"
                        fullWidth
                      />
                    </Grid>
                { /*   <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.volume}
                        // onChange={handleChange}
                        // id="volume"
                        label="Descripcion"
                        fullWidth
                      />
                */}    </Grid>
                 {/*   <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.brand}
                        // onChange={handleChange}
                        // id="brand"
                        // label=""
                        fullWidth
                      />
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        // value={edit.img}
                        // onChange={handleChange}
                        // id="img"
                        label="Imagen url"
                        fullWidth
                      />
                    </Grid>

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.editBtn}
                      >
                        Confirmar cambios
                      </Button>
                    
                    {/* probando container para categorias y btn guardar*/}
                  
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AdminEditCategory;
