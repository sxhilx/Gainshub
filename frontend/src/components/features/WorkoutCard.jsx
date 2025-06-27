import { DeleteIcon, TrashIcon } from 'lucide-react'
import React, { useState } from 'react'
import {Button} from '../index'

const WorkoutCard = ({week, date, workouts = [], onDelete, onAdd}) => { 

  return (
    <div className='bg-slate-950 my-4 rounded'>
      <div className='rounded-full flex justify-between items-center p-3'>
          <span className='backdrop-blur-3xl bg-green-400/20 py-1 px-3 rounded-full text-green-500 text-sm'>Week {week}</span>
          <span className='text-slate-400 text-sm'>{date}</span>
      </div>
      <hr className='text-slate-600'/>
      {workouts.map((workout, index) => (
          <div className='p-3' key={index}>                      
            <div className='flex gap-2 items-center justify-between px-1 font-semibold'>                        
              <div className='flex gap-2'>
                <span className='min-w-16 text-center backdrop-blur-3xl bg-blue-300/20 py-1 px-3 rounded-full text-blue-400 text-xs'>{workout.movementType}</span>
                <span className=''>{workout.exerciseName}</span>
              </div>
              <div className='flex gap-6 text-slate-400 font-medium items-center'>                        
                <span className='min-w-[60px] text-right'>{workout.weight}</span>
                <span className='min-w-[60px] text-right'>{workout.sets}x{workout.reps}</span>

                <Button 
                onClick={() => onDelete(workout.workoutId)}
                className='text-red-400'>
                  <TrashIcon size={14} className='cursor-pointer'/>
                </Button>
              </div>              
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