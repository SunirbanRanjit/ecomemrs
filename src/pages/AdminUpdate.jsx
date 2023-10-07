import { ArrowBack, MenuOutlined } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import Sidedrawer from '../components/Sidedrawer';
import { getPrice, setPrice } from '../firebase-config';
import { useEffect } from 'react';
import Refresh from '../assets/refresh.png';

const AdminUpdate = () => {
    
    const [Plan,setPlan] = useState();
    const [BgColor, setBgColor] = useState("bg-red-300");
    const [BgSelectColor,setBgSelectColor] = useState("bg-red-500");
    const [TextColor,setTextColor] = useState("text-red-500");
    const [BorderColor,setBorderColor] = useState("border-red-600");
    const [Type,setType] = useState(1);
    const [name , setName] = useState("Full");
    const [ShowBar, setShowBar] = useState(false);
    const navigate = useNavigate();
    const [nameStudent, setNameStudent ] = useState();
    const [nameClassic, setNameClassic ] = useState();
    const [namePremium, setNamePremium ] = useState();
/*
    const handleUpdate = ()=>{
        setPrice(Type,nameStudent,nameClassic,namePremium);
    }
*/
    const resetPrice = ()=> {
        setNameStudent("");
            setNameClassic("");
            setNamePremium("");
    }
    const renderPrice = ()=>{
        resetPrice();
        let prices=getPrice();
        prices.then(function(values){
            console.log(values);
            setNameStudent(values[name].student);
            setNameClassic(values[name].classic);
            setNamePremium(values[name].premium);
        })
    }
    useEffect(()=>{
        renderPrice();
    },[]);
  const typeSelector = [
        {
            name: "Morning",
            type: 0,
            description:  "1 Meal every morning" ,
            color: "green-600",
            bgColor: "green-300",
        },
        {
            name: "Full Day",
            type: 1,
            description:  "1 meal / morning + 1 meal / night"  ,
            color: "red-600",
            bgColor: "red-300",
        },
        {
            name: "Night",
            type: 2,
            description:  "1 Meal every night" ,
            color: "violet-700",
            bgColor: "violet-300",
        },
    ]
    const handlePrev = () => {
        if(Type>0){
            setType(Type - 1);
            if(Type === 1){
                handleMorning();
                
            }else{
                handleFullDay();
            }
        }else{
            setType(2);
            handleNight();
        }

        
         
          resetPrice();
    }
    
    const handleNext = () => {
        if(Type<2){
            setType(Type + 1);
            if(Type === 1){
                handleNight();  
            }else{
                              
                handleFullDay();
            }
        }else{
            setType(0);
            handleMorning();
            
        }
        renderPrice();
    }
    const handleMorning = ()=>{
        
        setName("Morning");
         setBgColor("bg-green-300"); setBgSelectColor("bg-green-600"); setTextColor("text-green-600"); 
         
    }

    const handleFullDay = ()=> { 
        
        setName("Full");
         setBgColor("bg-red-300"); setBgSelectColor("bg-red-600"); setTextColor("text-red-600"); 
         
    }

    const handleNight = ()=> { 
        
        setName("Night");
         setBgColor("bg-violet-300"); setBgSelectColor("bg-violet-700"); setTextColor("text-violet-700");
         
    }
    const hOnClose = () =>{setShowBar(false);}

    //
  return (
    <div className='w-full bg-gradient-to-b from-red-200 to-red-600 md:py-5'>
    <div className=' w-full md:w-[550px] md:rounded-xl bg-white m-auto h-full'>
        <div className=" bg-white mx-auto">
        <div className="w-full  flex text-lg md:rounded-t-xl text-bold shadow-lg bg-red-600 text-white text-[20px]">  
        <MenuOutlined onClick={() => setShowBar(true)}  style={{fontSize : '30px'}}/>
        <span className='grow m-auto w-full text-center ' >  Plans  </span>
        <ArrowBack onClick={() => navigate(-1)}  style={{fontSize : '30px'}}/>
        </div>
        <div className="flex pt-2 flex-row text-zinc-500 mobile:w-screen ">
            <button onClick={handlePrev}  className={`m-1 my-auto p-2 w-1/4 font-bold  rounded-lg h-24 border-2   `}> {Type>0?typeSelector[Type-1].name:typeSelector[2].name} <br /> Plan   <div className={` w-full  border-2 text-xs   text-black font-light bg-${ Type>0?typeSelector[Type-1].bgColor:typeSelector[2].bgColor } border-${ Type>0?typeSelector[Type-1].color:typeSelector[2].color } text-center rounded-xl  `}> ... { /* Type>0?typeSelector[Type-1].description:typeSelector[2].description */} </div> </button>
            <button className={`m-1 p-2  rounded-lg border-2 grow font-bold h-32 ${TextColor} `}>  {typeSelector[Type].name} <br /> Plan <div className={` w-full  border-2 text-xs  text-black font-light text-center rounded-xl bg-${typeSelector[Type].bgColor} border-${typeSelector[Type].color} `} > {typeSelector[Type].description} </div></button>
            <button onClick={handleNext} className={`m-1 my-auto p-2 w-1/4 rounded-lg  font-bold h-24 border-2  `}> {Type<2?typeSelector[Type+1].name:typeSelector[0].name} <br /> Plan <div className={` w-full  border-2 text-xs  text-black font-light text-center rounded-xl bg-${ Type<2?typeSelector[Type+1].bgColor:typeSelector[0].bgColor } border-${ Type<2?typeSelector[Type+1].color:typeSelector[0].color }`}> ... {/* Type<2?typeSelector[Type+1].description:typeSelector[0].description */} </div></button>
            
        </div>
        <div className="flex-row py-2 text-zinc-500 flex w-full">
            <button onClick={()=> { setPlan(0); renderPrice(); }} className={`m-2 p-2 w-full font-bold rounded border text-center  ${ Plan===0?`${BgSelectColor} text-white`:BgColor}`}> Student's </button>
            <button onClick={()=> { setPlan(1); renderPrice(); }} className={`m-2 p-2 w-full rounded font-bold  border text-center ${Plan===1?`${BgSelectColor} text-white`:BgColor }`}> Classic </button>
            <button onClick={()=> { setPlan(2); renderPrice(); }} className={`m-2 p-2 w-full rounded border  font-bold text-center ${ Plan===2?`${BgSelectColor} text-white`:BgColor}`}> Premium </button>
        </div>
        </div>
    
        <div className="">
        
        
        <div className="w-full items-center justify-center mt-2 flex text-center text-sm capitalize"> <div> • Monthly subscription price</div> <img src={Refresh} width='20%' onClick={()=> renderPrice()} alt="" srcset="" /> </div> 
        <div className="flex-row py-2 flex pb-0 w-full">
            <div className={`m-2  p-2 w-1/3  pb-0  font-bold  text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> 
                <input
                    className='w-full'
                    type="number"
                    value={nameStudent}
                    onChange={(e) => setNameStudent(e.target.value)}
                />
          </div>
            <div className={`m-2  p-2 w-1/3  pb-0  font-bold  text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> 
            <input
                    className='w-full'
                    type="number"
                    value={nameClassic}
                    onChange={(e) => setNameClassic(e.target.value)}
                />
             </div>
            <div className={`m-2  p-2 w-1/3  pb-0  font-bold  text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> 
            <input
                    className='w-full'
                    type="number"
                    value={namePremium}
                    onChange={(e) => setNamePremium(e.target.value)}
                />
             </div>
        </div>
        { /* 
        <div className="w-full rounded-[50%] p-3 "> <button  className={`w-full ${BgSelectColor} text-white text-[20px] py-2 rounded-[20px]`}> See your choosen Plan</button> </div>
        <div className="w-full mt-2 text-center text-sm capitalize"> Menu </div>
        <div className="w-full text-center text-sx mt-2">
        <div className="w-full mt-2 text-center text-sm capitalize"> Student Morning </div>
            <textarea name="StudentMorning" className='w-[90%] p-2 border' id="" cols="30" rows="10">Default</textarea>
        </div>
        <hr  className='border-black' />
        
        <div className="w-full text-center text-sx mt-2">
        <div className="w-full mt-2 text-center text-sm capitalize"> Student Night </div>
            <textarea name="StudentNight" className='w-[90%] p-2 border' id="" cols="30" rows="10">Default</textarea>
        </div>
        <hr  className='border-black' />

        <div className="w-full text-center text-sx mt-2">
        <div className="w-full mt-2 text-center text-sm capitalize"> Classic Morning </div>
            <textarea name="ClassicMorning" className='w-[90%] p-2 border' id="" cols="30" rows="10">Default</textarea>
        </div>
        <hr  className='border-black' />

        <div className="w-full text-center text-sx mt-2">
        <div className="w-full mt-2 text-center text-sm capitalize"> Classic Night </div>
            <textarea name="ClassicNight" className='w-[90%] p-2 border' id="" cols="30" rows="10">Default</textarea>
        </div>
        <hr  className='border-black' />

        <div className="w-full text-center text-sx mt-2">
        <div className="w-full mt-2 text-center text-sm capitalize"> Premium Morning </div>
            <textarea name="PremiumMorning" className='w-[90%] p-2 border' id="" cols="30" rows="10">Default</textarea>
        </div>
        <hr  className='border-black' />

        <div className="w-full text-center text-sx mt-2">
        <div className="w-full mt-2 text-center text-sm capitalize"> Premium Night </div>
            <textarea name="PremiumNight" className='w-[90%] p-2 border' id="" cols="30" rows="10">Default</textarea>
        </div>
        <hr  className='border-black' />

        <div className="w-full underline-offset-1 text-center py-4 text-sm capitalize">• items  </div>
        


*/}
       
        

        <div className="w-full rounded-[50%] p-3 "> <button onClick={()=> setPrice(name,nameStudent,nameClassic,namePremium)} className={`w-full ${BgSelectColor} text-white text-[20px] py-2 rounded-[20px]`}> Update Plan</button> </div>
        </div>
    </div>
    <Sidedrawer onClose={hOnClose} visible={ShowBar}/>
    
    </div>
  )
}

export default AdminUpdate