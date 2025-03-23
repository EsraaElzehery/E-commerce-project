import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../component/ProductData";


const productSlice = createSlice({
    name: 'product',
    initialState:{
        items: ProductData,
    },
    reducers:{}
})
export const selectedProduct = (state)=> state.product.items;

export default productSlice.reducer; 