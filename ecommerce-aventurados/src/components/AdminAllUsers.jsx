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
import { Grade, GradeOutlined, Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsers,
  promoteAdmin,
  revokeAdmin,
  deleteUser,
} from "../state/userlist.js";

import React, { useEffect, useReducer, useState } from "react";
import { useAuth } from "../contexts/AuthContext.js";

const useStyles = makeStyles(() => ({
  containerContent: {
    margin: "50px 0 0 0",
    // // border: "6px solid black",
  },
}));

//

const AdminAllUsers = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const allUsers = useSelector((state) => state.userlist);

  useEffect(() => {
    dispatch(getAllUsers(currentUser.uid));
  }, []); // no se que dependencia pasarle

  const handlePromoteAdmin = ({ id }) => {
    console.log(id);
    dispatch(promoteAdmin(id, currentUser.uid));
  };

  const handleRevokeAdmin = ({ id }) => {
    dispatch(revokeAdmin(id));
  };

  const handleDeleteUser = ({ id }) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <Table size="big" className={classes.containerContent}>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Apellido</TableCell>
            <TableCell align="center">Admin</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers?.map((user) => (
            <>
              <TableRow key={user.id}>
                <TableCell>
                  {<Typography component="text">{user.name}</Typography>}
                </TableCell>
                <TableCell align="center">{`${user.email}`}</TableCell>
                <TableCell align="center">{`${user.name}`}</TableCell>
                <TableCell align="center">{`${user.lastName}`}</TableCell>
                {user.admin ? (
                  <TableCell align="center">
                    <IconButton color="inherit">
                      <Grade onClick={() => handleRevokeAdmin(user)} />
                    </IconButton>
                  </TableCell>
                ) : (
                  <TableCell align="center">
                    <IconButton color="inherit">
                      <GradeOutlined onClick={() => handlePromoteAdmin(user)} />
                    </IconButton>
                  </TableCell>
                )}

                <TableCell align="center">
                  <IconButton edge="end" color="inherit">
                    <Delete onClick={() => handleDeleteUser(user)} />
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

export default AdminAllUsers;
