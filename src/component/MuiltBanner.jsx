
import clothes from '../assets/clothes.jpeg'
export default function MuiltBanner() {
  return (
    <div className='bg-gray-100'>
            <div className='grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            gap-4 py-6 max-w-7xl mx-auto'>

<div className='relative h-[250px]'>
                    <img 
                    src={clothes} 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0  rounded-lg bg-gray-800 opacity-70 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>

<div className='relative h-[250px]'>
                    <img 
                    src={clothes} 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0  rounded-lg bg-gray-800 opacity-70 flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>

</div>
</div>
 


 
        

     
    
  )
}