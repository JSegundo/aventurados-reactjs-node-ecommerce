import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getClickedCategory = createAsyncThunk(
  "GET_CLICKED_CATEGORY",
  (categoryId) => {
    return axios
      .get(`http://localhost:3001/api/categories/singlecategory/${categoryId}`)
      .then((res) => res.data);
  }
);

const initialState = [];

const selectedCategoryReducer = createReducer(initialState, {
  [getClickedCategory.fulfilled]: (state, action) => action.payload,
});

export default selectedCategoryReducer;

//getClikedCategory
///aca tengo que poner el editar.
