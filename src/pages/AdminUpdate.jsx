import { ArrowBack, MenuOutlined } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'

const AdminUpdate = () => {
    const [Plan,setPlan] = useState(1);
    let navigate = useNavigate();
  return (
    <div className='w-full bg-gradient-to-b from-red-200 to-red-900 md:py-5'>
    <div className=' w-full md:w-[550px] md:rounded-xl bg-white m-auto h-full'>
        <div className="w-full  flex text-lg md:rounded-t-xl text-bold shadow-lg bg-red-900 text-white text-[20px]">  
        <Link to='/'> <MenuOutlined style={{fontSize : '30px'}}/> </Link>
        <span className='grow m-auto w-full text-center ' >  Plans  </span>
        <Link to='/admin-dashboard'> <ArrowBack  style={{fontSize : '30px'}}/> </Link>
        </div>
        <div className="flex-row py-2 flex w-full">
            <button onClick={()=> { setPlan(0) }} className={`m-2 p-2 w-full rounded border text-center  ${ Plan===0?"bg-red-700 text-white": "bg-red-300"}`}> Text1 </button>
            <button onClick={()=> { setPlan(1) }} className={`m-2 p-2 w-full rounded border text-center ${Plan===1?"bg-red-700 text-white": "bg-red-300" }`}> Text2 </button>
            <button onClick={()=> { setPlan(2) }} className={`m-2 p-2 w-full rounded border text-center ${ Plan===2?"bg-red-700 text-white": "bg-red-300"}`}> Text3 </button>
        </div>
        <div className="w-full text-center text-lg capitalize"> Weekly subscription price </div>
        <div className="flex-row py-2 flex w-full">
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text1' name="" id="" /> </div>
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text2' name="" id="" /> </div>
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text3' name="" id="" /> </div>
        </div>
        <div className="w-full text-center text-lg capitalize"> Weekly subscription price </div>
        <div className="flex-row py-2 flex w-full">
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text1' name="" id="" /> </div>
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text2' name="" id="" /> </div>
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text3' name="" id="" /> </div>
        </div>
        <div className="w-full text-center text-lg capitalize"> Weekly subscription price </div>
        <div className="flex-row py-2 flex w-full">
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text1' name="" id="" /> </div>
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text2' name="" id="" /> </div>
            <div className={`m-2 p-2 w-full border-dotted border-b  text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> <input type="text" className='w-full text-center border-0' placeholder='Text3' name="" id="" /> </div>
        </div>

        <div className="w-full rounded-[50%] p-3 "> <Link to='/admin-dashboard'> <button  className='w-full bg-red-700 text-white text-[20px] py-2 rounded-[20px]'> Save Plan</button> </Link> </div>

    </div>
    </div>
  )
}

export default AdminUpdate