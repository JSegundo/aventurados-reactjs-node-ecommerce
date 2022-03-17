import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import dataCardReducer from "./singleDataCard";
import userlistReducer from "./userlist";
import productsReducer from "./products";
import selectedProductReducer from "./selectedProduct";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    singleDataCard: dataCardReducer,
    userlist: userlistReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer,
  },
});

export default store;
