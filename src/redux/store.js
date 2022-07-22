import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cart/cartSlice.js'
import wishlist from './slices/wishlist/wishlistSlice.js'
import ui from './slices/ui/uiSlice.js'
import auth from './slices/auth/authSlice'
import { products } from './slices/products/productsSlice'
import { banners } from './slices/banners/bannersSlice'
import { product } from './slices/products/productSlice'
import { productsPoster } from './slices/poster/productsSlice/ProductsSlice.js'
import { productPoster } from './slices/poster/productsSlice/ProductSlice.js'
import { categoriesPoster } from './slices/poster/productsSlice/CategoriesSlice.js'
import orderPosterSlice from './slices/poster/orderSlice/OrderSlice.js'
import { actions } from './slices/actions/actionsSlice'
import { contacts } from './slices/contacts/contactsSlice.js'
import hero from './slices/hero/heroSlice'

export const store = configureStore({
    reducer: {
        wishlist,
        cart,
        ui,
        auth,
        products,
        product,
        productsPoster,
        productPoster,
        orderPosterSlice,
        categoriesPoster,
        banners,
        actions,
        contacts,
        hero,
    },
})
