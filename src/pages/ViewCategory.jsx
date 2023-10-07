import { ArrowBack } from '@material-ui/icons';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuTable } from '../components/MenuTable';
const ViewCategory = () => {
    const location = useLocation();
    let navigate = useNavigate();
    //console.log(location.state);
    
  return (
    <div className="w-full h-screen center-items flex flex-col" >
        <div className="w-full bg-red-600 text-white flex">
            <div className="grow text-center  text-[30px]"> {location.state[1]}  </div> 
            <div className='m-2'> <button onClick={() => navigate(-1)}><ArrowBack style={{fontSize : '30px'}}/> </button> </div>
        </div>
        <MenuTable item={location.state[1]} ></MenuTable>
  
    </div>
  )
}

export default ViewCategory