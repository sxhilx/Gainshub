import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar, ScrollRestoration} from '../index'

const ProtectedLayout = () => {
  return (
    <div>
      
        <ScrollRestoration/>

        {/* Sidebar.jsx*/}
        <div className='sm:hidden lg:flex  min-h-screen'>
           
          <SideBar/>

          <main className='flex-1 p-4'>
            <Outlet/>
          </main>

        </div>

        

    </div>
  )
}

export default ProtectedLayout