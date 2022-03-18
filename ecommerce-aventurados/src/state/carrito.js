import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCarrito = createAction('SET_CARRITO', () => {
  return []
})

export const getCarrito = createAsyncThunk("GET_CARRITO", ({ userId }) => {
  return axios
    .get(`http://localhost:3001/api/carts/all/${userId}`)
    .then((res) => res.data.sort((a, b) => a.id - b.id));
});

export const addCarrito = createAsyncThunk(
  "ADD_CARRITO",
  ({ productId, userId }) => {
    return axios
      .post(`http://localhost:3001/api/carts/add/${userId}/${productId}/`)
      .then(() => axios.get(`http://localhost:3001/api/carts/all/${userId}`))
      .then((res) => res.data.sort((a, b) => a.id - b.id))
      .catch((err) => console.log(err));
  }
);

export const deleteCarrito = createAsyncThunk(
  "DELETE_CARRITO",
  ({ cartId, userId }) => {
    return axios
      .delete(`http://localhost:3001/api/carts/del/${userId}/${cartId}`)
      .then(() => axios.get(`http://localhost:3001/api/carts/all/${userId}`))
      .then((res) => res.data.sort((a, b) => a.id - b.id))
      .catch((err) => console.log(err));
  }
);

export const subtractAmount = createAsyncThunk(
  "SUBTRACT_CARRITO",
  ({ cartId, userId }) => {
    return axios
      .put(`http://localhost:3001/api/carts/${userId}/${cartId}`)
      .then(() => axios.get(`http://localhost:3001/api/carts/all/${userId}`))
      .then((res) => res.data.sort((a, b) => a.id - b.id))
      .catch((err) => console.log(err));
  }
);

const carritoReducer = createReducer([], {
  [setCarrito]: (state, action) => action.payload,
  [getCarrito.fulfilled]: (state, action) => action.payload,
  [addCarrito.fulfilled]: (state, action) => action.payload,
  [deleteCarrito.fulfilled]: (state, action) => action.payload,
  [subtractAmount.fulfilled]: (state, action) => action.payload,
});

export default carritoReducer;
