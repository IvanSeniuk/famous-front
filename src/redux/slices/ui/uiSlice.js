import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartVisible: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleCart(state) {
            state.cartVisible = !state.cartVisible
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleCart } = uiSlice.actions

export default uiSlice.reducer
