import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cardReducer from "./dataCard";
import favouriteReducer from "./favourites";
import carritoReducer from "./carrito";
import userlistReducer from "./userlist";
import productsReducer from "./products";
import selectedProductReducer from "./selectedProduct";
import userReducer from "./user";
import categoriesReducer from "./category";
import selectedCategoryReducer from "./selectedCategory";
import ordersReducer from "./orders";
import selectedOrderReducer from "./selectedOrder"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    dataCard: cardReducer,
    dataFavorites: favouriteReducer,
    dataCarrito: carritoReducer,
    dataUser: userReducer,
    userlist: userlistReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    categories: categoriesReducer,
    selectedCategory:selectedCategoryReducer,
    orders:ordersReducer,
    selectedOrder:selectedOrderReducer,
  },
});

export default store;
