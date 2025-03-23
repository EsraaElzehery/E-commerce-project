import {  createSlice } from "@reduxjs/toolkit";

const responsiveCartSlice = createSlice({
    name: 'responsivecart',
    initialState: false,
    reducers:{
        openCart: ()=> true,
        closeCart: ()=>false
    }
})

export const {openCart, closeCart} = responsiveCartSlice.actions;

export default responsiveCartSlice.reducer;