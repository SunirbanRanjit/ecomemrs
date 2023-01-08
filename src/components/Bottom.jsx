import React from 'react'
import whatsapp from '../assets/whatsapp.png'
import messenger from "../assets/messenger.png"
import phone from '../assets/telephone.png'
import { Link } from 'react-router-dom';
const Bottom = () => {
  return (
    <footer
      className=" text-3xl text-white right-0 text-center fixed bottom-0 w-fit mobile:w-full h-fit  bg-white pt-2 border-black">
        <div className="flex w-full px-2">
       
        <div className=" flex mb-2 w-full">
        <Link to='/plan' className=' m-0 p-0 w-fit ' > <button className=' mx-3 w-[200px] rounded-[20px] border-black bg-red-500 h-[40px]  align-middle text-[30px]'> See Plans</button> </Link>
            <img src={messenger} alt="whatsapp" className='   w-[40px]'/>
        <a href='https://wa.me/916289705647' target="_blank">    <img src={whatsapp} alt="messenger" className='  mx-auto w-[40px]'/></a>
            <img src={phone} alt="phone" className='  w-[40px]'/>
        </div>
        </div>
    </footer>
  )
}

export default Bottom