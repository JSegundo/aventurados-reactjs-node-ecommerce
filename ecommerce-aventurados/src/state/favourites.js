import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const getFavorite = createAsyncThunk('GET_FAVORITE',(userId) => {
    return axios.get(`http://localhost:3001/api/favorites/${userId}`)
                .then(res => res.data)
})

export const addFavorite = createAsyncThunk('ADD_FAVORITE',({userId, productId}) => {
    return axios.post(`http://localhost:3001/api/favorites/${userId}/${productId}`)
                .then(res => res.data)
})

export const removeFavorite = createAsyncThunk('REMOVE_FAVORITE',({userId, productId}) => {
    return axios.delete(`http://localhost:3001/api/favorites/${userId}/${productId}`)
                .then(res => res.data)
})

const favoriteReducer = createReducer([], {
    [getFavorite.fulfilled]: (state, action) => action.payload,
    [addFavorite.fulfilled]: (state, action) => [...state, action.payload],
    [removeFavorite.fulfilled]: (state, action) => state.filter(fav => fav.id !== action.payload.id),
})

export default favoriteReducer
