
import { configureStore } from '@reduxjs/toolkit'
import cardSlice from "../features/products/CardSlice"
import productSlice from "../features/products/prodSlice"

const store = configureStore({
    reducer: {
        Card: cardSlice,
        prod: productSlice
    }

})

export default store