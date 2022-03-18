import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

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

import { editProduct } from "../state/products";
import { getClickedProduct } from "../state/selectedProduct";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100vw",
    heigth: "100vh",
    display: "flex",
  },
  otherMargin: {
    marginTop: theme.spacing(10),
  },
  imagenContainer: {
    display: "flex",
    width: "100%",
    heigth: "100%",
  },
  textoContainer: {
    width: "50%",
    heigth: "100%",
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
  colorSavedBtn: {
    margin: 20,
    backgroundColor: "#66bb6a",
  },
}));

const AdminEditProduct = () => {
  // const navigate = useNavigate();

  const classes = useStyles();
  const { id } = useParams(); // id del producto seleccionado
  const dispatch = useDispatch();
  const [edition, setEdition] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    dispatch(getClickedProduct(id));
  }, []);

  const product = useSelector((store) => store.selectedProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEdition({ ...edition, [name]: value });
  };

  const handleSelect = (e) => {
    setEdition({ ...edition, categoryId: e.target.value });
  };

  const handleSubmitChanges = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(edition);
    dispatch(editProduct({ id, edition }));
    // .then(() => navigate("/admin"));
    setSaved(true);
  };

  return (
    <>
      <div className={classes.otherMargin}>
        <Container>
          <Grid className={classes.imagenContainer}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "50%",
                heigth: "100%",
              }}
            />
            <Container>
              <Typography variant="h6" gutterBottom>
                {product.name}
              </Typography>
              <Typography>Descripcion: {product.description}</Typography>
              <Typography>Rating: {product.rating}</Typography>
              <Typography>Price: ${product.price}</Typography>
              <Typography> Category: {product.categoryId}</Typography>
            </Container>
          </Grid>
          <Grid className={classes.mainContainer}>
            <Grid className={classes.textoContainer}>
              <Typography variant="h4" gutterBottom>
                Editar producto
              </Typography>
              <Grid>
                <form onSubmit={handleSubmitChanges}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={edition.name || ""}
                        onChange={handleChange}
                        name="name"
                        label="Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={edition.description || ""}
                        onChange={handleChange}
                        name="description"
                        label="Descripcion"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        type={"number"}
                        value={edition.rating || ""}
                        onChange={handleChange}
                        name="rating"
                        label="Rating"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={edition.image || ""}
                        onChange={handleChange}
                        name="image"
                        label="Image url"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        type={"number"}
                        value={edition.price || ""}
                        onChange={handleChange}
                        name="price"
                        label="Price"
                        fullWidth
                      />
                    </Grid>

                    {/* probando container para categorias y btn guardar*/}
                    <Grid className={classes.wrapperChanges}>
                      <Grid className={classes.wrapDropdown}>
                        <Box className={classes.verticalAlignFLex}>
                          <Typography variant="h6" gutterBottom>
                            Categoría :
                          </Typography>
                        </Box>
                        <Select
                          className={classes.dropSelect}
                          onChange={handleSelect}
                          name="categoryId"
                          value={edition.categoryId || ""}
                        >
                          <MenuItem value={"1"}>Aventura</MenuItem>
                          <MenuItem value={"2"}>Gourmet</MenuItem>
                          <MenuItem value={"3"}>Relax</MenuItem>
                          <MenuItem value={"4"}>En equipo</MenuItem>
                          <MenuItem value={"5"}>Viaje</MenuItem>
                        </Select>
                      </Grid>

                      {saved ? (
                        <>
                          <Button
                            href="/admin"
                            variant="contained"
                            color="green"
                            className={classes.colorSavedBtn}
                          >
                            Go to admin panel
                          </Button>
                        </>
                      ) : (
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.editBtn}
                        >
                          Save changes
                        </Button>
                      )}
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

export default AdminEditProduct;
