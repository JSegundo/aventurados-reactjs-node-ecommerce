import React, { useEffect, useState } from "react";
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
      {/* <div>
        <h2>todos los usuarios</h2>
        <ul>
          {allUsers.map((userObj, i) => (
            <li key={i} >
              <p>
                Nombre: {userObj.name} {userObj.lastName}
              </p>
              <p>Email: {userObj.email}</p>
            </li>
          ))}
        </ul>

      </div> */}
      <List
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
      </List>
    </>
  );
};

export default AdminAllUsers;
