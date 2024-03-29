import React from 'react'
import user from '../assets/user.png'
import heart from '../assets/Heart-image.png'
import { Link, useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { authentication, getUserDocument } from '../firebase-config';
import Pdf from '../components/Pdf';
import { useEffect } from 'react';
import { useState } from 'react';




const PlanDisplay = () => {
  const [show, setShow ] = useState(false);
  const [name, setName ] = useState();
  const [address, setAddress ] = useState();
  const [phone, setPhone ] = useState();
  const [plan, setPlan ] = useState();
  const [price, setPrice] = useState();
  const [expiry, setExpiry] = useState(undefined);
  const [menu , setMenu] = useState();
  const fileName = "invoice.pdf";
  //const PlanName = ['Student', 'standard', 'classic'];
  //const PlanPrice = ['1111','2222','4444'];
  const nevigate = useNavigate();
  const [download, setDownload] = useState();
  const loadApp = async () => {
    setTimeout(() => {
      onAuthStateChanged(authentication, (user) => {
        if (user) {
           const uid = user.uid;
          var info = getUserDocument(uid);
          
          info.then(function(data) {
            setName(data.name);
            setAddress(data.address);
            setPhone(data.phone);
            setPlan(data.plan);
            setPrice(data.price);
            
            setShow(true);
            
              setExpiry(data.date);
            
            
          })
          // ...
        } else {
          nevigate('/');
        }
      });  
    }, 4000);
    
  }
  useEffect(() => {
    loadApp();
  },[]);

   
  
  if(!show){
    return(<div> Loading... </div>)
  }else{
  return (
    <div className='w-full sm:w-[40%] justify-center items-center mx-auto'>
      
        <div className="text-center  w-full">Your choosen plan is: <div className="w-[40%] h-10 p-1 mx-auto bg-red-400 rounded-[20px] border-4 "> {plan}  </div> </div>
        
        <div className="rounded overflow-x-auto m-3 p-3 border-4 border-red-500 mx-auto mt-3 shadow-lg bg-red-100/50">
        <img src={user} alt="user" className='float-right w-[30%]' />
            <div className="whitespace-pre-wrap w-full leading-loose "> <u> Customer details: </u>
            <br/> <br/> 
            Name: <u>{name}</u>
            <br/>

            Number:  <u>{phone}</u>
            <br/>

            Address:  <u>{address}</u>
            <br/>

            Plan Name:  <u>{plan}</u>
            <br/>

            Plan Type:  <u>Plan type</u>
            <br/>
            Plan Price:  <u>Rs. {price}</u>
            <br/>
            Items:  <u>item1, item2, item3</u>
            <br/>

            Starting:  <u>01/01/2022 </u>
            <br/>
            Expiry:  <u>{expiry}</u></div>
        </div>
        
        <div className="text-center text-l py-2  font-bold capitalize" > Thanks for choosing <u> {plan} plan </u>
        <div className="w-12 mx-auto mt-3"> <img src={heart} alt="" width='100%'  /> </div>
          <p className='text-sm font-thin my-3'> {expiry===""?"Our Executive eill reach soon to your location to collect the money. Your delivery will be started from next day.":"Hope you are enjoying Anno."}</p>
          
          <PDFDownloadLink
          document={<Pdf {...{name,address,phone,plan,price,expiry}} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice "
          }
        </PDFDownloadLink>
  
        <br />
        <Link to='/'> <button className='rounded-[20px] px-3 h-10 w-15 bg-red-300 hover:bg-red-700 hover:text-white text-black mx-auto my-2 p-2'> CONFIRM PLAN </button> </Link>
        </div>
    

    </div>
        
  )}
}

export default PlanDisplay