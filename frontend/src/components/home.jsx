import React from 'react'
import Feed from './Feed'
import LeftSidebar from './leftSidebar'
import RightSidebar from './rightSidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex w-[80%] ml-[10%]'>
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  )
}

export default Home;

// className = 'flex justify-between ml-[10%] mr-[10%] mx-auto'