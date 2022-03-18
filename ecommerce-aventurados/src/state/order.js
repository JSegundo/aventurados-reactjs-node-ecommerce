import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'
import { addOrder } from '../../api/controllers/orders.controllers';

export const getAllOrders = createAsyncThunk("GET_ALL_ORDERS", ({userId}) => {
    return axios
      .get(`http://localhost:3001/api/orders/${userId}`)
      .then((res) => res.data)
      .then((orders) => orders.sort((a, b) => a.id - b.id));
  });


const initialState = [];

const ordersReducer = createReducer(initialState, {
  [getAllOrders.fulfilled]: (state, action) => action.payload,
});

export default ordersReducer;