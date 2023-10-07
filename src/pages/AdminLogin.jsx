import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication, newAcc, verifyAdmin } from '../firebase-config';
import {  signOut } from "firebase/auth";
import { useEffect } from 'react';
const AdminLogin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const nevigate = useNavigate();
    const onSubmit = data => {
        if(loginBtn === "Send OTP"){
            requestOTP();
           }else{
            verifyOTP();
           }
    };
    const [loginBtn,setLoginBtn ] = useState("Send OTP");
    const watchPhone = watch('phone');
    const watchOTP = watch('otp');
    
    const signout = () => {
        signOut(authentication).then(() => {
            console.log("Sign-out successful."); 
            }).catch((error) => {
            // An error happened.
            });
    }
    useEffect(() => {
        signout();
           
    },[]);

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
        setLoginBtn("Verify OTP");        
        console.log(number);    
        

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
      
        
    };
    const verifyOTP = ()=> { 
        let otp = watchOTP;

        if(otp.length === 6){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user.uid);
                /*
                
                */
                let isAdmin= verifyAdmin(user.uid);
                isAdmin.then(function(data) {
                    
                    if(data){
                        nevigate('/admin-dashboard');
                    }else{
                        alert("Can't login");
                    } 
                })
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
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-red-600 lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-red-700 uppercase decoration-wavy">
                   Sign in
                </h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            {...register("phone", {required: 'This field is required', min:{value:6000000000 , message: 'Enter valid phone number'} , max:{value:9999999999 , message: 'Enter valid phone number'}})}
                            className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                              <p>{errors.phone?.message}</p>

                    </div>
                    
                    <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            placeholder='OTP'
                            disabled={loginBtn === 'Send OTP'}
                            {...register("otp", {  maxLength:{value:6, }  })}
                            className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                              <p>{errors.otp?.message}</p>

                    <div className="mt-6">
                       
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transhtmlForm bg-red-700 rounded-[20px] hover:bg-red-600 focus:outline-none focus:bg-red-600">
                           {loginBtn}
                        </button>
                        
                    </div>
                    <div  id='reCapcha'></div> 
                </form>
                
                
            </div>
        </div>
  )
}

export default AdminLogin