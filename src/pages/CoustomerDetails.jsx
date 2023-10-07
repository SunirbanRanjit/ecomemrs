import React from 'react'
import userimg from '../assets/user.png'
import heart from '../assets/Heart-image.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { userSavePlan, userUpdatePlan, userVerifyPlan } from '../firebase-config'
import { useState } from 'react'
import { useEffect } from 'react';
import { authentication, getUserDocument } from '../firebase-config';
import { getAuth, onAuthStateChanged} from "firebase/auth";

const CoustomerDetails = () => {
  const location = useLocation();
  const user = location.state;
  const [Activate,setActivate] = useState();
  
  const nevigate = useNavigate();
  const [show, setShow ] = useState(false);
  const [name, setName ] = useState();
  const [address, setAddress ] = useState();
  const [phone, setPhone ] = useState();
  const [plan, setPlan ] = useState();
  const [price, setPrice] = useState();
  const [expiry, setExpiry] = useState("");
  const [menu , setMenu] = useState();
  //console.log(user);
  const activate = ()=> {
    if(Activate){
      setActivate(false);
      userVerifyPlan(user.uid,name, address, phone, plan,price);
      console.log(Activate);
      //window.location.reload(false);
      
      loadApp();
    }else{
      setExpiry("");
      userSavePlan(user.uid,name, address, phone, plan,price);

      setActivate(true);
    }

  }
  const update = ()=> {
    userUpdatePlan(user.uid,name,address,phone,plan,price,expiry);
  }
  const loadApp = async () => {
    setTimeout(() => {
           const uid = user.uid;
          var info = getUserDocument(uid);
          
          info.then(function(data) {
            setName(data.name);
            setAddress(data.address);
            setPhone(data.phone);
            setPlan(data.plan);
            setPrice(data.price);
            console.log(data.date);
            if(data.date===""){
              setActivate(true);
            }else{setExpiry(data.date);
              setActivate(false);
            }
            setShow(true);
          })
          // ...
        
        
    }, 4000);
    
  }
  useEffect(() => {
    loadApp();
  },[]);

  if(!show){
    return(<div className='inset-0 text-center h-full'> Loading... </div>)
  }else{
  return (
    <div className='w-full sm:w-[40%] justify-center items-center mx-auto'>
        <div className="text-center w-full">User's plan is: <div className="w-[40%] h-10 p-1 mx-auto bg-red-400 rounded-[20px] border-4 "> {plan} </div> </div>
        
        <div className="rounded overflow-x-auto m-3 p-3 border-4 border-red-500 mx-auto mt-3 shadow-lg bg-red-100/50">
        <img src={userimg} alt="user" className='float-right w-[30%]' />
            <div className="whitespace-pre-wrap w-full leading-loose "> <u> Customer details: </u>
            <br/> <br/> 
            Name: <u><input
                    className='w-full'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /></u>
            <br/>

            Number:  <u><input
                    className='w-full'
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                /></u>
            <br/>

            Address:  <u><input
                    className='w-full'
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                /></u>
            <br/>

            Plan Name:  <u> {plan} </u>
            <br/>

            Plan Type:  <u>Plan type</u>
            <br/>
            Plan Price:  <u>Rs. <input
                    className='w-full'
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                /></u>
            <br/>

            Starting:  <u></u>
            <br/>
            Expiry:  <u>{expiry}</u></div>
        </div>
        
        <div className="text-center text-xl font-bold capitalize" > 
        <button onClick={activate} className='rounded-[20px] px-3 h-10 w-[50%] bg-red-700 hover:bg-red-700 text-white  m-auto my-2 p-2 py-1 align-middle'> {Activate?"Activate Plan":"Deactivate Plan"} </button>
        <button onClick={update} className='rounded-[20px] px-3 h-10 w-[50%] bg-red-700 hover:bg-red-700 text-white  m-auto my-2 p-2 py-1 align-middle'> Update Details </button>
        <Link to='/admin-dashboard'> <button className='rounded-[20px] px-3 h-10 w-[50%] bg-red-700 hover:bg-red-700 text-white  m-auto my-2 p-2 py-1 align-middle'> Back </button> </Link>
        </div>


    </div>
    )}
}

export default CoustomerDetails