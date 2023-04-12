import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./cartslice";
import {productslice} from './ProductSlice'
export const store=configureStore({
    reducer:{
         products:productslice.reducer,
         cart:cartslice.reducer
    }
})