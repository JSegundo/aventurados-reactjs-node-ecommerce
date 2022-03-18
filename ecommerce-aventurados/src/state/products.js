import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("GET_ALL_PRODUCTS", () => {
  return axios
    .get(`http://localhost:3001/api/products`)
    .then((res) => res.data)
    .then((prods) => prods.sort((a, b) => a.id - b.id));
});

export const deleteProduct = createAsyncThunk(
  "DELETE_PRODUCT",
  (productId, thunkAPI) => {
    const { products } = thunkAPI.getState();
    axios
      .delete(`http://localhost:3001/api/products/${productId}`)
      .then((res) => res.data);
    const newList = products.filter((product) => {
      return product.id !== productId;
    });
    return newList;
  }
);

export const editProduct = createAsyncThunk(
  "EDIT_PRODUCT",
  ({ id, edition }) => {
    return axios
      .put(`http://localhost:3001/api/products/edit/${id}`, edition)
      .then((res) => res.data);
  }
);

export const addProduct = createAsyncThunk("CREATE_PRODUCT", (newProduct) => {
  return axios.post(`http://localhost:3001/api/products`, newProduct);
});

const initialState = [];

const productsReducer = createReducer(initialState, {
  [getAllProducts.fulfilled]: (state, action) => action.payload,
  [deleteProduct.fulfilled]: (state, action) => action.payload,
  [editProduct.fulfilled]: (state, action) => action.payload,
  [addProduct.fulfilled]: (state, action) => action.payload,
});

export default productsReducer;
