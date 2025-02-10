import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./Cartslice"
import authSlice from "./AuthSlice"
const store = configureStore({
    reducer:{
        cart:CartSlice,
        auth:authSlice
    }
})

export default store;