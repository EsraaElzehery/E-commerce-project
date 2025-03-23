import { useSelector } from "react-redux";
import KidsBanner from '../assets/KidsBanner.png'
import { selectedProduct } from '../redux/Reducers/productSlice';
import Footer from "./Footer";
import Item from "./Item";
import SingleProduct from "./SingleProduct";
import { Route, Routes } from "react-router";


export default function Kids() {
  const products = useSelector(selectedProduct);
  const kidCollection = products.filter((product) => product.category === 'kid')

  return (
    <>
    <div className="max-w-7xl mx-auto mt-4 pt-20 px-2 ">
      <div>
        <img src={KidsBanner} className='rounded-lg'/>
        </div>
        <div className='py-15'>
          <h1 className='text-center font-bold text-black text-3xl '>Kid's Collection</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 pb-15'>
          {
            kidCollection.map((product)=> (
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




