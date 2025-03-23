import MiddBanner from '../assets/MiddBanner.jpg'

export default function MidBanner() {
  return (
    
 <div className=' bg-slate-100 md:py-20 py-15 place-items-center px-2 relative '>
          <div className=' max-w-7xl mx-auto rounded-2xl place-items-center   ' >
  <div className='relative h-[300px] md:h-[500px]' style={{backgroundAttachment:'fixed', backgroundPosition:"center"}}>
       <img src={MiddBanner} className=' w-[100%] h-[100%]  absolute top-0 left-0
        place-items-center text-center rounded-2xl object-cover' alt=""  />
        <div className='absolute inset-0 w-[100%] h-[100%]  top-0 left-0 bg-black/60 object-cover rounded-2xl'>
        </div>
        </div>
  
      <  div className='absolute overflow-hidden w-[50%]  text-center place-items-center  top-[30%] md:top-[40%] mx-auto
      space-y-3  md:space-y-5 right-[25%]   my-4 md:my-0 '>
          <h1 className='text-white font-bold text-center text-xl md:text-5xl'>Winter Collection 2024</h1>
          <p className='text-white text-sm  md:text-xl font-semibold'> Shop the latest trends and find your perfect look</p>
          <button className='text-white py-1 px-2 text-sm md:text-lg md:py-2 md:px-4 bg-red-500 rounded-md font-semibold'>Shop Now</button>
        </div>
        </div>
        
        
      </div>
  )
}
