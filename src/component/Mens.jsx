import { useDispatch, useSelector } from 'react-redux'
import MensBanner from '../assets/MensBanner.png'
import { selectedProduct } from '../redux/Reducers/productSlice'
import Footer from './Footer';

import Item from './Item';
import {Route, Routes} from 'react-router'
import SingleProduct from './SingleProduct';
export default function Mens() {

  const products = useSelector(selectedProduct);
  const menCollection = products.filter((product) => product.category === 'men')

  return (
    <>
    <div className="max-w-7xl mx-auto mt-4 pt-20 px-2">
      <div>
        <img src={MensBanner} className='rounded-lg'/>
        </div>
        <div className='py-15'>
          <h1 className='text-center font-bold text-black text-3xl'>Men's Collection</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 pb-15'>
          {
            menCollection.map((product)=> (

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
