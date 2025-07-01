import { DeleteIcon, SquarePen, Trash2Icon, TrashIcon } from 'lucide-react'
import React, { useState } from 'react'
import {Button} from '../index'

const WorkoutCard = ({week, date, workouts = [], onDelete, onAdd}) => { 

  return (
    <div className='my-4 rounded border-t border-slate-800'>
      <div className='rounded-full flex justify-between items-center p-3'>
          <span className='text-xl font-semibold'>Week {week}</span>
          <span className='text-slate-400 text-sm'>{date}</span>
      </div>
      <hr className='text-slate-600 w-full'/>
      {workouts.map((workout, index) => (
          <div className='grid grid-cols-[60px_1fr_110px_auto] md:grid-cols-[80px_1fr_200px_auto] items-center justify-between p-4 text-xs md:text-lg' key={index}>                  

              <div>
                <span className='backdrop-blur-3xl bg-blue-300/20 my-1 md:py-1 px-3 rounded-full text-blue-400 text-xs'>{workout.movementType}</span>    
              </div>  
              
              <div className='flex justify-start'>
                <span className='text-sm md:text-xl font-semibold break-words'>{workout.exerciseName}</span>
              </div>
              
              <div className='space-x-2'>
                <span className='text-slate-400'>{workout.weight}</span>
                <span className='text-slate-400'>{workout.sets}x{workout.reps}</span>
              </div>     

              <div className='flex gap-3 md:gap-6 text-slate-400 font-medium items-center'>
                <Button className='text-[#27c2ff] cursor-pointer'>
                  <SquarePen size={16}/>
                </Button>

                <Button 
                onClick={() => onDelete(workout.workoutId)}
                className='text-red-400 cursor-pointer'>
                  <Trash2Icon size={16} className='cursor-pointer'/>
                </Button>
              </div>
          </div>
      ))}
        <div className='flex justify-end p-2'>
          
          <Button
          className='bg-slate-700 text-white text-sm hover:bg-slate-600 px-4 py-1 rounded cursor-pointer transition'
          onClick={() => onAdd(workouts[0].workoutId)}
          >
            Add Exercise  
          </Button>  
        </div>    
    </div>
  )
}

export default WorkoutCard