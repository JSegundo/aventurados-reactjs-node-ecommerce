import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk("GET_ALL_CATEGORIES", () => {
  return axios
    .get(`http://localhost:3001/api/categories`)
    .then((res) => res.data);
});

export const deleteCategory = createAsyncThunk(
  "DELETE_CATEGORY",
  (categoryId, thunkAPI) => {
    const { categorylist } = thunkAPI.getState();
    axios
      .delete(`http://localhost:3001/api/categories/${categoryId}`)
      .then((res) => res.data);
    const newList = categorylist.filter((category) => {
      return category.id !== categoryId;
    });
    return newList;
  }
);


const initialState = [];

const categoriesReducer = createReducer(initialState, {
  [getAllCategories.fulfilled]: (state, action) => action.payload,
  [deleteCategory.fulfilled]: (state, action) => action.payload,
});

export default categoriesReducer;
