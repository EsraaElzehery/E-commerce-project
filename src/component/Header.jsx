import Logo from '../assets/Logo.png'
import { LuShoppingCart } from "react-icons/lu";
import ResponsiveMenu from './ResponsiveMenu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, closeMenu } from '../redux/Reducers/menuSlice';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router';
import {selectCartCount } from '../redux/Reducers/cartSlice'

export default function Header() {
const cartCount = useSelector(selectCartCount )

    const dispatch = useDispatch();
const isMenuOpen = useSelector((state)=> state.menu.isMenuOpen)

  return (
    
    <div className="w-[100%] shadow-xl  bg-white fixed z-50 h-[75px] inset-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-2 py-2">
<div className='flex items-center justify-between'>
    <img src={Logo} alt='' className='w-22'/>
</div>
<div className='flex items-center justify-center gap-5 '>
    <ul className={`hidden md:flex items-center justify-between gap-4 ${isMenuOpen? "block": "hidden"}`}  >
      <Link to="/" ><li onClick={()=>dispatch(closeMenu())} className='font-semibold text-lg hover:text-red-500 hover:scale-105 transition-all ' >Home</li></Link>
     <Link to="/mens"><li onClick={()=>dispatch(closeMenu())} className='font-semibold text-lg hover:text-red-500 hover:scale-105 transition-all '>Mens</li></Link>
    <Link to="/womens"><li onClick={()=>dispatch(closeMenu())}  className='font-semibold text-lg hover:text-red-500 hover:scale-105 transition-all'>Womens</li></Link>
     <Link to="/kids"><li onClick={()=>dispatch(closeMenu())} className='font-semibold text-lg  hover:text-red-500 hover:scale-105 transition-all'>Kids</li></Link>
    </ul>

    
  <Link to="/login" > <button className='bg-red-600 py-1 px-4 md:block hidden
    text-center rounded-md text-white font-semibold text-lg hover:bg-red-500 cursor-pointer'>Login</button>
   </Link>

   <Link to="/cart">
   <div className='relative '>
       <LuShoppingCart className='w-7 h-7 '/>
        <div className='absolute bg-red-600 -right-3 -top-2 rounded-full w-5 h-5 
        text-center flex items-center justify-center'><span className='text-white font-normal text-sm'>{cartCount}</span></div>
    </div>
    </Link>
    {
        isMenuOpen ? <FaBarsStaggered  className="w-6 h-6 cursor-pointer  text-black md:hidden" onClick={()=>dispatch(toggleMenu())}/> :
         <FaBars  className="w-6 h-6 cursor-pointer text-black md:hidden" onClick={()=>dispatch(toggleMenu())}/>
    }
    
</div>

 </div>
      <ResponsiveMenu/>
    </div>
  )
}
