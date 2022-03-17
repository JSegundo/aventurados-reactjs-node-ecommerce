import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cardReducer from "./dataCard";
import favouriteReducer from "./favourites";
import carritoReducer from "./carrito";
import userlistReducer from "./userlist";
import productsReducer from "./products";
import selectedProductReducer from "./selectedProduct";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    dataCard: cardReducer,
    dataFavourites: favouriteReducer,
    dataCarrito: carritoReducer,
    dataUser: userReducer,
    userlist: userlistReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer,
  },
});

export default store;
