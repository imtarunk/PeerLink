import React from 'react'
import Feed from './Feed'
import LeftSidebar from './leftSidebar'
import RightSidebar from './rightSidebar'
import { Outlet } from 'react-router-dom'
import { getOtherUsers } from '../../../backend/redux/userSlice'
import useOtherUsers from '../../../backend/hooks/useOtherUser'
import { useSelector } from 'react-redux'
import useGetPost from '../../../backend/hooks/useGetPost'
import useGetProfile from '../../../backend/hooks/useGetProflie'

const Home = () => {

  //use customs hooks
  const { user } = useSelector(store => store.user);
  useOtherUsers((user?._id));
  useGetPost((user?._id));

  return (
    <div className='flex w-[80%] ml-[10%]'>
      <LeftSidebar user={user} />
      <Outlet />
      <RightSidebar user={user?._id} />
    </div>
  )
}

export default Home;

// className = 'flex justify-between ml-[10%] mr-[10%] mx-auto'