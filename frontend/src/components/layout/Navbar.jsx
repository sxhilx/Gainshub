import React from 'react'
import { Logo } from '../../assets'
import {Button} from '../index'

const Navbar = () => {
  return (
    <div className='px-2'>
      <div className=' mx-auto mt-5 flex items-center justify-between max-w-7xl border rounded-2xl border-slate-700 backdrop-blur-3xl bg-slate-700/10 p-2'>

          <div className='flex items-center ml-2'>
              <a href="/" className='flex items-center gap-1'>
                  <img src={Logo} alt="Gainshub" className=' w-10 md:w-14 md:h-14'/>
                  <span className='text-xl md:text-2xl font-bold text-transparent bg-gradient-to-br from-[#27c2ff] to-[#0d76de] bg-clip-text '>Gainshub</span>
              </a>
          </div>

          <div className='flex items-center mr-4 gap-3'>
              <Button 
              to={"/login"}
              children={"Sign in"} className='px-2 lg:px-4 text-white font-semibold  text-xs lg:text-sm backdrop-blur-3xl bg-gray-400/10 hover:bg-gray-400/20 duration-200'/>

              <Button
              to={"signup"}
              children={"Get Started"} className='px-2 lg:px-4 text-slate-950 font-semibold text-xs lg:text-sm bg-[#1f8fff] hover:bg-[#0d76de] duration-200'
              />
          </div>

      </div>
    </div>
  )
}

export default Navbar