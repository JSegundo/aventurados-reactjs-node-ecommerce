import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "GET_ALL_USERS",
  (currentuserId) => {
    return axios
      .get(`http://localhost:3001/api/user/admin/users/${currentuserId}`)
      .then((res) => res.data)
      .then((users) => users.sort((a, b) => a.id - b.id));
  }
);

export const promoteAdmin = createAsyncThunk(
  "PROMOTE_ADMIN",
  (userId, currentuserId, thunkAPI) => {
    axios.put(`http://localhost:3001/api/user/admin/${userId}`);
    return axios
      .get(`http://localhost:3001/api/user/admin/users/${currentuserId}`)
      .then((res) => res.data.sort((a, b) => a.id - b.id));
  }
);

export const revokeAdmin = createAsyncThunk(
  "REVOKE_ADMIN",
  (userId, currentuserId, thunkAPI) => {
    axios.put(`http://localhost:3001/api/user/adminRemove/${userId}`);
    return axios
      .get(`http://localhost:3001/api/user/admin/users/${currentuserId}`)
      .then((res) => res.data.sort((a, b) => a.id - b.id));
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  (userId, thunkAPI) => {
    const { userslist } = thunkAPI.getState();
    axios
      .delete(`http://localhost:3001/api/user/admin/${userId}`)
      .then((res) => res.data);
    const newList = userslist.filter((user) => {
      return user.id !== userId;
    });
    return newList;
  }
);

const initialState = [];

const userlistReducer = createReducer(initialState, {
  [getAllUsers.fulfilled]: (state, action) => action.payload,
  [deleteUser.fulfilled]: (state, action) => action.payload,
  [promoteAdmin.fulfilled]: (state, action) => action.payload,
  [revokeAdmin.fulfilled]: (state, action) => action.payload,
});

export default userlistReducer;
