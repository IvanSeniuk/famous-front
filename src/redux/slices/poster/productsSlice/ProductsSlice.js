import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductsPoster = createAsyncThunk(
    'products/fetchProductsPoster',
    async () => {
        const { data } = await axios.get(
            `https://joinposter.com/api/menu.getProducts?token=557693:63509286feaa600b23bb9dd85533f8ff`
        )
        return data.response
    }
)

//export const createProduct = createAsyncThunk(
//    'products/createProduct',
//    async (product) => {
//        const { data } = await $authHost.post('api/product_p', product)
//        return data
//    }
//)
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

const productsPosterSlice = createSlice({
    name: 'productsPoster',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchProductsPoster.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        },
        [fetchProductsPoster.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'loaded'
        },
        [fetchProductsPoster.rejected]: (state) => {
            state.items = []
            state.status = 'error'
        },
        //[createProduct.pending]: (state) => {
        //    state.createStatus = 'loading'
        //},
        //[createProduct.fulfilled]: (state, action) => {
        //    state.items.push(action.payload)
        //    state.createStatus = 'loaded'
        //},
        //[createProduct.rejected]: (state) => {
        //    state.createStatus = 'error'
        //},
        //[deleteProduct.pending]: (state) => {
        //    state.deleteStatus = 'loading'
        //},
        //[deleteProduct.fulfilled]: (state, action) => {
        //    state.items = state.items.filter(
        //        (item) => item.id !== action.payload
        //    )
        //    state.deleteStatus = 'loaded'
        //},
        //[deleteProduct.rejected]: (state) => {
        //    state.deleteStatus = 'error'
        //},
    },
})

export const productsPoster = productsPosterSlice.reducer
