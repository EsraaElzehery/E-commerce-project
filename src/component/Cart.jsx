import {  useDispatch, useSelector } from "react-redux"
import EmptyCart from '../assets/EmptyCart.png'
import {decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/Reducers/cartSlice'

import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import ResponsiveCart from "./ResponsiveCart";
import { useEffect } from "react";
import Footer from "./Footer";


export default function Cart() {

const dispatch = useDispatch();
const totalPrice = useSelector((state)=> state.cart.totalPrice)
const cartItems = useSelector((state) => state.cart.cartItems)

useEffect(()=>
  window.scrollTo(0,0)
)

  return (
    <>
    <div className="">
    <div className="max-w-7xl mx-auto pt-35 place-items-center">

{
  cartItems.length === 0 ? (

<div className="flex items-center py-20 px-2 justify-center">
  <img src={EmptyCart} className="w-80 h-80 md:w-100 md:h-100" />
</div>


  ) : (
    <div className="">
        <div className="  border-b-1 border-gray-600 hidden md:grid  grid-cols-2 items-center justify-evenly py-3 ">
<div className="flex items-center md:gap-18 md:px-6 gap-2   " >
<h2 className="md:font-semibold md:text-xl text-sm">Product</h2>
<h2 className="md:font-semibold md:text-xl text-sm">Title</h2>
</div>

<div className= "flex  justify-evenly items-center place-items-center w-full  ">    
<ul className="flex gap-25  items-center  ">
  <li className="md:font-semibold md:text-xl text-sm w-20  ">Price</li>
  <li className="md:font-semibold md:text-xl text-sm w-20">Quantity</li>
  
  <li className="md:font-semibold md:text-xl text-sm w-20">Remove</li>
  

</ul>


    </div>
</div>

    


      {
        cartItems.map((item)=>{
          if(cartItems.length > 0){
return(
  
    <div key={item.id} className="hidden md:grid grid-cols-2  items-center border-b-1 border-gray-400 md:py-3 py-1 ">
      <div className="items-center flex md:gap-18 gap-6 px-5 ">
      <img src={item.image} className="md:w-16 w-10  rounded-md"/>
<h1 className="md:text-lg text-gray-700 w-[100%]">{item.name}</h1>
</div>
<div className="flex  justify-evenly items-center place-items-center w-full ">
  <ul className="flex gap-25  items-center">
    <li className="text-lg  w-20  text-center font-semibold text-green-700" >{item.new_price * item.quantity}$</li>
    <li className="md:text-lg text-sm md:py-2 md:px-4  " >
      <span className="flex items-center justify-between gap-1 w-20  ">
        <CiSquarePlus className="w-7 h-7 text-black" onClick={()=> dispatch(increaseQuantity(item))} />
        <span>{item.quantity}</span>
        <CiSquareMinus className="w-7 h-7 text-black" onClick={()=> dispatch(decreaseQuantity(item))} />
      </span>
    </li>
    
   <button onClick={()=> dispatch(removeFromCart(item.id))} 
   className="md:text-lg text-red-600 hover:text-red-500  w-20 "><RiDeleteBin6Line className="w-6 h-6 text-center"/>
    </button>
  </ul>
</div>

          </div>
          

          ) }
         })

      }
    
<div className="hidden md:block py-20 space-y-5 md:px-0 px-4 ">
  
  <h1 className="font-semibold text-black text-xl">Cart Totals</h1>
<div className="flex justify-between items-center border-b-1 md:w-[50%] pb-4 border-gray-400 ">
  <h2 >Subtotal</h2>
  <h2 className="text-green-700 font-semibold text-lg">{totalPrice}$</h2>
</div>
<div className="flex justify-between items-center border-b-1 md:w-[50%] pb-4 border-gray-400 ">
  <h2 className="text-center">Shipping Free</h2>
  <h2>Free</h2>
</div>
<div className="flex justify-between items-center md:w-[50%] pb-4 ">
  <h2 className="text-center font-semibold text-black text-xl">Total</h2>
  <h2 className="text-green-700 font-semibold text-xl">{totalPrice}$ </h2>
</div>
<div className="text-center md:text-start">
<button className="bg-red-600 rounded-md py-2 px-4 text-center text-white">PROCEED TO CHECKOUT</button>
</div>
</div>
</div>
  )
}


   </div>
   

   </div>
  <ResponsiveCart/>

   </>
  )}
