import { ArrowBack, MenuOutlined, Radio } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {   getPrice } from '../firebase-config';
import studentMorning from '../assets/sm.jpg';
import studentNight from '../assets/sn.jpg';
import studentFull from '../assets/sf.jpg';

import classicMorning from '../assets/cm.jpg';
import classicNight from '../assets/cn.jpg';
import classicFull from '../assets/cf.jpg';

import premiumMorning from '../assets/pm.jpg';
import premiumNight from '../assets/pn.jpg';
import premiumFull from '../assets/pf.jpg';

import './style.css'
import Sidedrawer from '../components/Sidedrawer';
import { useEffect } from 'react';

const Planform = () => {
    const [Plan,setPlan] = useState(1);
    const [BgColor, setBgColor] = useState("bg-red-300");
    const [BgSelectColor,setBgSelectColor] = useState("bg-red-500");
    const [TextColor,setTextColor] = useState("text-red-500");
    const [Type,setType] = useState(1);
    const [ShowBar, setShowBar] = useState(false);
    const [retPrice,setRetPrice] = useState();
    const navigate = useNavigate();
    const [name, setName ] = useState("Full");
    const [price,setPrice ] = useState();
    const menu = [
        [studentMorning,studentFull,studentNight],
        [classicMorning,classicFull,classicNight],
        [premiumMorning,premiumFull,premiumNight]
    ]
const getPrices = ()=> {
    let prices=getPrice();
    prices.then(function(values) {
        //console.log(values);
        setPrice(values);
        //console.log(price);
        
    });
}
useEffect(()=>{
    getPrices();
    

},[]);
    const typeSelector = [
        {
            name: "Morning",
            type: 0,
            description:  "1 Meal every morning" ,
            color: "border-green-600",
            bgColor: "green-300",
        },
        {
            name: "Full Day",
            type: 1,
            description:  "1 meal / morning + 1 meal / night"  ,
            color: "border-red-600",
            bgColor: "red-300",
        },
        {
            name: "Night",
            type: 2,
            description:  "1 Meal every night" ,
            color: "border-violet-700",
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
        getPrices();
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
    if(price === undefined){
        console.log("checked");
        
        return (<div>Loading...</div>)
    }
    
    
  return (
    
    <div className='w-full bg-gradient-to-b from-red-200 to-red-600 md:py-5'>
    <div className=' w-full md:w-[550px] md:rounded-xl bg-white m-auto h-full'>
        <div className="mobile:fixed bg-white mx-auto">
        <div className="w-full  flex text-lg md:rounded-t-xl text-bold shadow-lg bg-red-600 text-white text-[20px]">  
        <MenuOutlined onClick={() => setShowBar(true)}  style={{fontSize : '30px'}}/>
        <span className='grow m-auto w-full text-center ' >  Plans  </span>
        <ArrowBack onClick={() => navigate(-1)}  style={{fontSize : '30px'}}/>
        </div>
        <div className="flex pt-2 flex-row text-zinc-500 mobile:w-screen ">
            <button onClick={handlePrev}  className={`m-1 my-auto p-2 w-1/4 font-bold rounded-lg h-24 border-2   `}> {Type>0?typeSelector[Type-1].name:typeSelector[2].name} <br /> Plan   <div className={` w-full  border-2 text-xs   text-black font-light bg-${ Type>0?typeSelector[Type-1].bgColor:typeSelector[2].bgColor } border-${Type>0?typeSelector[Type-1].color:typeSelector[2].color} text-center rounded-xl  `}> ... { /* Type>0?typeSelector[Type-1].description:typeSelector[2].description */} </div> </button>
            <button className={`m-1 p-2  rounded-lg border-2 grow font-bold h-32 ${TextColor} ${typeSelector[Type].color} `}>  {typeSelector[Type].name} <br /> Plan <div className={` w-full  border-2 text-xs  text-black font-light text-center rounded-xl bg-${typeSelector[Type].bgColor} ${typeSelector[Type].color} `} > {typeSelector[Type].description} </div></button>
            <button onClick={handleNext} className={`m-1 my-auto p-2 w-1/4 rounded-lg font-bold h-24 border-2   `}> {Type<2?typeSelector[Type+1].name:typeSelector[0].name} <br /> Plan <div className={` w-full  border-2 text-xs  text-black font-light text-center rounded-xl bg-${ Type<2?typeSelector[Type+1].bgColor:typeSelector[0].bgColor } border-${Type<2?typeSelector[Type+1].color:typeSelector[0].color}`}> ... {/* Type<2?typeSelector[Type+1].description:typeSelector[0].description */} </div></button>
            
        </div>
        <div className="flex-row py-2 text-zinc-500 flex w-full">
            <button onClick={()=> { setPlan(0); setRetPrice(price[name].student) }} className={`m-2 p-2 w-full font-bold rounded border text-center  ${ Plan===0?`${BgSelectColor} text-white`:BgColor}`}> Student's </button>
            <button onClick={()=> { setPlan(1); setRetPrice(price[name].classic) }} className={`m-2 p-2 w-full rounded font-bold  border text-center ${Plan===1?`${BgSelectColor} text-white`:BgColor }`}> Classic </button>
            <button onClick={()=> { setPlan(2); setRetPrice(price[name].premium) }} className={`m-2 p-2 w-full rounded border  font-bold text-center ${ Plan===2?`${BgSelectColor} text-white`:BgColor}`}> Premium </button>
        </div>
        </div>
    
        <div className="mobile:pt-[60%]">
        
        
        <div className="w-full mt-2 items-center justify-center text-center text-sm capitalize"> • Monthly subscription price </div>
        <div className="flex-row py-2 flex pb-0 w-full">
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> {price[name].student} </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> {price[name].classic} </div>
            <div className={`m-2  p-2 w-full  pb-0  font-bold  text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> {price[name].premium} </div>
        </div>
        <hr  className='border-black' />
        

        <div className="w-full underline-offset-1 text-center py-4 text-sm capitalize">• items  </div>
        <div className="grid grid-cols-3 font-bold text-sm text-center pb-4">
            <div className={ `${ Plan===0?TextColor: "text-zinc-300"}`}>Rice</div>
            <div className={ `${ Plan===1?TextColor: "text-zinc-300"}`}>Rice</div>
            <div className={ `${ Plan===2?TextColor: "text-zinc-300"}`}>Rice</div>

            <div className={ `${ Plan===0?TextColor: "text-zinc-300"}`}>Daal</div>
            <div className={ `text-xs ${ Plan===1?TextColor: "text-zinc-300"}`}>Seddho/ Batna/ Bhaja</div>
            <div className={ `${ Plan===2?TextColor: "text-zinc-300"}`}>Seddho/ Batna</div>

            <div className={ `${ Plan===0?TextColor: "text-zinc-300"}`}>Jhol</div>
            <div className={ `${ Plan===1?TextColor: "text-zinc-300"}`}>Shaak/ Torkari</div>
            <div className={ `${ Plan===2?TextColor: "text-zinc-300"}`}>Bhaja</div>

            <div className={ `${ Plan===0?TextColor: "text-zinc-300"}`}>Aachar</div>
            <div className={ `${ Plan===1?TextColor: "text-zinc-300"}`}>Daal</div>
            <div className={ `${ Plan===2?TextColor: "text-zinc-300"}`}>Daal</div>

            <div className={ `${ Plan===0?TextColor: "text-zinc-300"}`}></div>
            <div className={ `${ Plan===1?TextColor: "text-zinc-300"}`}>Jhol</div>
            <div className={ `${ Plan===2?TextColor: "text-zinc-300"}`}>Jhol</div>

            <div className={ `${ Plan===0?TextColor: "text-zinc-300"}`}></div>
            <div className={ `${ Plan===1?TextColor: "text-zinc-300"}`}></div>
            <div className={ `${ Plan===2?TextColor: "text-zinc-300"}`}>Aachar/ Chutney</div>
        </div>



       
        <div className="w-full text-center   text-sm capitalize"> Ingredient's Quality  <hr color="black"/> • Rice type </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full  text-sm  text-center ${ Plan===0?TextColor: "text-zinc-300"} `}>White Swarna </div>
            <div className={`m-2  mt-0 py-2  w-full  text-base  text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> Miniket </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> Basmati </div>
        </div>
        <hr color='black' />
        
        <div className="w-full  text-center text-sm capitalize">  • Daal type </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> Good </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> Better </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> Best </div>
        </div>
        <hr color='black' />
        
        <div className="w-full  text-center text-sm capitalize">  • Vagetables </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> Good </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> Better </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> Best </div>
        </div>
        <hr  className='border-black' />

        <div className="w-full  text-center text-sm capitalize">  • Oil </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> Packaged </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> From Mill </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> Cold Pressed </div>
        </div>
        <hr color='black' />

        <div className="w-full  text-center text-sm capitalize"> • Spice </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> Packaged </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> Machine Grinded </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> Hand Grinded </div>
        </div>
        <hr color='black' />

        <div className="w-full  text-center text-sm capitalize"> • Rice Quantity </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> 450gm - 500gm </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> 450gm - 500gm </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> 450gm - 500gm </div>
        </div>
        <hr color='black' />

        <div className="w-full  text-center text-sm capitalize"> • Chicken Portion Size </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> 2 pcs </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> 3 pcs </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> 4 pcs </div>
        </div>
        <hr color='black' />

        <div className="w-full  text-center text-sm capitalize"> • Fish Portion Size </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> 1 pc <br /> (35gm-40gm) </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> 1 pc <br />(40gm-45gm) </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> 1 pc <br />(45gm-50gm) </div>
        </div>
        <hr color='black' />

        <div className="w-full  text-center text-sm capitalize"> • Paneer Portion Size </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> 5 pcs <br />(25gm-30gm) </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> 6 pcs <br />(30gm-35gm) </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> 7 pcs <br />(35gm-40gm) </div>
        </div>
        <hr color='black' />

        <div className="w-full  text-center text-sm capitalize"> • Egg Portion Size </div>
        
        <div className="flex-row py-2 pt-0 flex font-bold w-full">
            <div className={`m-2 mt-0 py-2 w-full    text-center ${ Plan===0?TextColor: "text-zinc-300"} `}> 1 pc </div>
            <div className={`m-2  mt-0 py-2  w-full    text-center ${ Plan===1?TextColor: "text-zinc-300"} `}> 1 pc </div>
            <div className={`m-2 py-2 mt-0 w-full     text-center ${ Plan===2?TextColor: "text-zinc-300"} `}> 1 pc </div>
        </div>
        <hr color='black' />
        <div className="w-full  text-center text-sm capitalize"> • Menu </div>
        <div className="overflow-scroll h-[50vh] relative  "><img src={menu[Plan][Type]} className='  my-3  mx-0 px-0' alt="" srcset="" /></div> 
        <div onClick={()=>{setRetPrice(price[name].classic);}} className="w-full rounded-[50%] p-3 "> <Link to='/confirm' state={[Plan,Type,retPrice===undefined?price[name].classic:retPrice,menu[Plan][Type]]}> <button  className={`w-full ${BgSelectColor} text-white text-[20px] py-2 rounded-[20px]`}> See your choosen Plan</button> </Link> </div>
        </div>

    </div>
    
    <Sidedrawer onClose={hOnClose} visible={ShowBar}/>
    
    </div>
  )
}

export default Planform