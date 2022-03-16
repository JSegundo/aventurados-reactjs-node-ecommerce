import { createAction, createReducer } from '@reduxjs/toolkit'

export const setCategories = createAction('SET_CATEGORIES')

const categoriesReducer = createReducer([], {
    [setCategories]: (state, action) => action.payload
})

export default categoriesReducer