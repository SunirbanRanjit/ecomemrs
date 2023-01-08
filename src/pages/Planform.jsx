import { ArrowBack, MenuOutlined } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import cross from '../assets/cross.png';
import {  createUserDocument, getUserDocument } from '../firebase-config';

import { getAuth, onAuthStateChanged} from "firebase/auth";
import './style.css'
const Planform = () => {
    const [Plan,setPlan] = useState(1);
    const [uid,setUid] = useState("");
    const navigate = useNavigate();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUid(user.uid);
          //console.log(uid);
          getUserDocument(uid);
          
        } else {
          
        }
      });

    const savePlan = () => {
        if(uid){
        createUserDocument(uid,window.name,window.address,window.phone,Plan);
            navigate('/plan-display');
        }else{
            navigate('/login');
        }

    }
  return (
    <div className='w-full bg-gradient-to-b from-red-200 to-red-600 md:py-5'>
    <div className=' w-full md:w-[550px] md:rounded-xl bg-white m-auto h-full'>
        <div className="w-full  flex text-lg md:rounded-t-xl text-bold shadow-lg bg-red-600 text-white text-[20px]">  
        <MenuOutlined onClick={() => navigate(-1)}  style={{fontSize : '30px'}}/>
        <span className='grow m-auto w-full text-center ' >  Plans  </span>
        <ArrowBack onClick={() => navigate(-1)}  style={{fontSize : '30px'}}/>
        </div>
        <div className="flex-row py-2 flex w-full">
            <button onClick={()=> { setPlan(0) }} className={`m-2 p-2 w-full font-bold rounded border text-center  ${ Plan===0?"bg-red-500 text-white": "bg-red-300"}`}> Student's </button>
            <button onClick={()=> { setPlan(1) }} className={`m-2 p-2 w-full rounded font-bold  border text-center ${Plan===1?"bg-red-500 text-white": "bg-red-300" }`}> Standard </button>
            <button onClick={()=> { setPlan(2) }} className={`m-2 p-2 w-full rounded border  font-bold text-center ${ Plan===2?"bg-red-500 text-white": "bg-red-300"}`}> Classic </button>
        </div>
        <div className="w-full text-center text-sm capitalize"> Weekly subscription price </div>
        <div className="flex-row py-2 pb-0 flex w-full">
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> 1111 </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> 2222 </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> 4444 </div>
        </div>
        <hr  className='border-black' />
        <div className="w-full mt-2 text-center text-sm capitalize"> Monthly subscription price </div>
        <div className="flex-row py-2 flex pb-0 w-full">
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> text1 </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> text2 </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> text3 </div>
        </div>
        <hr  className='border-black' />
        <div className="w-full text-center mt-2 text-sm capitalize"> Quarterly subscription price </div>
        <div className="flex-row py-2 flex pb-0 w-full">
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> text1 </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> text2 </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> text3 </div>
        </div>
        <hr  className='border-black' />

        <div className="w-full underline-offset-1 text-center text-sm capitalize"> items with rice </div>

        <div className="grid w-full grid-cols-3 ">
        <div className="w-full m-1  "> 
        <input id="default-checkbox" type="checkbox" checked={true} className="w-4 ml-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className={`ml-2 text-[12px] font-bold ${ Plan===0?"text-red-700": "text-zinc-600"}`}>Daal</label>
        </div>    
        
        <div className="w-full m-1  "> 
        <input id="default-checkbox" type="checkbox" checked={true} className="w-4 ml-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className={`ml-2 text-[12px] font-bold ${ Plan===1?"text-red-700": "text-zinc-600"}`}>Daal</label>
        </div>    

        <div className="w-full m-1  "> 
        <input id="default-checkbox" type="checkbox" checked={true} className="w-4 ml-3 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className={`ml-2 text-[12px] font-bold ${ Plan===2?"text-red-700": "text-zinc-600"}`}>Daal</label>
        </div>    

        <div className="w-[95%] m-1 mb-0 border-l-2 border-r-2 border-t-2 flex"> 
        <div className=" text-[7px] mx-[2px]  mb-0  " id="vertical">Choos</div>
        
        <input name="radio1" id="radio1" checked type="radio" value="" className="w-4 h-4 my-auto text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="radio1" className={`ml-2 text-[12px] my-auto font-bold ${ Plan===0?"text-red-700": "text-zinc-600"}`}>Bhaja</label>
        </div>    



        <div className="w-full text-center m-1 mb-0 border-l-2 border-t-2 border-r-2 flex"> 
        <div className=" text-[7px] mx-[2px]  mb-0  " id="vertical">Choos</div>
   
        <input name="radio2" id="radio2" type="radio" value="" className="w-4 my-auto h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="radio2" className={`ml-2 text-[12px] my-auto font-bold ${ Plan===1?"text-red-700": "text-zinc-600"}`}>Bhaja</label>
        </div>    

        <div className="w-full m-1 "> 
        <input id="default-checkbox" type="checkbox" checked={true} className="w-4 h-4 ml-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className={`ml-2 text-[12px] font-bold  ${ Plan===2?"text-red-700": "text-zinc-600"}`}>Bhaja</label>
        </div>    

        <div className="w-[95%] m-1  mt-0 flex border-l-2 border-r-2 border-b-2 "> 
        <div className=" text-[7px] mx-[2px]  mt-0  " id="vertical">e One</div>
        
        <input name="radio1" id="radio11" type="radio" value="" className="w-4 h-4 my-auto text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="radio11" className={`ml-2 text-[12px] my-auto font-bold ${ Plan===0?"text-red-700": "text-zinc-600"}`}>Seddho-Bata</label>
        </div>    


        <div className="w-full m-1 mt-0 flex border-l-2 border-b-2 border-r-2 "> 
        <div className=" text-[7px] mx-[2px]  mt-0 " id="vertical">e One</div>
      
        <input name="radio2" id="radio2" type="radio" value="" className="w-4 h-4 my-auto text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="radio22" className={`ml-2 text-[12px] my-auto font-bold ${ Plan===1?"text-red-700": "text-zinc-600"}`}>Seddho-Bata</label>
        </div>    

        <div className="w-full m-1  "> 
        <input id="default-checkbox" type="checkbox" checked={true} className="w-4 h-4 ml-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className={`ml-2 text-[12px] font-bold ${ Plan===2?"text-red-700": "text-zinc-600"}`}>Seddho-Bata</label>
        </div>    

        <div className="w-full m-1 h-full items-center flex"> 
        <img src={cross} className='w-[15px] h-[15px]  ml-4 align-middle' alt="" srcset="" />
        <span className={`ml-2 text-[12px] font-bold ${ Plan===0?"text-red-700": "text-zinc-600"}`}>Saak-Torkari</span>
        </div>    

        <div className="w-full m-1  "> 
        <input id="default-checkbox" type="checkbox" checked={true} className="w-4 h-4 ml-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className={`ml-2 text-[12px] font-bold ${ Plan===1?"text-red-700": "text-zinc-600"}`}>Saak-Torkari</label>
        </div>    

        <div className="w-full m-1  "> 
        <input id="default-checkbox" type="checkbox" checked={true}  className="w-4 h-4 ml-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className={`ml-2 text-[12px] font-bold ${ Plan===2?"text-red-700": "text-zinc-600"}`}>Saak-Torkari</label>
        </div>    

        <div className="w-full m-1  ">
        <input id="default-radio-1" type="checkbox" checked={true} name="default-radio" className="w-4 ml-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className={`ml-2 text-[12px] font-bold ${ Plan===0?"text-red-700": "text-zinc-600"}`}>Jhol</label>
      </div>

  <div className="w-full m-1  ">
  <input id="default-radio-1" type="checkbox" checked={true} name="default-radio" className="w-4 ml-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className={`ml-2 text-[12px] font-bold ${ Plan===1?"text-red-700": "text-zinc-600"}`}>Jhol</label>
   </div>

   <div className="w-full m-1 ">
  <input id="default-radio-1" type="checkbox" checked={true} name="default-radio" className="w-4 ml-3 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className={`ml-2 text-[12px] font-bold ${ Plan===2?"text-red-700": "text-zinc-600"}`}>Jhol</label>
   </div>

   


        </div>
        <div className="w-full text-center   text-sm capitalize"> Ingredient's Quality  <hr color="black"/> • Rice type </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}>White Swarna </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> Miniket </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> Basmati </div>
        </div>
        <hr color='black' />
        
        <div className="w-full  text-center text-sm capitalize">  • Daal type </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> Good </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> Better </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> Best </div>
        </div>
        <hr color='black' />
        
        <div className="w-full  text-center text-sm capitalize">  • Vagetables </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> Good </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> Better </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> Best </div>
        </div>
        <hr  className='border-black' />

        <div className="w-full  text-center text-sm capitalize">  • Oil </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> Packaged </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> From Mill </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> Cold Pressed </div>
        </div>
        <hr color='black' />

        <div className="w-full  text-center text-sm capitalize"> • Spice </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?"text-red-700": "text-zinc-600"} `}> Packaged </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?"text-red-700": "text-zinc-600"} `}> Machine Grinded </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?"text-red-700": "text-zinc-600"} `}> Hand Grinded </div>
        </div>
        <hr color='black' />

        <div className="w-full rounded-[50%] p-3 ">  <button onClick={savePlan} className='w-full bg-red-600 text-white text-[20px] py-2 rounded-[20px]'> Select Plan</button> </div>

    </div>
    </div>
  )
}

export default Planform