import { DeleteForever } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
        <div className="w-full bg-red-700 text-center py-2 text-white font-bold text-xl">Admin Section</div> 
        <div className="flex flex-col w-full">
        <div className="w-full  text-center py-4 text-black font-semibold text-xl">Active customers</div> 
            <div className="flex border-y-2 my-2">
                <div className="w-fit p-2">1.</div>
                <Link to='/user-details'> <div className="grow p-2">Firstname SecondName (Address: This is address....)</div> </Link>
                <div className="w-[30%] text-center p-2"> <DeleteForever/> </div>
            </div>

            <div className="flex border-y-2 my-2">
                <div className="w-fit p-2">2.</div>
                <Link to='/user-details'> <div className="grow p-2">Firstname SecondName (Address: This is address....)</div> </Link>
                <div className="w-[30%] text-center p-2"> <DeleteForever/> </div>
            </div>

            <div className="flex border-y-2 my-2">
                <div className="w-fit p-2">3.</div>
                <Link to='/user-details'> <div className="grow p-2">Firstname SecondName (Address: This is address....)</div> </Link>
                <div className="w-[30%] text-center p-2"> <DeleteForever/> </div>
            </div>
        </div>

        <hr />
        <div className="w-full ">
            <div className="items-center justify-center my-2 w-[70%] mx-auto">
                <Link to='/admin-update'> <button className='w-full mx-auto rounded-[10px] bg-red-700 text-white text-center'> Update plan </button> </Link>
            </div>

            <div className="w-full flex my-2">
                <div className="p-3 grow my-auto " > <input type="number" placeholder='PrevNumber' className='border-b-4' name="" id="" /> </div>
                <div className=" px-2 m-auto  w-[50%] h-3 ">  <button className='w-full mx-auto rounded-[10px] px-2  bg-red-700 text-white text-center'> Update phone </button>  </div>
            </div>

            <div className="w-full flex my-2">
                <div className="p-3 grow mb-0"> <input type="number" placeholder='PrevNumber' className='border-b-4' name="" id="" /> </div>
                <div className=" px-2 m-auto w-[50%] h-3">  <button className='w-full mx-auto rounded-[10px] px-2  bg-red-700 text-white text-center'> Update whatsapp </button>  </div>
            </div>

            <div className="w-full my-2 flex">
                <div className="p-3 mb-0 grow"> <input type="text" placeholder='PrevName' className='border-b-4' name="" id="" /> </div>
                <div className=" px-2 m-auto w-[50%] h-3 ">  <button className='w-full mx-auto rounded-[10px] px-2  bg-red-700 text-white text-center'> Update FB page </button>  </div>
            </div>
        </div>

    </div>
  )
}

export default AdminDashboard