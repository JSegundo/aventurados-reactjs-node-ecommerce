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
  ({ id, currentuserId }) => {
    return axios
      .put(`http://localhost:3001/api/user/adminPromote/${id}`)
      .then(() =>
        axios.get(`http://localhost:3001/api/user/admin/users/${currentuserId}`)
      )
      .then((res) => res.data.sort((a, b) => a.id - b.id))
      .catch((err) => console.error(err));
  }
);

export const revokeAdmin = createAsyncThunk(
  "REVOKE_ADMIN",
  ({ id, currentuserId }) => {
    return axios
      .put(`http://localhost:3001/api/user/adminRemove/${id}`)
      .then(() =>
        axios.get(`http://localhost:3001/api/user/admin/users/${currentuserId}`)
      )
      .then((res) => res.data.sort((a, b) => a.id - b.id))
      .catch((err) => console.error(err));
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  ({ id, currentuserId }) => {
    return axios
      .delete(`http://localhost:3001/api/user/admin/${id}`)
      .then(() =>
        axios.get(`http://localhost:3001/api/user/admin/users/${currentuserId}`)
      )
      .then((res) => res.data.sort((a, b) => a.id - b.id))
      .catch((err) => console.error(err));
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
