import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}

export const productSlice=createSlice({
    name:'Product',
    initialState,
    reducers:{
        ADDTOCART:(state, action)=>{
            state.products.push(action.payload)
        },
        REMOVECART:(state, action)=>{
            const filter=state.products.filter((item)=>item.id!=action.payload.id)
            state.products=filter
        }
    }
})
export const {ADDTOCART, REMOVECART}=productSlice.actions

export default productSlice.reducer