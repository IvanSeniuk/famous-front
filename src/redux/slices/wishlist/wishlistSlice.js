import { createSlice } from '@reduxjs/toolkit'
import { getWishlistFromLS } from '../../../utils/getWishlistFromLS'
//const initialState = {
//    totalPrice: 0,
//    totalCount: 0,
//    items: [],
//}
const initialState = getWishlistFromLS()

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        //addItem(state, action) {
        //    state.items.push(action.payload)
        //    state.totalPrice = state.items.reduce((sum, obj) => {
        //        return obj.price + sum
        //    }, 0)
        //},

        changeItemWishlist(state, action) {
            const findItem = state.items.find(
                (obj) => obj.product_id === action.payload.product_id
            )
            if (findItem) {
                state.items = state.items.filter(
                    (obj) => obj.product_id !== action.payload.product_id
                )
            } else {
                state.items.push({ ...action.payload, typeProduct: 'other' })
            }
        },
        changeItemWishlistPizza(state, action) {
            const findItem = state.items.find(
                (obj) => obj.product_id === action.payload.product_id
            )
            if (findItem) {
                state.items = state.items.filter(
                    (obj) => obj.product_id !== action.payload.product_id
                )
            } else {
                state.items.push({ ...action.payload, typeProduct: 'pizza' })
            }
        },

        //removeItem(state, action) {
        //    state.items = state.items.filter(
        //        (obj) => obj.product_id !== action.payload
        //    )
        //},
    },
})

// Action creators are generated for each case reducer function
export const { changeItemWishlist, changeItemWishlistPizza } =
    wishlistSlice.actions

export default wishlistSlice.reducer
