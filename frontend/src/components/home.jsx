import React from 'react'
import Feed from './Feed'
import LeftSidebar from './leftSidebar'
import RightSidebar from './rightSidebar'

const Home = () => {
  return (
    <div className='flex justify-between ml-[10%] mr-[10%] mx-auto'>
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  )
}

export default Home;