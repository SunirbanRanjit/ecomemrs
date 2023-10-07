import React, { useState } from 'react'
//import {menu} from '../componentApi/MenuApi'
import { getMenu, updateMenu } from '../firebase-config';
import { useEffect } from 'react';

export const MenuTable = ({item} ) => {
    
    const [show,setShow] = useState(false);
    const [menu,setMenu] = useState();
    const [week1,setweek1] = useState();
    const [week2,setweek2] = useState();
    const [week3,setweek3] = useState();
    const [week4,setweek4] = useState();
    useEffect(()=>{
        var data = getMenu();
        data.then(function(info){
            setMenu(info);
            setShow(true);
            //console.log(menu[0]);
            setweek1(info[Plan][item][0]);
            setweek2(info[Plan][item][1]);
            setweek3(info[Plan][item][2]);
            setweek4(info[Plan][item][3]);
        })
    },[]);
    const [Plan,setPlan] = useState(1);
    
    const [Type,setType] = useState(1);
    switch (item) {
        case "Jhol/Curry":
            item = "jhol";
            break;
        case "Rice & Roti":
                item = "rice";
                break;
        case "Daal":
            item = "daal";
            break;
        case "Bhaja/Fry":
            item = "bhaja";
            break;
        case "Seddho-batna":
            item = "seddho";
            break;
        case "Saag":
            item = "saag";
            break;
        case "Torkari/Sabzi":
                item = "sabzi";
                break;
        case "Aachar":
            item = "aachar";
            break;
        default:
            break;
    }
    
  useEffect(()=>{
    setweek1(menu[Plan][item][0]);  setweek2(menu[Plan][item][1]); setweek3(menu[Plan][item][2]); setweek4(menu[Plan][item][3]); 
  },[Plan])  ;
   
  if(!show){
    return (<>Loading ... </>);
  }else{
  return (
    <div className="mx-auto my-2  flex font-bold flex-col text-xs border-4 p-2  border-red-600 text-center text-white w-full"> 
         <div className="flex-row py-2 text-zinc-500 flex w-full">
            <button onClick={()=> { setPlan(0);  }} className={`m-2 p-2 w-full font-bold rounded border text-center  ${ Plan===0?` bg-red-600 text-white`: ``}`}> Student's </button>
            <button onClick={()=> { setPlan(1); }} className={`m-2 p-2 w-full rounded font-bold  border text-center ${Plan===1?` bg-red-600 text-white`: `` }`}> Classic </button>
            <button onClick={()=> { setPlan(2); }} className={`m-2 p-2 w-full rounded border  font-bold text-center ${ Plan===2?` bg-red-600 text-white`: ``}`}> Premium </button>
        </div>
        <div className=" mx-auto w-full bg-red-600"> WEEK 1</div>
        
        <div className="flex flex-col ">
            <div className="flex flex-row border-b border-black bg-red-300 text-red-700 ">
            <div className="basis-[8%] my-auto ">Sl No</div>
            <div className="basis-[10%]  my-auto ">Day</div>
            <div className=" text-center basis-[82%] "> <div onClick={()=>{setType(1);}} className={`w-full px-3 my-1 border-2 rounded-md mx-0 ${Type===1? `   border-red-600 text-red-600 bg-white`: `border-red-300`  } `}>Full Day Plan</div>
            <div className="flex flex-row  text-center"> <div onClick={()=>{setType(0);}} className={`basis-1/2  mb-1  rounded-md border-2  px-4 ${Type===0? ` border-green-600 text-green-600 bg-white`: `border-red-300`  } `}>Morning Plan</div> <div onClick={()=>{setType(2);}} className={`basis-1/2  mb-1  rounded-md border-2  px-4 ${Type===2? `bg-white border-violet-700 text-violet-700`: `border-red-300`  } `}>Night Plan</div> </div>
            </div>
            
            </div>
            {week1.map(i=>{
                return (
                <div className="flex bg-slate-600 flex-row">
                <div className="basis-[8%] border-b py-1 bg-red-300 text-red-700  border-black">{i.no}</div>
                <div className="basis-[10%] border-b py-1 bg-yellow-100 text-black  border-black">{i.day}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===2?`text-slate-300 bg-white`:`bg-green-100  text-green-600`} `}>{i.morning}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===0?`text-slate-300 bg-white`:`bg-violet-200 text-violet-700`} `}>{i.night}</div>
                </div>)
            })}
        </div>

        <div className=" mx-auto mt-0 w-full bg-red-600"> WEEK 2</div>
        
        <div className="flex flex-col">
           
            {week2.map(i=>{
                return (
                <div className="flex bg-slate-600 flex-row">
                <div className="basis-[8%] border-b py-1 bg-red-300 text-red-700  border-black">{i.no}</div>
                <div className="basis-[10%] border-b py-1 bg-yellow-100 text-black  border-black">{i.day}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===2?`text-slate-300 bg-white`:`bg-green-100  text-green-600`} `}>{i.morning}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===0?`text-slate-300 bg-white`:`bg-violet-200 text-violet-700`} `}>{i.night}</div>
                </div>)
            })}
        </div>
        
        <div className=" mx-auto mt-0 w-full bg-red-600"> WEEK 3</div>
        
        <div className="flex flex-col">
            
            {week3.map(i=>{
                return (
                <div className="flex bg-slate-600 flex-row">
                <div className="basis-[8%] border-b py-1 bg-red-300 text-red-700  border-black">{i.no}</div>
                <div className="basis-[10%] border-b py-1 bg-yellow-100 text-black  border-black">{i.day}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===2?`text-slate-300 bg-white`:`bg-green-100  text-green-600`} `}>{i.morning}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===0?`text-slate-300 bg-white`:`bg-violet-200 text-violet-700`} `}>{i.night}</div>
                </div>)
            })}
        </div>

        <div className=" mx-auto mt-0 w-full bg-red-600"> WEEK 4</div>
        
        <div className="flex flex-col">
            
            {week4.map(i=>{
                return (
                <div className="flex bg-slate-600 flex-row">
                <div className="basis-[8%] border-b py-1 bg-red-300 text-red-700  border-black">{i.no}</div>
                <div className="basis-[10%] border-b py-1 bg-yellow-100 text-black  border-black">{i.day}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===2?`text-slate-300 bg-white`:`bg-green-100  text-green-600`} `}>{i.morning}</div>
                <div className={`basis-[41%] border-b py-1  border-black ${Type===0?`text-slate-300 bg-white`:`bg-violet-200 text-violet-700`} `}>{i.night}</div>
                </div>)
            })}
        </div>
       
    </div>
  )}
}
