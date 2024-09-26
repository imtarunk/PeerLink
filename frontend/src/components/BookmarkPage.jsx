import React from 'react'
import { useSelector } from 'react-redux';
import useGetPost from '../../../backend/hooks/useGetPost';

const BookmarkPage = () => {
  const { user } = useSelector((state) => state.user)
  useGetPost();
  return (

    <div>
      This is saved bookmake page
    </div>
  )
}

export default BookmarkPage;