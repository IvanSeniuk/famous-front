import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const sendOrderPoster = createAsyncThunk(
    'odrer/sendOrderPoster',
    async (order) => {
        const { data } = await axios.post(
            `https://joinposter.com/api/incomingOrders.createIncomingOrder?token=557693:63509286feaa600b23bb9dd85533f8ff`,
            order
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
    order: {},
    status: '',
}

const orderPosterSlice = createSlice({
    name: 'orderPoster',
    initialState,
    reducer: {},
    extraReducers: {
        [sendOrderPoster.pending]: (state) => {
            state.order = {}
            state.status = 'loading'
        },
        [sendOrderPoster.fulfilled]: (state, action) => {
            state.order = action.payload
            state.status = 'send'
        },
        [sendOrderPoster.rejected]: (state) => {
            state.order = {}
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

export const orderPoster = orderPosterSlice.reducer
