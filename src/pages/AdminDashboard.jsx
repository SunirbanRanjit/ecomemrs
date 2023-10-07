import { DeleteForever } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAll, getContact, updateContact } from '../firebase-config'
const AdminDashboard = () => {
    var usrData = [];
    const [userData,setUserData] = useState([]);
    const [phone, setPhone] = useState();
    const [whatsapp,setWhatsapp] = useState();
    const [fbPage , setfbPage] = useState();
    const uid = "test";
    
    useEffect(() => {
         let data = getAll(uid);
         let values = getContact();

        values.then(function(values) {
            console.log(values);
            setPhone(values.phone.value);
            setWhatsapp(values.whatsapp.value);
            setfbPage(values.fbPage.value);
        })

         data.then(function(data) {
        //console.log(data);
        let key;
        for(key in data){
            data[key]["uid"]=key;
            usrData.push(data[key]);
        }
        setUserData(usrData);
    })
    },[]);
    
  return (
    <div>
        <div className="w-full bg-red-700 text-center py-2 text-white font-bold text-xl">Admin Section</div> 
        <div className="flex flex-col w-full">
        <div className="w-full  text-center py-4 text-black font-semibold text-xl">Active customers</div> 
        
        <ul>
      {userData.map((item, index) => (
        <li key={index}><div className="flex border-y-2 my-2">
        <div className="w-fit p-2">{index+1}.</div>
        <Link to='/user-details' state={item}> <div className="grow p-2">{item.name} (Address: {item.address})</div> </Link>
        
    </div></li>
      ))}
    </ul>   
        </div>

        <hr />
        <div className="w-full ">
            <div className="items-center justify-center my-2 w-[70%] mx-auto">
                <Link to='/admin-update'> <button className='w-full mx-auto rounded-[10px] bg-red-700 text-white text-center'> Update plan </button> </Link>
            </div>

            <div className="w-full flex my-2">
                <div className="p-3 grow my-auto " > <input type="number" placeholder='PrevNumber' className='border-b-4' value={phone} onChange={e => setPhone(e.target.value)}  name="phone" id="phone" /> </div>
                <div className=" px-2 m-auto  w-[50%] h-3 ">  <button onClick={updateContact("phone",phone)} className='w-full mx-auto rounded-[10px] px-2  bg-red-700 text-white text-center'> Update phone </button>  </div>
            </div>

            <div className="w-full flex my-2">
                <div className="p-3 grow mb-0"> <input type="number" placeholder='PrevNumber' value={whatsapp} onChange={e => setWhatsapp(e.target.value)} className='border-b-4' name="" id="" /> </div>
                <div className=" px-2 m-auto w-[50%] h-3">  <button onClick={updateContact("whatsapp",whatsapp)} className='w-full mx-auto rounded-[10px] px-2  bg-red-700 text-white text-center'> Update whatsapp </button>  </div>
            </div>

            <div className="w-full my-2 flex">
                <div className="p-3 mb-0 grow"> <input type="text" placeholder='PrevName' value={fbPage} onChange={e => setfbPage(e.target.value)} className='border-b-4' name="" id="" /> </div>
                <div className=" px-2 m-auto w-[50%] h-3 ">  <button onClick={updateContact("fbPage",fbPage)} className='w-full mx-auto rounded-[10px] px-2  bg-red-700 text-white text-center'> Update FB page </button>  </div>
            </div>
        </div>

    </div>
  )
}

export default AdminDashboard