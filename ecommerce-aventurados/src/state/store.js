import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import dataCardReducer from './singleDataCard'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        singleDataCard: dataCardReducer,
    }
})

export default store;