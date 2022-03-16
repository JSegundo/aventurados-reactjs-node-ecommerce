import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import cardReducer from './dataCard'
import favouriteReducer from './favourites'
import carritoReducer from './carrito'
import categoriesReducer from './categories'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        dataCard: cardReducer,
        dataFavourites: favouriteReducer,
        dataCarrito: carritoReducer,
        dataCategories: categoriesReducer
    }
})

export default store;

