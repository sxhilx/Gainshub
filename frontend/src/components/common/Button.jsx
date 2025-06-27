import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({to, children, className='', ...props}) => {

    if(to){
        return <Link to={to} className={`py-2 lg:py-3 rounded-md ${className}`}>{children}</Link>
    }

  return (
    <button 
    className={`py-2 lg:py-3 rounded-md ${className}`}
    {...props}>       
          {children}        
    </button>
  )
}

export default Button