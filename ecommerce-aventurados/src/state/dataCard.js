import { createAction, createReducer } from '@reduxjs/toolkit'

export const setCard = createAction('SET_CARD')

const cardReducer = createReducer([], {
    [setCard]: (state, action) => action.payload
})

export default cardReducer