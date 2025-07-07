// components/skeletons/WorkoutCardSkeleton.jsx
import React from 'react'

const WorkoutCardSkeleton = () => {
  return (
    <div className="p-4 border border-base-300 rounded-lg shadow space-y-4">
      <div className="skeleton h-6 w-1/3 bg-base-200" />
      <div className="skeleton h-4 w-1/2 bg-base-200" />
      <div className="skeleton h-4 w-full bg-base-200" />
      <div className="skeleton h-4 w-5/6 bg-base-200" />
      <div className='flex justify-end'>
        <div className="skeleton h-10 w-24 bg-base-200 rounded" />
      </div>
    </div>
  )
}

export default WorkoutCardSkeleton
