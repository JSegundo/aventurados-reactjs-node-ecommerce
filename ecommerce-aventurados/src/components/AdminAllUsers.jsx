import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext.js";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Button, Box } from "@material-ui/core";

const AdminAllUsers = () => {
  const { currentUser } = useAuth();

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await axios.get(
          `http://localhost:3001/api/user/admin/users/${currentUser.uid}`
        );
        setAllUsers(users.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const handleAddNewAdmin = async ({ id }) => {
    try {
      await axios.put(`http://localhost:3001/api/user/admin/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteAdmin = async ({ id }) => {
    try {
      await axios.put(`http://localhost:3001/api/user/adminDelete/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  // robado

  //robado

  return (
    <>
      {/* <List
        dense
        sx={{ width: "100%", maxWidth: 980, bgcolor: "background.paper" }}
      >
        {allUsers.map((user, i) => {
          const labelId = `checkbox-list-secondary-label-${i}`;
          return (
            <ListItem key={user.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${i + 1}`}
                    src={`/static/images/avatar/${i + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${user.name}`} />
                <ListItemText primary={`admin: ${user.admin}`} />
                <ListItemText primary={`${user.email}`} />
                <Button onClick={() => handleAddNewAdmin(user)}>
                  add admin
                </Button>
                <Button onClick={() => handleDeleteAdmin(user)}>
                  remove admin
                </Button>
              </ListItem>
            </ListItem>
          );
        })}
      </List> */}
      <Table size="small">
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
                      <Grade onClick={() => handleRevoke(useReducer)} />
                    </IconButton>
                  </TableCell>
                ) : (
                  <TableCell align="center">
                    <IconButton color="inherit">
                      <GradeOutlined onClick={() => handleAddNewAdmin(user)} />
                    </IconButton>
                  </TableCell>
                )}

                <TableCell align="center">
                  <IconButton edge="end" color="inherit">
                    <Delete onClick={() => handleDeleteAdmin(user)} />
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
