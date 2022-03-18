import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getClickedOrder = createAsyncThunk(
  "GET_CLICKED_ORDER",
  (orderId) => {
    return axios
      .get(`http://localhost:3001/api/orders/${orderId}`)
      .then((res) => res.data);
  }
);

const initialState = [];

const selectedOrderReducer = createReducer(initialState, {
  [getClickedOrder.fulfilled]: (state, action) => action.payload,
});

export default selectedOrderReducer;
