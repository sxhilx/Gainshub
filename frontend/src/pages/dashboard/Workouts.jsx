import React from 'react'
import { Button } from '../../components'
import { PlusIcon } from 'lucide-react'

const Workouts = () => {
  return (
    <div className='text-white max-w-6xl mx-auto flex flex-col p-10 space-y-5'>
        
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">Workouts</h1>
            <span className="text-slate-400">Every workout you ever logged!</span>
          </div>

          <Button
            to={'/add-workout'}
            className="px-2 lg:px-4 font-medium text-xs lg:text-sm bg-gradient-to-tr from-[#27c2ff] to-[#0d76de] text-black cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] transition duration-200 flex gap-2 items-center"
          >
            <PlusIcon />
            Log New Workout
          </Button>
        </div>

        <div>
            
        </div>
    
    </div>
  )
}

export default Workouts