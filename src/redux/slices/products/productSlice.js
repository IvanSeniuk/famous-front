import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { setHeaders } from '../../../http/userAPI'

import { $authHost } from '../../../http'
import axios from '../../../http/axios'

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id) => {
        const { data } = await axios.get(`api/product_p/${id}`)

        return data
    }
)
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product) => {
        try {
            const { data } = await $authHost.put(
                `api/product_p/${product.id}`,
                product
            )
            console.log(data)
            return data
        } catch (err) {
            console.log(err.response.data)
            return err.response.data
        }
    }
)

const initialState = {
    item: {},
    status: '',
    statusUpdate: '',
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducer: {
        //addAddition(state, action) {
        //    console.log(action.payload)
        //    state.item.additions.push(action.payload)
        //},
    },
    extraReducers: {
        [fetchProduct.pending]: (state) => {
            state.item = {}
            state.status = 'loading'
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.item = action.payload
            state.status = 'loaded'
        },
        [fetchProduct.rejected]: (state) => {
            state.item = {}
            state.status = 'error'
        },
        [updateProduct.pending]: (state) => {
            return {
                ...state,
                statusUpdate: 'pending',
            }
        },
        [updateProduct.fulfilled]: (state, action) => {
            if (action.payload) {
                state.item = action.payload
                state.statusUpdate = 'success'
            } else {
                return {
                    ...state,
                }
            }
        },
        [updateProduct.rejected]: (state) => {
            return {
                ...state,
                statusUpdate: 'error',
                //updateError: action.payload,
            }
        },
    },
})
//export const { addAddition } = productSlice.actions
export const product = productSlice.reducer
