import {  useDispatch, useSelector } from "react-redux"
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import {decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/Reducers/cartSlice'
import { useEffect } from "react";

export default function ResponsiveCart() {

  const cartItems = useSelector((state)=> state.cart.cartItems)
  const totalPrice = useSelector((state)=> state.cart.totalPrice)
const dispatch = useDispatch();

useEffect(()=>
  window.scrollTo(0,0)
)

  return (
<div className="md:hidden block">
    <div className="place-items-center py-15 space-y-4 ">
 {    

cartItems.map((item)=>{
                if(cartItems.length > 0){
                    return(
                        <>
      <div key={item.id} className="px-4 flex items-center justify-between space-y-4 gap-6 border-b-1 ">
                            <div className=" w-[60%] space-y-1">
<img src={item.image} className="w-20 h-25 rounded-md"/>
<h1 className="text-sm text-gray-700 w-50">{item.name}</h1>
<h1 className="font-semibold">Price: <span className="text-green-700 font-semibold ">{item.new_price * item.quantity}$</span></h1>
</div>
<div className="flex items-center justify-between gap-2 place-items-center text-center  ">
    
    <button onClick={()=>dispatch(increaseQuantity(item))}><CiSquarePlus className="w-6 h-6 cursor-pointer text-black"/></button>
    <span>{item.quantity}</span>
    <button onClick={()=> dispatch(decreaseQuantity(item))}><CiSquareMinus className="w-6 h-6 cursor-pointer text-black"/> </button>
    <div className="flex items-center justify-end  pl-5 ">
<button onClick={()=> dispatch(removeFromCart(item.id))}><RiDeleteBin6Line className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-500"/></button></div>
                        </div>

                      
</div>
 
</>

                    )
                }
            })
          }
        <div className="px-4 py-8 space-y-3 ">
        <h1 className="font-semibold text-black text-xl">Cart Totals</h1>
<div className="flex justify-between items-center border-b-1 w-full pb-4 border-gray-400 ">
  <h2 >Subtotal</h2>
  <h2 className="text-green-700 font-semibold text-lg">{totalPrice}$</h2>
</div>
<div className="flex justify-between items-center border-b-1  pb-4 border-gray-400 ">
  <h2 className="text-center">Shipping Free</h2>
  <h2>Free</h2>
</div>
<div className="flex justify-between items-center pb-4 ">
  <h2 className="text-black font-semibold text-xl">Total</h2>
  <h2 className="text-green-700 font-semibold text-xl">{totalPrice}$ </h2>
</div>
<div className="text-center md:text-start">
<button className="bg-red-600 rounded-md py-2 px-4 text-center text-white">PROCEED TO CHECKOUT</button>
</div>
</div> 
    </div>
       
          </div>
  )
}
