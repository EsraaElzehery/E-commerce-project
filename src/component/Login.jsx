import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

export default function Login() {

const [showPassword, setShowPassword] = useState(false);

const toggelShow =()=>{
  setShowPassword(!showPassword)
}

  return (
    
      <div className="bg-gray-100 flex items-center justify-center px-5 py-20 min-h-screen">
<div className="w-[600px] rounded-lg py-4 space-y-6 bg-white px-4 ">
  <h1 className="text-center text-2xl font-semibold py-4 ">Login to Your Accont </h1>
  <form className="space-y-5">
<div className="space-y-2 text-center">
  <label htmlFor="email" className="block text-start  font-semibold text-lg">Email:</label>
  <input placeholder="Enter your email" type="email" id="email" className="border-1 border-gray-300 rounded-md
   px-4 py-2  bg-gray-100 w-full focus:outline-none focus:ring focus:ring-red-600 " required />
</div>

<div className="space-y-2 relative ">
  <label htmlFor="password" className="block text-lg font-semibold " >Password: </label>
  <div className="flex items-center justify-center relative ">
  <input className="px-4 py-2 w-full bg-gray-100 border-1 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-600 " 
   placeholder="Enter your password"  id="password" type={showPassword ? 'text' : 'password'} required />

   <button type="button" onClick={toggelShow} className="right-3 absolute">
     {
      showPassword ? (<IoEye className="w-5 h-5 cursor-pointer"/>) : (<IoMdEyeOff className="w-5 h-5 cursor-pointer"/>)
     }
   </button>
   </div>

  
</div>

<div className="place-items-center mx-auto text-center py-2 space-y-4">
  <button type="submit" className="bg-red-600 font-semibold cursor-pointer hover:bg-red-500 text-white mx-auto w-[60%]
   rounded-lg py-2 px-4 text-center" >Submit</button>
   <p className="text-sm text-gray-500">Don't have an account ?  <a href="/" className="text-sm text-red-600 border-b-1
    border-red-600"> Sign Up</a></p>
</div>

  </form>
</div>
      
    </div>
  )
}
