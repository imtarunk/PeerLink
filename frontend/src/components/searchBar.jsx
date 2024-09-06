import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchComponent = () => {
  return (
    <div className='flex items-center p-2  bg-gray-200 rounded-full outline-none'>
      <CiSearch size='20px' />
      <input type="text" placeholder='Search something ' className='bg-transparent outline-none px-2' />
    </div>
  );
};

export default SearchComponent;
