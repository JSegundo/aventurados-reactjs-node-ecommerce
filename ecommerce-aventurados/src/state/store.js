import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import cardReducer from './dataCard'
import favoriteReducer from './favourites'
import carritoReducer from './carrito'
import userReducer from './user'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        dataCard: cardReducer,
        dataFavorites: favoriteReducer,
        dataCarrito: carritoReducer,
        dataUser: userReducer,
    }
})

export default store;