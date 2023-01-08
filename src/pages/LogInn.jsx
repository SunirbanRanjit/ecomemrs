import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication, createUserDocument, getUserDocument } from '../firebase-config';
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from 'react';



const LogInn = () => {
    const { register, handleSubmit, resetField, watch, formState: { errors } } = useForm();
    const watchPhone = watch('phone');
    const watchOTP = watch('otp');
    const [OTPvisibility,setOTPvisibility] = useState(false);
    const [data1,setData1] = useState();
    const [submitBtn,setSubmitBtn] = useState("Send OTP");
    const nevigate = useNavigate();

    const onSubmit = data => {setData1(data);
       if(submitBtn === "Send OTP"){
        requestOTP();
        handleOTP();
       }else{
        verifyOTP();
       }
    }
    const [flag,setflag] = useState(0);
    useEffect(() => {
        signOut(authentication).then(() => {
            console.log("Sign-out successful."); 
            }).catch((error) => {
            // An error happened.
            });
    },[]);
    const handleOTP = () => {

        if(flag===0){
            setflag(1);
            
        }else{
            setOTPvisibility(errors.phone? false : true);
        }
    };
    const changeNumber = () => {
        setSubmitBtn("Send OTP");
        setflag(0); 
        resetField("phone"); 
        setOTPvisibility(false)
    };
    const genReCaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('reCapcha', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              
            }
          }, authentication);
    }
    const requestOTP = () => {
        var number = watchPhone;
        setSubmitBtn("Verify OTP");        
            
        if(flag===0){
            setflag(1);
            
        }else{
            setOTPvisibility(errors.phone? false : true);
        }

        if(!OTPvisibility){
           genReCaptcha();
           let appVerifier = window.recaptchaVerifier;
           signInWithPhoneNumber(authentication,"+91"+number,appVerifier)
           .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
                console.log("ConfRes : " + confirmationResult);
           })
           .catch((error) => {
                console.log(error);
           })
        }
        
    };
    const verifyOTP = ()=> { 
        let otp = watchOTP;

        if(otp.length === 6){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user.uid);
                //getUserDocument(user.id)
                
                createUserDocument(user.uid,data1.name,data1.address,data1.phone,-1);
                nevigate('/plan');
                // ...
              }).catch((error) => {
                console.log("User couldn't sign in (bad verification code?)"); 
                console.log(error);
                // ...
              });
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
                      { (submitBtn==="Verify OTP") && 
                        <input
                            placeholder='Enter OTP'
                            type="number"
                            {...register("otp", )}
                            className="block w-[40%] px-4 mx-2 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        /> 
                    }
                        
                        
                        </div>
                        <button disabled={!OTPvisibility} onClick={changeNumber} className='w-fit px-4 py-2 mt-2 text-red-700 bg-white border rounded-md '>Change number</button>
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
                    
                    
                    <div className="mt-6">
                       
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-red-700 rounded-[20px] hover:bg-red-600 focus:outline-none focus:bg-red-600">
                           {submitBtn} 
                        </button>
                        
                    </div>
                    <div  id='reCapcha'></div> 
                </form>

                
            </div>
        </div>
  )
}

export default LogInn