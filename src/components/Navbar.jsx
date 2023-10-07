import { Badge} from "@material-ui/core";
import { PersonPinCircle, Brightness4Outlined, TranslateSharp, MenuOutlined } from "@material-ui/icons";

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Lang from "./Lang";
import Logo from "./Logo";

import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { getUserDocument,authentication } from '../firebase-config';
import Sidedrawer from "./Sidedrawer";
const Navbar = () => {
  const [ShowLang, setShowLang] = useState(false);
  const [logState, setLogState] = useState(false);
  const [ShowBar, setShowBar] = useState(false);
  var language = localStorage.getItem('Language');
  
  const handleOnClose = ()=> { setShowLang(false);  }
  const hOnClose = () =>{setShowBar(false);}
  const style =
    'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';
   
    
  return (


    <div className="navbar h-[60px] shadow-md mt-[20px]  text-white bg-[#ff0000] relative z-10 ">
      <Logo/>
      <div className="wrapper pl-[10px] pr-[10px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">


          <div className=" flex items-center px-2">
          <button   onClick={()=> setShowBar(true)}>
          <MenuOutlined  />
          </button>
          </div>


          {/* Logo */}
          <div className="  text-left grow mobile:ml-0 w-[45%]">
          
              <div className = "logo font-bold mobile:text-sm">Hi, {window.name}</div>
              <div className = "logo mobile:text-sm truncate text-ellipsis overflow-hidden " > 
              {logState && 
                <Link to='/map'>
              
                <PersonPinCircle/>         
                    <b>Address: </b> 
                       
                        <u>{window.address}</u> 
                        </Link>
              }
              
              </div>
          </div>

          {/* Right Side */}
          <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
              {/*
              <div className={style}>Register</div >
  <div className={style}>Sign In</div> */}
              <div className={style }>
                <button onClick={()=> setShowLang(true)} className="mx-2"><TranslateSharp/> {language} </button>
                  
                  <Brightness4Outlined/>
              </div>
          </div>

      </div>
      <Lang currentLang={language} onClose={handleOnClose} visible={ShowLang}/>
      <Sidedrawer onClose={hOnClose} visible={ShowBar}/>
    </div>
  );
};

export default Navbar;
