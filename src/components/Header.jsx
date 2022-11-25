import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <h1 className='text-blue-600 text-4xl font-bold cursor-pointer'>DEVFLIX</h1>
      <div>
        <button className='text-white pr-4 text-xl'>Sign In</button>
        <button className='bg-blue-600 px-6 py-2 rounded cursor-pointer text-white text-xl'>Sign Up</button>
      </div>
    </header>
  )
}

export default Header;
