import { configureStore} from "@reduxjs/toolkit";
// import menuSlice from "./Reducers/menuSlice";
import menuReducer from './Reducers/menuSlice'
import productReducers from "../redux/Reducers/productSlice";
import collectionReducers from './Reducers/collectionSlice'
import cartReducers from './Reducers/cartSlice'
import loadingReducers from './Reducers/loadingSlice'
import responsiveCartReducers from './Reducers/responsiveCartSlice'

const store = configureStore({
    reducer:{
        menu: menuReducer,
        collection: collectionReducers,
        product: productReducers,
        cart: cartReducers,
        loading: loadingReducers,
        responsivecart: responsiveCartReducers, 
    },
})

export default store;