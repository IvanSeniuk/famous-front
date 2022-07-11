import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cart/cartSlice.js'
import ui from './slices/ui/uiSlice.js'
import auth from './slices/auth/authSlice'
import { products } from './slices/products/productsSlice'
import { banners } from './slices/banners/bannersSlice'
import { product } from './slices/products/productSlice'
import { productsPoster } from './slices/poster/productsSlice/ProductsSlice.js'
import { productPoster } from './slices/poster/productsSlice/ProductSlice.js'
import { categoriesPoster } from './slices/poster/productsSlice/CategoriesSlice.js'
import { orderPoster } from './slices/poster/orderSlice/OrderSlice.js'
import { actions } from './slices/actions/actionsSlice'

export const store = configureStore({
    reducer: {
        cart,
        ui,
        auth,
        products,
        product,
        productsPoster,
        productPoster,
        orderPoster,
        categoriesPoster,
        banners,
        actions,
    },
})
