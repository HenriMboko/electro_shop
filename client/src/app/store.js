
import { configureStore } from '@reduxjs/toolkit'
import cardSlice from "../features/products/CardSlice"
import productSlice from "../features/products/prodSlice"
import authSlice from "../features/auth/authSlice"

const store = configureStore({
    reducer: {
        Card: cardSlice,
        prod: productSlice,
        auth: authSlice
    }

})

export default store