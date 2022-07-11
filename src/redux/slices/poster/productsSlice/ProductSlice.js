import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductPoster = createAsyncThunk(
    'productPoster/fetchProductPoster',
    async (product_id) => {
        const { data } = await axios.get(
            `https://joinposter.com/api/menu.getProduct?token=557693:63509286feaa600b23bb9dd85533f8ff&product_id=${product_id}`
        )
        return data.response
    }
)

const initialState = {
    item: {},
    status: '',
}

const productPosterSlice = createSlice({
    name: 'productPoster',
    initialState,
    reducer: {
        //addAddition(state, action) {
        //    console.log(action.payload)
        //    state.item.additions.push(action.payload)
        //},
    },
    extraReducers: {
        [fetchProductPoster.pending]: (state) => {
            state.item = {}
            state.status = 'loading'
        },
        [fetchProductPoster.fulfilled]: (state, action) => {
            state.item = action.payload
            state.status = 'loaded'
        },
        [fetchProductPoster.rejected]: (state) => {
            state.item = {}
            state.status = 'error'
        },
    },
})
//export const { addAddition } = productSlice.actions
export const productPoster = productPosterSlice.reducer
