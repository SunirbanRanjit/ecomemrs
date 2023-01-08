import React from 'react'
import user from '../assets/user.png'
import heart from '../assets/Heart-image.png'
import { Link } from 'react-router-dom'
const CoustomerDetails = () => {
  return (
    <div className='w-full sm:w-[40%] justify-center items-center mx-auto'>
        <div className="text-center w-full">User's plan is: <div className="w-[40%] h-10 p-1 mx-auto bg-red-400 rounded-[20px] border-4 "> Plan </div> </div>
        
        <div className="rounded overflow-x-auto m-3 p-3 border-4 border-red-500 mx-auto mt-3 shadow-lg bg-red-100/50">
        <img src={user} alt="user" className='float-right w-[30%]' />
            <div className="whitespace-pre-wrap w-full leading-loose "> <u> Customer details: </u>
            <br/> <br/> 
            Name: <u>Firstname Secondname</u>
            <br/>

            Number:  <u>9999999999</u>
            <br/>

            Address:  <u>This is addres. pin- xxxxxxx</u>
            <br/>

            Plan Name:  <u>Plan Name </u>
            <br/>

            Plan Type:  <u>Plan type</u>
            <br/>
            Plan Price:  <u>Rs. xxxx</u>
            <br/>
            Items:  <u>item1, item2, item3</u>
            <br/>

            Starting:  <u>01/01/2022 </u>
            <br/>
            Expiry:  <u>01/01/2023</u></div>
        </div>
        
        <div className="text-center text-xl font-bold capitalize" > 
        <Link to='/admin-dashboard'> <button className='rounded-[20px] px-3 h-10 w-[50%] bg-red-700 hover:bg-red-700 text-white  m-auto my-2 p-2 py-1 align-middle'> Back </button> </Link>
        </div>


    </div>
  )
}

export default CoustomerDetails