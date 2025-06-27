import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer, ScrollRestoration} from '../'

const PublicLayout = () => {
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

export default PublicLayout