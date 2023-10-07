import { ArrowBack, MenuOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCookies} from 'react-cookie';
import {  signOut } from "firebase/auth";
import { authentication } from '../firebase-config';
const Sidedrawer = ({visible,onClose}) => {
  const [cookie, setCookie, removeCookie] = useCookies(['Anno']);
  const myCookieValue = cookie['Anno'];
  
  console.log(myCookieValue);

    if(!visible) return null;
  const save = ()=>{
    //console.log("hello");
    onClose();
  }
  const signout = () => {
    signOut(authentication).then(() => {
        console.log("Sign-out successful."); 
        }).catch((error) => {
        // An error happened.
        });
      }
  const handleSignOut = ()=> {
    removeCookie('Anno');
    signout();
  }
  
  return (
    <div className="fixed inset-y-0  top-[30px] bg-opacity-30 backdrop-blur bg-white font-bold h-full w-2/3 flex rounded-3xl flex-col  ">
            <div className="w-full justify-center items-center m-auto border-b-2 px-2 pt-2 pb-3 border-black py-2  bg-red-700"> <button onClick={save} ><MenuOutlined /></button> Anno Kitchen  <button onClick={save} className=''><ArrowBack/></button> <br /> {myCookieValue===undefined ?  (<Link to='/login'> <div className="p-2 rounded-xl w-fit mt-6 border-2">Log in</div> </Link>) : (<div> {myCookieValue.name} <button onClick={handleSignOut} className="p-2 rounded-xl w-fit mt-6 border-2">Log out</button> </div>)}  </div>
            <div className="w-full grow px-2 flex flex-col py-3 mx-0 bg-white text-black"> 
                <Link to='/'> <div className="w-full hover:bg-slate-400 py-3"> Home </div> </Link>
                
                <Link to='/how-it-works'> <div className="w-full py-2 hover:bg-slate-400"> How it works </div></Link>
                <Link to='/why-anno'><div className="w-full py-2 hover:bg-slate-400"> Why to choose Anno </div></Link>
                {/* <Link to='/admin-dashboard'><div className="w-full py-2 hover:bg-slate-400"> Admin Section </div></Link> */}                {myCookieValue===undefined ?"": <Link to='/plan-display'><div className="w-full hover:bg-slate-400 py-2"> Your Menu </div></Link> }
                <div className="w-full hover:bg-slate-400 py-2"><a href='https://wa.me/916289705647' target="_blank">  Need help? Chat with us </a> </div>
                <div className="w-full hover:bg-slate-400 py-2"> Terms and conditions </div>
                <div className="w-full hover:bg-slate-400 py-2"> Special order </div>
                <div className="w-full hover:bg-slate-400 py-2"> Job vacency </div>
                <div className="w-full hover:bg-slate-400 py-2"> About us </div>
                <Link to='/admin-login'>  <div className="w-full hover:bg-slate-400 py-2"> For Admin </div></Link>
             </div>
    </div>
  )
}

export default Sidedrawer