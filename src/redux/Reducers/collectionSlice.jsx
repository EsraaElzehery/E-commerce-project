import { createSlice } from "@reduxjs/toolkit";
import collectionData from "../../component/collectionData";


const collectionSlice = createSlice({
    name: 'collection',
    initialState:{
        products: collectionData,
    },
    reducers: {}
})

export const selectedCollection= (state) => state.collection.products
export default collectionSlice.reducer