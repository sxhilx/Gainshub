import React from 'react'
import Button from '../common/Button'
import { Columns2Icon } from 'lucide-react'

const ProtectedNavbar = ({toggleSidebar}) => {
  return (
    <div className='border border-b-slate-700'>

        <div className='p-2 flex items-center gap-2'>                  
                
            <Button className='cursor-pointer' onClick={toggleSidebar}>
                <Columns2Icon 
                className='text-[#27c2ff]'
                size={26}/>
            </Button>

            <span className='text-xl md:text-2xl font-bold text-transparent bg-gradient-to-br from-[#27c2ff] to-[#0d76de] bg-clip-text '>Gainshub</span>  
            
        </div>

    </div>
  )
}

export default ProtectedNavbar