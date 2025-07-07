import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar, ScrollRestoration, ProtectedNavbar} from '../index'

const ProtectedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768)

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || 'dark'
  })

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  useEffect(() => {
    const root = document.querySelector('html')
    if(theme === 'dark'){
      root.classList.add('dark')
    }else{
      root.classList.remove('dark')
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className='bg-white dark:bg-slate-950 min-h-screen '>
      
        <ScrollRestoration/>

        {/* Sidebar.jsx*/}
        <div className='lg:flex '>
           
          <SideBar 
          className={`${isSidebarOpen ? 'hidden' : 'block'}`}
          isopen={isSidebarOpen}  toggleSidebar={toggleSidebar}/>

          <div className='flex-col w-full'>
            <ProtectedNavbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme}/>

            <main className={`flex-1 flex-grow overflow-auto ${isSidebarOpen ? "md:pl-64" : "pl-0"}`}>
              <Outlet/>
            </main>

          </div>

        </div>

        

    </div>
  )
}

export default ProtectedLayout