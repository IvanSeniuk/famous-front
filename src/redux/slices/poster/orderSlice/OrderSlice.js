import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../../http/axios'

export const sendOrderPoster = createAsyncThunk(
    'order/sendOrderPoster',
    async (order) => {
        const { data } = await axios.post(`api/order`, order)
        console.log(data)
        return data
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
    statusPoster: '',
    error: '',
}

const orderPosterSlice = createSlice({
    name: 'orderPoster',
    initialState,
    reducer: {},
    extraReducers: {
        [sendOrderPoster.pending]: (state) => {
            state.order = {}
            state.status = 'loading'
            state.statusPoster = 'loading'
            state.error = ''
        },
        [sendOrderPoster.fulfilled]: (state, action) => {
            if (action.payload.response) {
                state.order = action.payload
                state.status = 'send'
                state.statusPoster = 'succes'
                state.error = ''
            } else {
                state.order = {}
                state.status = 'send'
                state.statusPoster = 'error'
                state.error = action.payload
            }
        },
        [sendOrderPoster.rejected]: (state, action) => {
            state.order = action.payload
            state.status = 'error'
            state.statusPoster = 'error'
            state.error = ''
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

export default orderPosterSlice.reducer
