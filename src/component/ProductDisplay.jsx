import { Star } from "lucide-react";
import { useDispatch} from "react-redux";
import { addToCart } from "../redux/Reducers/cartSlice";


export default function ProductDisplay({productsFind}) {
    
    
const dispatch = useDispatch();
 

  return (

    <div className="grid grid-cols-1 md:grid-cols-2   gap-10 py-10 ">
    <div className="flex gap-5 " >
        <div className="flex flex-col gap-5 ">
      <img src={productsFind.image} className="w-25  rounded-md" />
      <img src={productsFind.image1} className="w-25  rounded-md"/>
      <img src={productsFind.image2} className="w-25  rounded-md"/>
      <img src={productsFind.image3}className="w-25  rounded-md" />
    </div>
<div className="">
    <img src={productsFind.image} className="w-120  md:w-112 rounded-md"/>
</div>
    </div>
    <div className=" space-y-4">
        <h1 className="font-bold md:text-2xl text-xl ">{productsFind.name}</h1>
        <div className="flex  gap-2 ">
            <Star fill="red"/>
            <Star fill="red"/>
            <Star fill="red"/>
            <Star fill="red"/>
            <Star />
            <p>(122)</p>
    </div>
    <div className="flex gap-5 items-center">
        <div className="text-gray-600 line-through font-semibold md:text-xl text-lg " >${productsFind.old_price}</div>
        <div className="font-semibold md:text-2xl text-xl text-red-600">${productsFind.new_price}</div>
</div>
<div>
    <p className="text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore voluptatem nesciunt
         facere totam suscipit illum laboriosam nulla, corporis amet consequuntur, fugiat modi voluptate libero</p>
        
</div>
<div className="space-y-6">
    <h3 className="font-semibold text-gray-600 md:text-2xl text-xl ">Select Size:</h3>
    <div className="flex md:gap-5 gap-2 text-gray-800">
<div className="md:text-xl text-lg bg-gray-200 p-4  rounded-sm font-semibold">S</div>
<div className="md:text-xl text-lg bg-gray-200 p-4  rounded-sm font-semibold">M</div>
<div className="md:text-xl text-lg bg-gray-200 p-4 rounded-sm font-semibold">L</div>
<div className="md:text-xl text-lg bg-gray-200 p-4 rounded-sm font-semibold">XL</div>
<div className="md:text-xl text-lg bg-gray-200 p-4 rounded-sm font-semibold">XXL</div>

    </div>

    




<button onClick={()=> dispatch(addToCart(productsFind))}
 className="cursor-pointer bg-red-600 py-2 px-4 text-white rounded-md my-2 w-50 font-semibold text-md">Add to Cart</button>


<p className="mt-2 text-gray-800 "><span className="text-black font-semibold p-2">Category:</span>{productsFind.category}</p>
<p className="text-gray-800"><span className="text-black font-semibold p-2 text-start">Tags:</span>Modern, Latest</p>


    </div>
   
    </div>
</div>
  )
}
