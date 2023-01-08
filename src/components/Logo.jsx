import React from 'react'
import logo from '../assets/Logo.png'
const Logo = () => {
  return (
    <div className='w-full top-0 fixed m-auto bg-gradient-to-b from-red-500 to-red-700'>
        <img src={logo} alt="" srcset="" className='h-[30px] self-center mx-auto' />
    </div>
  )
}

export default Logo