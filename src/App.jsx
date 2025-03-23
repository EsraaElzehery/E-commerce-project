
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Mens from './component/Mens'
import Womens from './component/Womens'
import Kids from './component/Kids'
import {  Route, Routes } from 'react-router'
import SingleProduct from './component/SingleProduct'
import Cart from './component/Cart'
import {startLoading, stopLoading} from './redux/Reducers/loadingSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import shopping from './assets/shopping.jpg'
import Login from './component/Login'

function App() {
  
  const dispatch = useDispatch();
  const loading = useSelector((state)=> state.loading);
  const location = useLocation();

  useEffect(()=>{

dispatch(startLoading());

const timer = setTimeout(()=>{
  dispatch(stopLoading());
}, 800)

return ()=> clearTimeout(timer);

  }, [location.pathname, dispatch])

  return (
    <>
       <Header/>
    <div className='relative'>
{
  loading &&(
    <div className='fixed inset-0 bg-white flex flex-col items-center justify-center space-y-2 z-50'>
<img src={shopping} alt='Loading...' className=' w-50 h-50'/>
<div className='flex items-center justify-between gap-3'>
<p className='font-semibold text-2xl text-blue-500'>Loading</p>
  <div className='w-3 h-3 rounded-full bg-blue-400 animate-bounce'></div>
  <div className='w-3 h-3 rounded-full bg-blue-400 animate-bounce'></div>
  <div className='w-3 h-3 rounded-full bg-blue-400 animate-bounce '></div>

</div>
      
    </div>
  )
}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Womens/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/login' element={<Login/>}/>   
    <Route path='/cart' element={<Cart />}/>
   <Route path='/products/:productId' element={<SingleProduct/>}/>


 </Routes>
</div>
    </>
  )
}

export default App
