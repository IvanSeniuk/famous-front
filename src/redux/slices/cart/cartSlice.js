import { createSlice } from '@reduxjs/toolkit'
import { getCartFromLS } from '../../../utils/getCartFromLS'
//const initialState = {
//    totalPrice: 0,
//    totalCount: 0,
//    items: [],
//}
const initialState = getCartFromLS()

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //addItem(state, action) {
        //    state.items.push(action.payload)
        //    state.totalPrice = state.items.reduce((sum, obj) => {
        //        return obj.price + sum
        //    }, 0)
        //},

        addItem(state, action) {
            let check = true
            state.items.forEach((obj) => {
                if (
                    obj.product_id === action.payload.product_id &&
                    obj.product_name === action.payload.product_name
                ) {
                    obj.count++
                    obj.alikePrice += action.payload.price
                    check = false
                }
            })
            if (check) {
                state.items.push({
                    ...action.payload,
                    count: 1,
                    alikePrice: action.payload.price,
                })
            }
            //state.items.push(action.payload)

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
            state.totalCount = state.items.reduce((total, obj) => {
                return obj.count + total
            }, 0)
        },
        addItemPizza(state, action) {
            let check = true
            let add = false
            state.items.forEach((obj) => {
                if (obj.price != action.payload.price) {
                    add = false
                } else if (
                    obj.additions.length === 0 &&
                    action.payload.additions.length === 0
                ) {
                    add = true
                } else if (
                    (obj.additions.length !=
                        action.payload.additions.length) ===
                    0
                ) {
                    add = false
                } else if (
                    obj.additions.length === action.payload.additions.length
                ) {
                    add = true
                    // obj.additions.forEach((option) => {
                    //if (
                    //    option.title === action.payload.title &&
                    //    option.count === action.payload.count &&
                    //    option.check === action.payload.check
                    //) {
                    //add = true
                    //}
                    //})
                }
                if (
                    obj.product_id === action.payload.product_id &&
                    obj.side.dish_modification_id ===
                        action.payload.side.dish_modification_id &&
                    obj.size.dish_modification_id ===
                        action.payload.size.dish_modification_id &&
                    add
                ) {
                    obj.count = obj.count + action.payload.count
                    obj.alikePrice += action.payload.price
                    check = false
                }
            })
            if (check) {
                state.items.push({
                    ...action.payload,
                    count: action.payload.count,
                    alikePrice: action.payload.price,
                })
            }
            //state.items.push(action.payload)

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
            state.totalCount = state.items.reduce((total, obj) => {
                return obj.count + total
            }, 0)
        },
        minusItem(state, action) {
            const findItem = state.items.find(
                (el, idx) =>
                    typeof el === 'object' && idx === action.payload.indexCart
            )
            console.log(findItem)
            if (findItem) {
                findItem.count--
            }
            if (findItem.count === 0) {
                console.log(
                    (state.items = state.items
                        .slice(0, action.payload.indexCart)
                        .concat(
                            state.items.slice(action.payload.indexCart + 1)
                        ))
                )
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
            state.totalCount = state.items.reduce((total, obj) => {
                return obj.count + total
            }, 0)
        },
        plusItem(state, action) {
            const findItem = state.items.find(
                (el, idx) =>
                    typeof el === 'object' && idx === action.payload.indexCart
            )
            console.log(findItem)
            if (findItem) {
                findItem.count++
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
            state.totalCount = state.items.reduce((total, obj) => {
                return obj.count + total
            }, 0)
        },
        removeItem(state, action) {
            state.items = state.items
                .slice(0, action.payload.indexCart)
                .concat(state.items.slice(action.payload.indexCart + 1))
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
            state.totalCount = state.items.reduce((total, obj) => {
                return obj.count + total
            }, 0)
        },
        removeCart(state) {
            ;(state.items = []), (state.totalPrice = 0), (state.totalCount = 0)
        },
        addAppliances(state, action) {
            state.appliances = action.payload
        },
        addPromocode(state, action) {
            state.promocode = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addItem,
    addItemPizza,
    minusItem,
    removeItem,
    plusItem,
    addAppliances,
    removeCart,
    addPromocode,
} = cartSlice.actions

export default cartSlice.reducer
