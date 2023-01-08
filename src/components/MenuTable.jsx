import React from 'react'
import { jhol } from '../componentApi/MenuApi'

export const MenuTable = ({item} ) => {
    
    const week1 = jhol[0];
    const week2 = jhol[1];
    const week3 = jhol[2];
    const week4 = jhol[3];
  return (
    <div className="mx-auto flex  flex-col text-sm border-red-600 text-center text-white w-full"> 
        <div className=" mx-auto w-full bg-blue-800"> WEEK 1</div>
        
        <div className="flex flex-col">
            <div className="flex flex-row bg-red-300 text-red-700 ">
            <div className="basis-1/12 border border-black">Serial No.</div>
            <div className="basis-1/4 border border-black">Day</div>
            <div className="basis-1/3 border border-black">Morning</div>
            <div className="basis-1/3 border border-black">Dinner</div>
            </div>
            {week1.map(i=>{
                return (
                <div className="flex bg-slate-600 flex-row">
                <div className="basis-1/12 border bg-red-300 text-red-700  border-black">{i.no}</div>
                <div className="basis-1/4 border bg-yellow-300 text-black  border-black">{i.day}</div>
                <div className="basis-1/3 border bg-green-300 text-black  border-black">{i.morning}</div>
                <div className="basis-1/3 border bg-violet-500 text-black  border-black">{i.night}</div>
                </div>)
            })}
        </div>
        
    </div>
  )
}
