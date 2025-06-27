import React from 'react'


const FeatureCard = ({title, Icon, description}) => {
  return (
    <div>
        <div className='flex items-center gap-4'>
            <div className='backdrop-blur-3xl bg-blue-500/20 p-3 rounded-lg'>
                <Icon className='text-[#2a93fc] w-6 h-6'/>
            </div>

            <div className='text-white font-bold text-xl '>
                {title}
            </div>
        </div>
        <div className='text-slate-400 mt-5'>
            {description}
        </div>
    </div>
  )
}

export default FeatureCard