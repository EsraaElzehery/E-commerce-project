import Logo from '../assets/Logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-gray-900  " >
        <div className="max-w-7xl mx-auto py-10 px-5 place-items-center " >
            <div  className="grid grid-cols-1 md:grid-cols-4  md:gap-16" >
<div className='space-y-3'>
    <img src={Logo} className='w-40 h-25 px-0  '/>
    <p className='text-white text-sm'>High-quality, sustainable clothing at affordable prices.</p>
    <p className=' text-sm text-white'>123 Fashion St, Style City, NY 10001</p>
            <p className='text-sm text-white'>Email: support@clothify.com</p>
            <p className='text-sm text-white'>Phone: (123) 456-7890</p>
</div>

<div className='text-white md:mt-5 mt-10'>
<h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-3'>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>FAQs</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
</div>

<div className='text-white md:mt-5 mt-10 space-y-3 '>
    <h3 className='text-xl font-semibold'>Follow Us</h3>
<div className='text-white flex gap-3 items-center '>
    <FaFacebook/>
    <FaInstagram/>
    <FaSquareXTwitter/>
    <FaPinterest/>
</div>
</div>

<div className='text-white mt-5 space-y-3 '>
    <h3 className='font-semibold text-xl'>Stay in the loop</h3>
    <p className='text-sm pb-1'>Subscribe to get special offers, free giveaways, and more</p>
    <form className='text-center '>
        <input type='email' placeholder='Enter your email' className='p-2 rounded-md focus:outline-2 bg-gray-50
        focus:outline-gray-700 focus:outline-none text-gray-800 w-full'/>
        <button className='py-2 font-semibold rounded-md px-3 bg-red-700 text-white my-5'>Subscribe</button>
    </form>
</div>

            </div>
        </div>
    </div>
  )
}
