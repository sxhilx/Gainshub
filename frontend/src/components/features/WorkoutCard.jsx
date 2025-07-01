import { DeleteIcon, TrashIcon } from 'lucide-react'
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
          <div className='p-3 text-xs md:text-lg' key={index}>                      
            <div className='flex gap-2 items-center justify-between px-1 font-semibold'>                        
              <div className='flex gap-2'>
                <span className='min-w-12 md:min-w-16 flex justify-center items-center text-center backdrop-blur-3xl bg-blue-300/20 my-1 md:py-1 px-3 rounded-full text-blue-400 text-xs'>{workout.movementType}</span>
                <span className='max-w-16 md:max-w-3xs break-words'>{workout.exerciseName}</span>
              </div>
              <div className='flex gap-3 md:gap-6 text-slate-400 font-medium items-center'>                        
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