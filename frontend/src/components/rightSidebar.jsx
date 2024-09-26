import React from 'react'
import SearchComponent from './searchBar'
import FriendRecbox from './friendRecbox'
import TrendingBox from './trendingBox'
import useOtherUsers from '../../../backend/hooks/useOtherUser'
import { useSelector } from 'react-redux'
const RightSidebar = () => {

  const { user, otherUsers } = useSelector(store => (store.user))
  useOtherUsers(user?._id)
  // console.log(user?._id)
  return (

    <div className="fixed right-[5%]  h-[100%] overflow-y-auto scrollbar-hide">

      <SearchComponent />
      <FriendRecbox otherUsers={otherUsers} />
      <TrendingBox />


    </div>
  )
}

export default RightSidebar;