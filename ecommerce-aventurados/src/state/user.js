import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const setUser = createAsyncThunk('SET_USER',(localId) => {
    return axios.get(`http://localhost:3001/api/user/me/${localId}`)
                .then(res => res.data)
})

const userReducer = createReducer([], {
    [setUser.fulfilled]: (state, action) => action.payload
})

export default userReducer