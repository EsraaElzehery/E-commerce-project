import { useDispatch} from "react-redux"
import { Link } from "react-router"
import { addToCart} from "../redux/Reducers/cartSlice";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Item({product}) {
const dispatch = useDispatch();
// const cartCount = useSelector(selectCartCount )

  return (
    <div className='pt-4' >
       
        <div className='relative group hover:scale-105 transition-all duration-200 px-2  overflow-hidden'>
          <LazyLoadImage effect="opacity" width="100%" height="auto"
           src={product.image} className='rounded-md w-full mx-auto'/>


<div className='  items-center mx-auto  opacity-0 group-hover:opacity-100 absolute gap-4 justify-center z-50
 bg-white/70 bg-opacity-100 rounded-md px-2  overflow-hidden bottom-0 w-full  transform 
 translate-y-full transition-transform duration-300 group-hover:translate-y-0'>

   
   <div className="flex items-center gap-3 md:gap-6 justify-evenly  md:py-6 py-4 pr-4 ">
   <button className="cursor-pointer"  onClick={()=> dispatch(addToCart(product))}><FaCartArrowDown className="md:w-7 md:h-7
    w-5 h-5 text-red-600 hover:text-red-500"/></button>
   <Link to={`/products/${product.id}`}>  <button className=" rounded-md
    cursor-pointer text-sm md:text-lg text-white py-1 px-2 bg-red-600 hover:bg-red-500 flex justify-center
      items-center">See More<span className="text-center flex items-center pl-1 md:pl-2 pt-1 
    right-10  justify-center"> <FaLongArrowAltRight className=""/></span>
   </button> </Link>
   </div>
   
   </div>
  </div>
  <div className="place-items-center md:space-y-2 space-y-1 ">
  <p className='text-center font-semibold md:text-xl mt-2'>{product.name}</p>
<p className=" rounded-lg  text-green-700 flex gap-2 items-center justify-center
 font-bold text-lg text-center md:text-xl "><span className=" text-center text-black md:text-xl font-semibold">Price:</span>{product.new_price}$</p>
 </div>
            </div>    
              


       
           
  )
}
