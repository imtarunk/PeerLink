import React from 'react'
import { IoIosMore } from "react-icons/io";

const Trends = () => {
  return (
    <div >
      <div className='flex flex-row justify-between'>
        <p>Bussiness & Finance</p>
        <i><IoIosMore /></i>
      </div>
      <h1 className='text-black font-extrabold text-lg'>#stockmarketcrash</h1>
      <p>11.k posts</p>
    </div>
  )
}

export default Trends;