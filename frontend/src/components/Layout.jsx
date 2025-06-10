import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer, ScrollRestoration} from './index'

const Layout = () => {
  return (
    <div>
      
        <ScrollRestoration/>

        {/*Navbar.jsx or Sidebar.jsx*/}
        <Navbar/>

            <main>

                <Outlet/>
            </main>

        {/*Footer.jsx*/}
        <Footer/>

    </div>
  )
}

export default Layout