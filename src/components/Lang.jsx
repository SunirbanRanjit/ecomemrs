import React from 'react'
import eng from '../assets/eng.png'
import beng from '../assets/beng.png'
import { useState } from 'react'
const Lang = ({visible, onClose, currentLang}) => {
  const [Language, setLanguage] = useState(currentLang);

  if(!visible) return null;
  const save = ()=>{
    //console.log(Language);
    localStorage.setItem('Language',Language);
    onClose();
  }
  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur flex justify-center border-2 border-black rounded-lg items-center '>
      
      <div className="flex flex-col sm:w-[550px] w-full pb-2 p-1 pt-0  rounded-lg ">
      <div onClick={onClose} className="text-center mx-auto font-bold bg-white text-xl w-[32px]  rounded-[50%] border-2 border-black text-black"> x </div>
        <div className=" w-full mx-auto mt-3 py-1  bg-white text-black"> Choose your language </div>
        <div className=" flex my-0 bg-white">
      <div onClick={()=>{ setLanguage('EN')}} className={` w-full mx-2 bg-no-repeat bg-right bg-contain h-[100px]  rounded-lg my-1 text-black  border-4  ${Language === 'EN'? 'border-red-500 bg-red-100': ' '} `} >
      
      <div className="  w-full flex-none text-center  my-8 text-lg"> <input type="radio" name="lang" id="" /> English</div>
    
    </div>
    <div onClick={()=>{ setLanguage('BG')}} className={` w-full mx-2 bg-no-repeat bg-right bg-contain h-[100px]  rounded-lg my-1 text-black  border-4  ${Language === 'BG'? 'border-red-500 bg-red-100': ' '} `} >
    <div className="  w-full flex-none text-center  my-8 text-lg " > <input type="radio" name="lang" id="" />  Bengali</div>
    </div>
    </div>
    <div className="w-full bg-white bg-no-repeat bg-right bg-contain h-[70px] flex justify-around  rounded-lg py-1 text-black " >
    {/* <button onClick={onClose} className='w-full px-2 mx-3 my-1 rounded-lg border-2 hover:bg-red-500 '> Cancel </button> */}
    <button onClick={save} className='w-full px-2 my-3 mx-3 bg-red-500 py-1 hover:bg-transparent rounded-[20px] border-2'> Save </button>
    </div>

      </div>
    </div>
  )
}

export default Lang