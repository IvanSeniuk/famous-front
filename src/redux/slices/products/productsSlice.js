import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $authHost } from '../../../http'
import axios from '../../../http/axios'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await axios.get('api/product_p')
        return data
    }
)
export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product) => {
        const { data } = await $authHost.post('api/product_p', product)
        return data
    }
)
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        const { data } = await $authHost.delete(`api/product_p/${id}`)
        return data
    }
)

const initialState = {
    items: [],
    status: 'loading',
    createStatus: 'loading',
    deleteStatus: 'loading',
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'loaded'
        },
        [fetchProducts.rejected]: (state) => {
            state.items = []
            state.status = 'error'
        },
        [createProduct.pending]: (state) => {
            state.createStatus = 'loading'
        },
        [createProduct.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.createStatus = 'loaded'
        },
        [createProduct.rejected]: (state) => {
            state.createStatus = 'error'
        },
        [deleteProduct.pending]: (state) => {
            state.deleteStatus = 'loading'
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
            state.deleteStatus = 'loaded'
        },
        [deleteProduct.rejected]: (state) => {
            state.deleteStatus = 'error'
        },
    },
})

export const products = productsSlice.reducer
