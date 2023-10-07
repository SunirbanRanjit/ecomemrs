import React from 'react'
import Whatsapp from '../assets/whatsapp.png'
import messenger from "../assets/messenger.png"
import Phone from '../assets/telephone.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getContact } from '../firebase-config';
import { useState } from 'react';
const Bottom = () => {
  const [phone, setPhone] = useState();
    const [whatsapp,setWhatsapp] = useState();
    const [fbPage , setfbPage] = useState();


    useEffect(()=>{
      let values = getContact();

        values.then(function(values) {
            //console.log(values);
            setPhone(values.phone.value);
            setWhatsapp(values.whatsapp.value);
            setfbPage(values.fbPage.value);
        })
    })
  return (
    <footer
      className=" text-3xl text-white right-0 text-center fixed bottom-0 w-fit mobile:w-full h-fit  bg-red-200 rounded-t-xl pt-2 border-black">
        <div className="flex w-full px-2">
       
        <div className=" flex mb-2 w-full">
        <Link to='/plan' className=' m-0 p-0 w-fit ' > <button className=' mx-3 w-[200px] font-bold rounded-[20px] border-black bg-red-500 h-[40px]  align-middle text-[30px]'> See Plans</button> </Link>
            <img src={messenger} alt="whatsapp" className='   w-[40px]'/>
        <a href={`https://wa.me/${whatsapp}`} target="_blank">    <img src={Whatsapp} alt="messenger" className='  mx-auto w-[40px]'/></a>
            <img src={Phone} alt="phone" className='  w-[40px]'/>
        </div>
        </div>
    </footer>
  )
}

export default Bottom