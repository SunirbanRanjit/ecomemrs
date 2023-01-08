import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const RegisterUser = () => {
    const { register, handleSubmit, resetField, watch, formState: { errors } } = useForm();
    const [OTPvisibility,setOTPvisibility] = useState(false);
    const onSubmit = data => console.log(data);
    const [flag,setflag] = useState(0);

    const handleOTP = ()=>{
        console.log(flag);
        if(flag===0){
            setflag(1);
            
        }else{
            setOTPvisibility(errors.phone? false : true);
        }

    }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto mobile:mt-0 bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-red-600 lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-red-700 uppercase decoration-wavy">
                   Register 
                </h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name", {required: 'This field is required'})}
                            className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                              <p>{errors.name?.message}</p>

                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <div className="flex">
                        <input
                            onChange={ handleOTP }
                            type="number"
                            disabled={OTPvisibility}
                            {...register("phone", {required: 'This field is required', min:{value:6000000000 , message: 'Enter valid phone number'} , max:{value:9999999999 , message: 'Enter valid phone number'}})}
                            className="block w-[40%] px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />

                        { OTPvisibility && 
                        <input
                            placeholder='Enter OTP'
                            type="number"
                            {...register("otp", )}
                            className="block w-[40%] px-4 mx-2 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    }
                        <button onClick={handleOTP} className='w-fit px-4 py-2 mt-2 text-red-700 bg-white border rounded-md '>{OTPvisibility?"Verify": "Get OTP"}</button>
                        
                        </div>
                        <button disabled={!OTPvisibility} onClick={()=> { setflag(0); resetField("phone"); setOTPvisibility(false)}} className='w-fit px-4 py-2 mt-2 text-red-700 bg-white border rounded-md '>Change number</button>
                              <p>{errors.phone?.message}</p>
                             

                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="address"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Delivery Address
                        </label>
                        <textarea
                            type="text"
                            {...register("address", {required: 'This field is required'})}
                            className=" resize-y block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                              <p>{errors.address?.message}</p>

                    </div>
                    
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: 'This field is required', minLength:{value:5, message: 'Pasword is too short'}  })}
                            className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                              <p>{errors.password?.message}</p>

                    </div>
                    
                    <div className="mt-6">
                       
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-red-700 rounded-[20px] hover:bg-red-600 focus:outline-none focus:bg-red-600">
                            Sign Up
                        </button>
                        
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already registered?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-red-600 hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default RegisterUser