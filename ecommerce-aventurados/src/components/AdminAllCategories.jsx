import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext.js";
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TableHead,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { Delete } from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector, useDispatch } from "react-redux";
import { getClickedCategory } from "../state/selectedCategory";

import { getAllCategories } from "../state/category";
import { deleteCategory, addCategory, editCategory } from "../state/category";

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

const AdminAllCategories = () => {
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  //para EDITAR
  const handleClickEdit = ({ id }) => {
    dispatch(getClickedCategory(id));
  };
  const handleDeleteCategory = ({ id }) => {
    dispatch(deleteCategory(id)); //BORRA
  };

  const handleAddCategory = ({ id }) => {
    dispatch(addCategory(id)); //agrega
  };

  const classes = useStyles();
  return (
    <>
      <IconButton color="inherit" className={classes.containerAddBtn}>
        <AddCircleOutlineIcon className={classes.AddBtn} />
      </IconButton>
      <Table size="big" className={classes.containerContent}>
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell align="center">Img</TableCell>

            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCategories?.map((category) => (
            <>
              <TableRow key={category.id}>
                <TableCell>
                  {console.log(category)}
                  <Typography component="text">{category.name}</Typography>
                </TableCell>
                <TableCell align="center">
                  <img src={`${category.image}`} className={classes.images} />
                </TableCell>

                <TableCell align="center">
                  <Link
                    onClick={() => handleClickEdit(category)}
                    to={`/admin/edit/categories/${category.id}`}
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
                    onClick={() => handleDeleteCategory(category)}
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

export default AdminAllCategories;
