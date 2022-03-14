import { createAction, createReducer } from '@reduxjs/toolkit'

export const setDataCard = createAction('SET_CARD')

const dataCardReducer = createReducer([], {
    [setDataCard]: (state, action) => action.payload
})

export default dataCardReducer
