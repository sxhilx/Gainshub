import React from 'react'
import {Logo} from "../../assets"
import {Link} from "react-router-dom"
import { Activity, HomeIcon, LogOutIcon, TrophyIcon } from "lucide-react"

const SideBar = () => {
  return (
    <div className='w-full lg:w-[20%] bg-neutral-800 min-h-screen flex flex-col p-2'>
        <div className='flex items-center'>
            <img src={Logo} alt="Gainshub" className='w-16'/>
            <div className='flex flex-col'> 
                <span className='text-xl md:text-xl font-bold text-transparent bg-gradient-to-br from-[#27c2ff] to-[#0d76de] bg-clip-text '>Gainshub</span>
                <span className='text-xs text-slate-400'>Fitness Tracker</span>
            </div>
        </div>

        <hr className='text-gray-700 mt-3'/>

        <div className='mt-5'>
            <h2 className='text-sm text-slate-400 mb-2'>Navigation</h2>
            <ul className='text-white '>
                <li className='hover:bg-gray-400/10 hover:backdrop-blur-2xl w-full cursor-pointer transition duration-100 p-1 rounded'>
                    <Link to={'/dashboard'} className='flex items-center gap-2'>
                        <HomeIcon size={16}/>
                        Dashboard
                    </Link>
                </li>
                 <li className='hover:bg-gray-400/10 hover:backdrop-blur-2xl w-full cursor-pointer transition duration-100 p-1 rounded'>
                    <Link to={'/workouts'} className='flex items-center gap-2'>
                        <Activity size={16}/>
                        Workouts
                    </Link>
                </li>
                 <li className='hover:bg-gray-400/10 hover:backdrop-blur-2xl w-full cursor-pointer transition duration-100 p-1 rounded'>
                    <Link to={'/add-pr'} className='flex items-center gap-2'>
                        <TrophyIcon size={16}/>
                        Add PR
                    </Link>
                </li>
                 <li className='hover:bg-gray-400/10 hover:backdrop-blur-2xl w-full cursor-pointer transition duration-100 p-1 rounded'>
                    <Link to={'/logout'} className='flex items-center gap-2'>
                        <LogOutIcon size={16}/>
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar