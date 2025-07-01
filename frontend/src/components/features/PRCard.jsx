import React from 'react'
import {Button } from '../'
import { SquarePen, Trash2Icon } from 'lucide-react'

const PRCard = ({exerciseName, weight, date, id, onDelete, onEdit}) => {
  return (
    <div className='my-4 rounded border-t border-slate-800'>
      <div className='grid grid-cols-5 items-center justify-between p-4'>
        <div className='col-span-2 flex flex-col'>
            <span className='font-semibold'>{exerciseName}</span>
            <span className='text-sm text-slate-400'>{date}</span>
        </div>
        
        <div className='col-span-2 flex justify-end'>
            <span className='font-semibold text-xl'>{weight}kg</span>
        </div>

        <div className='flex items-center justify-end  gap-3 md:gap-8'>
            <Button onClick={() => onEdit(id)}>
                <SquarePen className='text-[#27c2ff] cursor-pointer' size={16}/>
            </Button>
            <Button onClick={() => onDelete(id)}>
                <Trash2Icon className='text-red-500 cursor-pointer' size={16}/>
            </Button>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default PRCard