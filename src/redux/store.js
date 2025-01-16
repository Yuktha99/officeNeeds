import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slices/ProductsSlice'

export const store = configureStore({
    reducer:{
        product: ProductReducer
    }
})