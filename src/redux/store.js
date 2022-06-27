import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cart/cartSlice.js'
import ui from './slices/ui/uiSlice.js'
import auth from './slices/auth/authSlice'
import { products } from './slices/products/productsSlice'
import { product } from './slices/products/productSlice'

export const store = configureStore({
    reducer: {
        cart,
        ui,
        auth,
        products,
        product,
    },
})
