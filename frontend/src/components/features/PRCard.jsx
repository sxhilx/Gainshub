import React from 'react'
import Button from '../common/Button'

const PRCard = ({exerciseName, weight, date}) => {
  return (
    <div className='my-4 rounded border-t border-slate-800'>
      <div className='flex items-center justify-between p-4'>
        <div className='flex flex-col'>
            <span className='text-lg font-semibold'>{exerciseName}</span>
            <span className='text-sm text-slate-400'>{date}</span>
        </div>
        <span className='font-semibold text-xl'>{weight}kg</span>
      </div>
      <div>
      </div>
    </div>
  )
}

export default PRCard