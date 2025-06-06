import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    if(!token){
        navigate('/login')
    }

  return <Outlet/>
  
}

export default ProtectedRoutes