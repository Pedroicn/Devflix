import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-blue-600 text-4xl font-bold cursor-pointer'>DEVFLIX</h1>
      </Link>
      <div>
        <Link to='/login'>
          <button className='text-white pr-4 text-xl'>Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-xl'>Sign Up</button>
        </Link>
      </div>
    </header>
  )
}

export default Header;
