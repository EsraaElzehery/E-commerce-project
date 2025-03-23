import { Link } from "react-router";
import { useSelector , useDispatch} from "react-redux";
import { toggleMenu  } from "../redux/Reducers/menuSlice";
export default function ResponsiveMenu() {
    const isMenuOpen = useSelector((state)=> state.menu.isMenuOpen)
    const dispatch = useDispatch()
  return (
    <div  className={`${isMenuOpen ? 'left-0': '-left-[100%]'} top-0  h-full w-[75%] fixed z-50 bg-white
    flex flex-col items-center justify-between transition-all duration-700 rounded-md shadow-md md:hidden px-8 `}>

      <nav className=" mt-20">
        
    <ul className='flex flex-col  items-center justify-between gap-10' >
      
 
      <Link to="/" ><li onClick={()=> dispatch(toggleMenu())} className='font-semibold text-lg hover:text-red-500 hover:scale-105 transition-all ' >Home</li></Link>
     <Link to="/mens"><li onClick={()=> dispatch(toggleMenu())}  className='font-semibold text-lg hover:text-red-500 hover:scale-105 transition-all '>Mens</li></Link>
    <Link to="/womens"><li onClick={()=> dispatch(toggleMenu())}  className='font-semibold text-lg hover:text-red-500 hover:scale-105 transition-all'>Womens</li></Link>
     <Link to="/kids"><li onClick={()=> dispatch(toggleMenu())}   className='font-semibold text-lg  hover:text-red-500 hover:scale-105 transition-all'>Kids</li></Link>
  <Link to="/login">
   <button className='bg-red-600 py-1 px-4 
    text-center rounded-md text-white font-semibold text-lg hover:bg-red-500 cursor-pointer'>Login</button>
  </Link>
    </ul>

    
    
   
    
      </nav>
    </div>
  )
}
