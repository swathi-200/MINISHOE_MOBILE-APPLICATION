import { createSlice } from "@reduxjs/toolkit";
import products from '../data/product'
const initialState={
    production:products,
    selectedproducts:[],
}

export const productslice=createSlice({
    name:"products",
    initialState:initialState,
    reducers:{
          setselectedproduct:(state,action)=>{
            console.log("action.payload",action.payload);
           const productid=action.payload;
         //  const productData=JSON.stringify(state.production,null,2)
          // console.log("productData",productData);
         //  state.selectedproducts=JSON.parse(productData).find((p)=>p.id===productid);
         state.selectedproducts=state.production.find((p)=>p.id===productid);
           console.log("state.selectedproducts",JSON.stringify(state.selectedproducts));
          }
    },
})

