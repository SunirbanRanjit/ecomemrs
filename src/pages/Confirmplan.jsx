import { ArrowBack, ArrowForward, MenuOutlined } from '@material-ui/icons';
import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { authentication, getUserDocument, userSavePlan } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const Confirmplan = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const Plan = location.state[0];
    const Type = location.state[1];
    const price = location.state[2];
    console.log(Type);
    const menu = [
      ["Student Morning","Student Full Day","Student Night"],
      ["Classic Morning","Classic Full Day","Classic Night"],
      ["Premium Morning","Premium Full Day","Premium Night"]
  ]
    const nevigate = useNavigate();
    const confirmPlanUser = () => {
      
      onAuthStateChanged(authentication, (user)=>{
        if(user){
          const uid = user.uid;
          //console.log(user.phoneNumber);
          //userSavePlan(uid,)
          let val = getUserDocument(uid);
          val.then(function(values){
            userSavePlan(uid,values.name,values.address,values.phone,menu[Plan][Type],price);
          })
          //alert("Saved successfully. Our executive will contact you shortly. \n Have a nice day. Thank you");
          nevigate('/plan-display');
        }else{
          nevigate('/login');
        }
      })
    }
    const quality = [
      {
        class:"Student",
        rice:"White Searna",
        daal:"Good",
        vagetables:"Good",
        oil:"Packaged",
        spice:"Packaged",
      },
      {
        class:"Standard",
        rice:"Miniket",
        daal:"Better",
        vagetables:"Better",
        oil:"From Mill",
        spice:"Mechine Grinded",
      },
      {
        class:"Classic",
        rice:"Basmati",
        daal:"Best",
        vagetables:"Best",
        oil:"Cold Pressed",
        spice:"Hand Grinded",
      }
    ]
    const planSelection = [
      {
        type: "Morning",
        color: "green-600",

      },
      {
        type: "Full Day",
        color: "red-600",
      },
      {
        type: "Night",
        color: "violet-700",
      }
    ]
  return (
    <div className='w-full flex flex-col text-white'>
      <div className="w-full  flex text-lg md:rounded-t-xl text-bold shadow-lg bg-red-600  text-[20px]">  
        <MenuOutlined onClick={() => navigate(-1)}  style={{fontSize : '30px'}}/>
        <span className='grow m-auto w-full text-center ' >Your  Plan Details</span>
        <ArrowBack onClick={() => navigate(-1)}  style={{fontSize : '30px'}}/>
        </div>
        <div className={` w-[80%] mx-auto text-center rounded-lg my-3 py-2 text-lg bg-${planSelection[Type].color} `}> {planSelection[Type].type} </div>
        <div className="mx-auto px-5 pt-0 my-2 text-center text-black">Monthly Subscription</div>
        <div className="ml-2 my-1 text-black">Price <ArrowForward/> <u>Rs. {price}</u> </div>
        <div className="w-[90%] mx-auto flex flex-col text-black">
          <div className="mx-auto text-center"> Items </div>
          <ul>
            <li>Rice</li>
            {Plan === 1 && 
              <li>Seddho/ Batna/ Bhaja</li>
            }
            {Plan === 1 && 
              <li>Shaak/ Torkari</li>
            }
            {Plan === 2 && 
              <li>Seddho/ Batna</li>
            }
            {Plan === 2 && 
              <li>Bhaja</li>
            }
            <li>Daal</li>
            <li>Jhol</li>
            {Plan === 0 && 
              <li>Aachar</li>
            }
            {Plan === 2 && 
              <li>Aachar/ Chutney</li>
            }
            

          </ul>
          <div className="mx-auto text-bold text-lg my-3 text-center"> Ingredient's Quality</div>
          <div className="mx-auto text-center"> Rice : {quality[Type].rice}</div>
          <div className="mx-auto text-center"> Daal : {quality[Type].daal}</div>
          <div className="mx-auto text-center"> Vegetable : {quality[Type].vagetables}</div>
          <div className="mx-auto text-center"> Oil : {quality[Type].oil}</div>
          <div className="mx-auto text-center"> Spice : {quality[Type].spice}</div>
          <div className="mx-auto text-bold text-lg my-3 text-center"> {planSelection[Plan].duration} Menu</div>
          <div className="overflow-scroll h-[50vh] relative  "> <img src={location.state[3]} className='w-full mx-0 px-0' alt="" srcset="" /> </div>
        </div>

       
        <div onClick={confirmPlanUser} className={`w-[70%] rounded-3xl mx-auto  p-2 text-center bg-${planSelection[Type].color} text-white`}> Buy Plan </div> 
    </div>
  )
}

export default Confirmplan