import { ArrowBack, MenuOutlined } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import how1 from '../assets/how1.jpg';
import how2 from '../assets/how2.jpg';
import Sidedrawer from '../components/Sidedrawer';
const Hiw = () => {
    const navigate = useNavigate();
    const [drawer,setDrawer] = useState(false);
    const handleOnClose = () =>{setDrawer(false);}
  return (
    <div className='w-full '> 
    <div className="w-full  flex text-lg md:rounded-t-xl text-bold shadow-lg bg-red-600 text-white text-[20px]">  
        <MenuOutlined onClick={() => setDrawer(true)}  style={{fontSize : '30px'}}/>
        <span className='grow m-auto w-full text-center ' > How it works </span>
        <ArrowBack onClick={() => navigate(-1)}  style={{fontSize : '30px'}}/>
        </div>
        
        <img src={how1} className='w-[90%] mx-auto my-3' />
        <img src={how2} className='w-[90%] mx-auto my-3' />
        <Sidedrawer visible={drawer} onClose={handleOnClose}/>
     </div>
  )
}

export default Hiw