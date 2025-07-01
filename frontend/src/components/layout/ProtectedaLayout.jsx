import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar, ScrollRestoration, ProtectedNavbar} from '../index'

const ProtectedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768)
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }
  return (
    <div>
      
        <ScrollRestoration/>

        {/* Sidebar.jsx*/}
        <div className='lg:flex  min-h-screen'>
           
          <SideBar 
          className={`${isSidebarOpen ? 'hidden' : 'block'}`}
          isopen={isSidebarOpen}  toggleSidebar={toggleSidebar}/>

          <div className='flex-col w-full'>
            <ProtectedNavbar toggleSidebar={toggleSidebar}/>

            <main className={`flex-1 flex-grow overflow-auto ${isSidebarOpen ? "md:pl-64" : "pl-0"}`}>
              <Outlet/>
            </main>

          </div>

        </div>

        

    </div>
  )
}

export default ProtectedLayout