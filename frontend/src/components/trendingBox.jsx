import React from 'react'
import Trends from './trend'
const TrendingBox = () => {
  return (
    <div className='items-center border border-gray-200 rounded-2xl w-full px-2.5 mt-4 py-2'>
      <h1 className='font-extrabold text-2xl '># trending in campus</h1>
      <div className="trendBox my-3 mx-1.5" >
        <Trends />
      </div>
    </div>
  )
}

export default TrendingBox