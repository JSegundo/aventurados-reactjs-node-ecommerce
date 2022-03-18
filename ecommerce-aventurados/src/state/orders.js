import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrders = createAsyncThunk("GET_ALL_ORDERS", () => {
  return axios
    .get(`http://localhost:3001/api/orders`)
    .then((res) => res.data);
});

export const deleteOrder = createAsyncThunk(
  "DELETE_ORDER",
  (orderId, thunkAPI) => {
    const { orderslist } = thunkAPI.getState();
    axios
      .delete(`http://localhost:3001/api/orders/${orderId}`)
      .then((res) => res.data);
    const newList = orderslist.filter((order) => {
      return order.id !== orderId;
    });
    return newList;
  }
);






// export const getProductAndEdit = createAsyncThunk(
//   "GET_EDIT_PRODUCT",
//   (productId, thunkAPI) => {
//     axios.get(`http://localhost:3001/api/products/${productId}`);
//     return axios.get(`http://localhost:3001/api/products`);
//   }
// );

// export const addProduct = createAsyncThunk(
//   "CREATE_PRODUCT,
//   (thunkAPI) => {
//     axios.put(`http://localhost:3001/api/products//`);
//     return axios
//       .get(`http://localhost:3001/api`)
//
//   }
// );

const initialState = [];

const ordersReducer = createReducer(initialState, {
  [getAllOrders.fulfilled]: (state, action) => action.payload,
  [deleteOrder.fulfilled]: (state, action) => action.payload,
});

export default ordersReducer;
