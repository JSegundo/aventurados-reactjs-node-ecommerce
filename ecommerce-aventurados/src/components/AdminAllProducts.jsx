import React, { useEffect } from "react";
// import { useAuth } from "../contexts/AuthContext.js";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TableHead,
} from "@material-ui/core";
// icons
import { Delete } from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector, useDispatch } from "react-redux";

import { getAllProducts, deleteProduct } from "../state/products";
import { getClickedProduct } from "../state/selectedProduct";

const useStyles = makeStyles(() => ({
  containerContent: {
    margin: "50px 0 0 0",
  },
  images: {
    width: 250,
    height: 120,
  },
  containerAddBtn: {
    width: "100%",
    margin: "0 auto",
  },
  AddBtn: {
    width: 50,
    height: 50,
    color: "darkblue",
  },
  editContaier: {
    border: "2px solid orange",
    width: "100",
  },
}));

const AdminAllProducts = () => {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []); // no se que dependencia pasarle para que renderice devuelta sin que renderice 840820948 veces.

  const handleDeleteProduct = ({ id }) => {
    dispatch(deleteProduct(id)); //BORRA
  };
  //
  //para EDITAR
  const handleClickEdit = ({ id }) => {
    dispatch(getClickedProduct(id));
  };

  const classes = useStyles();

  return (
    <>
      <Link to={"/admin/add/product"}>
        <IconButton color="inherit" className={classes.containerAddBtn}>
          <AddCircleOutlineIcon className={classes.AddBtn} />
        </IconButton>
      </Link>
      <Table size="big" className={classes.containerContent}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Img</TableCell>
            <TableCell align="center">Desc</TableCell>
            <TableCell align="center">CategoryId</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts?.map((product) => (
            <>
              <TableRow key={product.id}>
                <TableCell>
                  {<Typography component="text">{product.name}</Typography>}
                </TableCell>
                <TableCell align="center">
                  <img src={`${product.image}`} className={classes.images} />
                </TableCell>
                <TableCell align="center">{`${product.description.slice(
                  0,
                  50
                )}..`}</TableCell>
                <TableCell align="center">{`${product.categoryId}`}</TableCell>
                <TableCell align="center">{`${product.price}`}</TableCell>
                <TableCell align="center">{`${product.rating}`}</TableCell>

                <TableCell align="center">
                  <Link
                    onClick={() => handleClickEdit(product)}
                    to={`/admin/edit/products/${product.id}`}
                  >
                    <IconButton color="inherit">
                      <EditIcon />
                    </IconButton>
                  </Link>
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => handleDeleteProduct(product)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AdminAllProducts;
