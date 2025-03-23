import HeroBanner from '../assets/HeroBanner.jpg'
import Features from './Features'
import Footer from './Footer'
import NewCollection from './NewCollection'
import Product from './Product'


export default function Home() {
  return (
    <>
    <div className=' mt-4 place-items-center px-2 relative pt-20'>
        <div className=' max-w-7xl mx-auto rounded-2xl place-items-center ' >
<div className='relative h-[300px] md:h-[750px]'>
     <img src={HeroBanner} className=' w-[100%] h-[100%]  absolute top-0 left-0
      place-items-center text-center rounded-2xl object-cover' alt=""  />
      <div className='absolute inset-0 w-[100%] h-[100%]  top-0 left-0 bg-black/60 object-cover rounded-2xl'>
      </div>
      </div>

      <div className='absolute overflow-hidden w-[50%]  text-center place-items-center  top-[40%] md:top-[40%] mx-auto
      space-y-3  md:space-y-5 right-[25%]   my-4 md:my-0 '>
        <h1 className='text-white font-bold text-center text-xl md:text-5xl'>Discover Your Style</h1>
        <p className=' text-white text-sm  md:text-xl font-semibold'> Shop the latest trends and find your perfect look</p>
        <button className='text-white py-1 px-2 text-sm md:text-lg md:py-2 md:px-4 bg-red-500 rounded-md font-semibold'>Shop Now</button>
      </div>
      </div>
    </div>
    
    <NewCollection/>
  
   <Product/>
   <Features/>
  
   <Footer/>
  
    </>
  )
}
 
