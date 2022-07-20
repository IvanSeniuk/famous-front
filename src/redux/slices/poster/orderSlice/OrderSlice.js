import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../../http/axios'
//import { $authHost } from '../../../../http'

export const sendOrderPoster = createAsyncThunk(
    'order/sendOrderPoster',
    async (order) => {
        const { data } = await axios.post(`api/order`, order)
        console.log(data)
        return data
    }
)

export const getOrderPoster = createAsyncThunk(
    'order/getOrderPoster',
    async (id) => {
        const { data } = await axios.get(`api/order${id}`)
        return data
    }
)
export const getOrdersPoster = createAsyncThunk(
    'order/getOrdersPoster',
    async () => {
        const { data } = await axios.get(`api/order`)
        return data
    }
)

const initialState = {
    order: {},
    status: '',
    statusPoster: '',
    error: '',
    orders: [],
    getOrdersStatus: '',
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
        [getOrderPoster.pending]: (state) => {
            state.getOrderStatus = 'loading'
        },
        [getOrderPoster.fulfilled]: (state, action) => {
            state.order = action.payload.response
            state.getOrderStatus = 'loaded'
        },
        [getOrderPoster.rejected]: (state) => {
            state.getOrderStatus = 'error'
        },
        [getOrdersPoster.pending]: (state) => {
            state.getOrdersStatus = 'loading'
        },
        [getOrdersPoster.fulfilled]: (state, action) => {
            state.orders = action.payload.response
            state.getOrdersStatus = 'loaded'
        },
        [getOrdersPoster.rejected]: (state) => {
            state.getOrdersStatus = 'error'
        },
    },
})

export default orderPosterSlice.reducer
