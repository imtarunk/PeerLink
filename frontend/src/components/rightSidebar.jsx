import React from 'react'
import SearchComponent from './searchBar'
import FriendRecbox from './friendRecbox'
const RightSidebar = () => {
  return (
    <div className="w-[20%]">
      <SearchComponent />
      <FriendRecbox />

    </div>
  )
}

export default RightSidebar;