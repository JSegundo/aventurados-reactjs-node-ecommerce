import { createAction, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCarrito = createAction('GET_CARRITO',(userId) => {
    axios.get('/api/carts/all', {userId})
        .then(res => res.data)
})

export const addCarrito = createAction('ADD_CARRITO',(cardId, userId, amount) => {
    axios.post('/api/carts/add', {cardId, userId, amount})
        .then(res => res.data)
})

export const deleteCarrito = createAction('DELETE_CARRITO',(cardId, userId, amount) => {
    axios.post('/api/carts/add', {cardId, userId, amount})
        .then(res => res.data)
})

const carritoReducer = createReducer([], {
    [getCarrito.fulfilled]: (state, action) => action.payload,
    [addCarrito.fulfilled]: (state, action) => action.payload,
})

export default carritoReducer