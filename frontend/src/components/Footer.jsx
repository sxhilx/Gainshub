import React from 'react'
import { Logo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-gray-800 w-full '>
    <div className='grid grid-cols-1 lg:grid-cols-4 p-5 lg:p-10 space-y-5'>
      
      <div className='flex flex-col lg:col-span-2 lg:w-[70%]'>
        <a href="/" className='flex items-center'>
            <img src={Logo} alt="GymScribe" className=' w-12 md:w-14 md:h-14'/>
            <span className='text-xl md:text-2xl font-bold text-transparent bg-gradient-to-br from-[#27c2ff] to-[#0d76de] bg-clip-text '>GymScribe</span>
        </a>
        <div className='mt-2'>
          <span className='text-slate-400 text-md'>
            The ultimate fitness tracking platform for athletes, fitness enthusiasts, and anyone looking to improve their health.
          </span>
        </div>
      </div>

      <div >
          <h1 className='text-white font-semibold mb-2'>Products</h1>
          <ul className='text-slate-400 space-y-1 text-sm'>
            <li><a href="/" className='hover:text-white '>Features</a></li>
            <li><a href="/" className='hover:text-white '>API</a></li>
          </ul>
      </div>

      <div >
          <h1 className='text-white font-bold mb-2'>Support</h1>
          <ul className='text-slate-400 space-y-1 text-sm'>
            <li><a href="/" className='hover:text-white '>Help center</a></li>
            <li><a href="/" className='hover:text-white '>Feedback</a></li>
          </ul>
      </div>
    </div>

    <div className='flex flex-col justify-center items-center'>
      <hr className='text-slate-700 w-[90%] mt-5'/>
      <div className='py-10 text-slate-400'>
        © 2024 GymScribe. All rights reserved.
      </div>
    </div>
    </div>
  )
}

export default Footer