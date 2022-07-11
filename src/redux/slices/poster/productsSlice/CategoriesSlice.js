import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCategoriesPoster = createAsyncThunk(
    'categories/fetchCategoriesPoster',
    async () => {
        const { data } = await axios.get(
            `https://joinposter.com/api/menu.getCategories?token=557693:63509286feaa600b23bb9dd85533f8ff`
        )
        return data.response
    }
)
export const createCategoriesPoster = createAsyncThunk(
    'categories/createCategoriesPoster',
    async (category) => {
        const { data } = await axios.post(
            `http://joinposter.com/api/menu.createCategory?token=557693:63509286feaa600b23bb9dd85533f8ff`,
            category
        )
        return data
    }
)
//export const deleteProduct = createAsyncThunk(
//    'products/deleteProduct',
//    async (id) => {
//        const { data } = await $authHost.delete(`api/product_p/${id}`)
//        return data
//    }
//)

const initialState = {
    items: [],
    status: 'loading',
    createStatus: 'loading',
    deleteStatus: 'loading',
}

const categoriesPosterSlice = createSlice({
    name: 'categoriesPoster',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchCategoriesPoster.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        },
        [fetchCategoriesPoster.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'loaded'
        },
        [fetchCategoriesPoster.rejected]: (state) => {
            state.items = []
            state.status = 'error'
        },
        [createCategoriesPoster.pending]: (state) => {
            state.createStatus = 'loading'
        },
        [createCategoriesPoster.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.createStatus = 'loaded'
        },
        [createCategoriesPoster.rejected]: (state) => {
            state.createStatus = 'error'
        },
        //[deleteCategoriesPoster.pending]: (state) => {
        //    state.deleteStatus = 'loading'
        //},
        //[deleteCategoriesPoster.fulfilled]: (state, action) => {
        //    state.items = state.items.filter(
        //        (item) => item.id !== action.payload
        //    )
        //    state.deleteStatus = 'loaded'
        //},
        //[deleteCategoriesPoster.rejected]: (state) => {
        //    state.deleteStatus = 'error'
        //},
    },
})

export const categoriesPoster = categoriesPosterSlice.reducer
