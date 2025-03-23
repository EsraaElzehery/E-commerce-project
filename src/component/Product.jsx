import { useSelector } from "react-redux"
import { selectedProduct } from "../redux/Reducers/productSlice"
import {Route,Routes} from 'react-router'
import Item from "./Item"
import SingleProduct from "./SingleProduct"



export default function Product() {

    const products = useSelector(selectedProduct)

  return (
    <>
    <div>
      <div className="md:py-20 py-15 ">
      <div className="max-w-7xl mx-auto space-y-6 place-items-center">
<h1 className="text-center text-2xl md:text-4xl text-black font-bold ">Top Seller</h1>
<p className="text-black text-center md:px-56 px-4">Lorem ipsum dolor sit, 
    amet consectetur adipisicing elit. Ipsum nulla quis in similique officia, cupiditate fugit mollitia saepe necessitatibus.</p>
    
<div className="grid grid-cols-2 md:grid-cols-4 md:px-0 px-4 gap-5  ">
    {
        products.map((product)=>(
     
      <>
      <div>
       <Item key={product.id} product={product}/>
       <Routes>
    <Route path='/productData/:id' element={<SingleProduct/>}/>
    </Routes>
       </div>
      </>

        )).slice(0,15)
        
    }
    </div>
    </div>
    </div>
    </div>
   

</>  
  )
}
