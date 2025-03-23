import { useSelector } from "react-redux";
import WomensBanner from '../assets/WomensBanner.png';
import { selectedProduct } from '../redux/Reducers/productSlice';
import Footer from './Footer'
import Item from "./Item";
import SingleProduct from "./SingleProduct";
import { Route, Routes } from "react-router";

export default function Womens() {

  const products = useSelector(selectedProduct);
  const womenCollection = products.filter((product) => product.category === 'women')

  return (
    <>
    <div className="max-w-7xl pt-20 mx-auto mt-4 px-2">
      <div>
        <img src={WomensBanner} className='rounded-lg'/>
        </div>
        <div className='py-15'>
          <h1 className='text-center font-bold text-black text-3xl'>Women's Collection</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 pb-15'>
          {
            womenCollection.map((product)=> (
<>
<div>
 <Item key={product.id} product={product}/>
 <Routes>
<Route path='/productData/:id' element={<SingleProduct/>}/>
</Routes>
 </div>
</>
            )
             )
          }

        </div>
      
    </div>
    <Footer/>
    </>
  )
}


