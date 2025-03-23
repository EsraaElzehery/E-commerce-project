
import { createSlice } from "@reduxjs/toolkit";



const initialState={

    cartItems: [],
totalQuantity:0,
totalPrice:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += 1;
             }
              else{
                    state.cartItems.push({...action.payload, quantity:1})
                }
                state.totalQuantity = state.cartItems.reduce((total, item)=>
                total + item.quantity,0);

                state.totalPrice = state.cartItems.reduce((total, item)=>
                total + item.quantity * (item.new_price|| 0), 0)
            
            },
            removeFromCart:(state, action)=>{
                state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload)
    
            },

increaseQuantity: (state, action)=>{
const existingItem = state.cartItems.find((item)=> item.id === action.payload.id)
if(existingItem){
existingItem.quantity += 1;
}

state.totalQuantity = state.cartItems.reduce((total,item)=>
    total + item.quantity, 0
)

state.totalPrice = state.cartItems.reduce((total, item)=>
total + item.quantity * (item.new_price|| 0), 0
)

},

            decreaseQuantity: (state, action)=>{
                const existingItem= state.cartItems.find(item => item.id === action.payload.id)
                if(existingItem.quantity > 1 ){
                    existingItem.quantity -= 1;
                }else {
                    state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload)
                }
                state.totalQuantity = state.cartItems.reduce((total,item)=>
                    total + item.quantity, 0)
                
                state.totalPrice = state.cartItems.reduce((total, item)=>
                total + item.quantity * (item.new_price ||0), 0
                )
                

            },

            clearItems: (state)=>{
                state.cartItems= [];
                state.totalPrice =0;
                state.totalQuantity = 0;
            }
        
            
}
        

    }
)


export const { addToCart, decreaseQuantity, removeFromCart,increaseQuantity ,clearItems} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartCount = (state)=> state.cart.cartItems.reduce((total, item)=> total + item.quantity, 0);

