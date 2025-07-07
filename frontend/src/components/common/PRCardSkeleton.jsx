import React from 'react'

const PRCardSkeleton = () => {
  return (
    <div className="px-4 py-3 border-b border-base-300 space-y-2">
      <div className="flex justify-between items-center">
        <div className="skeleton h-4 w-1/3 bg-base-200" />
        <div className="skeleton h-4 w-1/6 bg-base-200" />
      </div>
      <div className="skeleton h-4 w-1/4 bg-base-200" />
    </div>
  )
}

export default PRCardSkeleton
