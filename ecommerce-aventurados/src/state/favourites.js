import { createAction, createReducer } from '@reduxjs/toolkit'

export const setfavourite = createAction('SET_FAVOUTIRE')

const favouriteReducer = createReducer([], {
    [setfavourite]: (state, action) => action.payload
})

export default favouriteReducer