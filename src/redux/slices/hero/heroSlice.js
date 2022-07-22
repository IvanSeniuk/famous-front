import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    heroHeight: 0,
    headerHeight: 0,
}

export const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {
        checkHeroHeight(state, actions) {
            state.heroHeight = actions.payload
        },
        checkHeaderHeight(state, actions) {
            state.headerHeight = actions.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { checkHeroHeight, checkHeaderHeight } = heroSlice.actions

export default heroSlice.reducer
