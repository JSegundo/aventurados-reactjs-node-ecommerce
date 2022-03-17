import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("GET_ALL_PRODUCTS", () => {
  return axios
    .get(`http://localhost:3001/api/products`)
    .then((res) => res.data);
});

export const deleteProduct = createAsyncThunk(
  "DELETE_PRODUCT",
  (productId, thunkAPI) => {
    const { productslist } = thunkAPI.getState();
    axios
      .delete(`http://localhost:3001/api/products/${productId}`)
      .then((res) => res.data);
    const newList = productslist.filter((product) => {
      return product.id !== productId;
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

const productsReducer = createReducer(initialState, {
  [getAllProducts.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;
