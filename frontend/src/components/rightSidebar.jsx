import React from 'react'
import SearchComponent from './searchBar'
import FriendRecbox from './friendRecbox'
import TrendingBox from './trendingBox'
const RightSidebar = () => {
  return (
    <div className="w-[20%] ml-5">
      <SearchComponent />
      <FriendRecbox />
      <TrendingBox />


    </div>
  )
}

export default RightSidebar;