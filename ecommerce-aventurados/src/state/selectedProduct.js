import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getClickedProduct = createAsyncThunk(
  "GET_CLICKED_PRODUCT",
  (productId) => {
    return axios
      .get(`http://localhost:3001/api/products/${productId}`)
      .then((res) => res.data);
  }
);

const initialState = [];

const selectedProductReducer = createReducer(initialState, {
  [getClickedProduct.fulfilled]: (state, action) => action.payload,
});

export default selectedProductReducer;
